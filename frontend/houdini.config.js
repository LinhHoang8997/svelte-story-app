/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
    "watchSchema": {
        "url": "http://127.0.0.1:1337/graphql",
        "headers": {
            Authentication(env) {
                return `Bearer ${env.STRAPI_GRAPHQL_API_URL}`
            }
        }
    },
    "plugins": {
        "houdini-svelte": {}
    },
    "cacheBufferSize": 0
}

export default config
