const axios = require("axios");

async function update(key, value) {
    if (!key || !value) throw new Error('Need key & value!');
    if (!process.env.KOYEB_API_KEY) throw new Error('Koyeb API Key not found!');

    const config = {
        headers: { Authorization: `Bearer ${process.env.KOYEB_API_KEY}` }
    };

    try {
        console.log("Fetching deployments...");
        const dep = await axios.get('https://app.koyeb.com/v1/deployments', config);

        if (!dep.data.deployments || dep.data.deployments.length === 0) {
            throw new Error("No deployments found.");
        }

        const deployment = dep.data.deployments[0];
        const env = deployment.definition.env;

        if (!env || !Array.isArray(env)) {
            throw new Error("Invalid environment variable structure in deployment.");
        }

        console.log("Updating environment variables...");
        let matched = env.filter(e => e.key === key);

        if (matched.length) {
            if (key !== "UPDATER" && env[env.indexOf(matched[0])]['value'] === value) {
                console.log("No update needed: Key already has the desired value.");
                return true;
            }
            env[env.indexOf(matched[0])]['value'] = value;
        } else {
            env.push({ scopes: env[0].scopes, key, value });
        }

        console.log("Patching service with updated environment variables...");
        const result = await axios.patch(
            `https://app.koyeb.com/v1/services/${deployment.service_id}`,
            { "definition": deployment.definition },
            config
        );

        console.log("Update successful.", result.data);
        return true;
    } catch (error) {
        console.error("Error during update:", error.response?.data || error.message);
        throw new Error(error.message);
    }
}

module.exports = { update };
