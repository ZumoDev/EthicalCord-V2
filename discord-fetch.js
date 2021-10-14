const fetch = require('node-fetch')

module.exports = async (path, obj) => {
    if (!path) throw new Error('No path was provided')
    if (!obj || typeof obj != 'object') throw new SyntaxError('"obj" must be an object')

    let r = await fetch('https://discord.com/api/v9'+path, obj)
    return await r.json()

}
