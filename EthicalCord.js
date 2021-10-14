const req = require('../discord-fetch')

module.exports = class Methods {
    constructor(token='') {
        this.authToken = token
    }

    login(token) {
        if (this.authToken) throw new Error('Token already defined')
        if (!token) throw new SyntaxError('No token was provided')

        this.authToken = token
    }

    self() {
        if (!this.authToken) throw new Error('No token was provided')

        return req('/users/@me', {method: 'GET', headers: { Authorization: this.authToken }})
        
    }

    user(id) {
        if (!this.authToken) throw new Error('No token was provided')
        if (!id) throw new Error('No ID was provided')

        return req('/users/'+id, {method: 'GET', headers: {Authorization: this.authToken}})
    }

    guild(id) {
        if (!this.authToken) throw new Error('No token was provided')
        if (!id) throw new Error('No ID was provided')

        return req('/guilds/'+id, {method: 'GET', headers: {Authorization: this.authToken}})
    }

    guildChannels(id) {
        if (!this.authToken) throw new Error('No token was provided')
        if (!id) throw new Error('No ID was provided')

        return req('/guilds/'+id+'/channels', {method: 'GET', headers: {Authorization: this.authToken}})
    }

    channelMessages(id) {
        if (!this.authToken) throw new Error('No token was provided')
        if (!id) throw new Error('No ID was provided')

        return req('/channels/'+id+'/messages', {method: 'GET', headers: {Authorization: this.authToken}})
    }

    channel(id) {
        if (!this.authToken) throw new Error('No token was provided')
        if (!id) throw new Error('No ID was provided')

        return req('/channels/'+id, {method: 'GET', headers: {Authorization: this.authToken}})
    }

    logs(id) {
        if (!this.authToken) throw new Error('No token was provided')
        if (!id) throw new Error('No ID was provided')

        return req('/guilds/'+id+'audit-logs', {method: 'GET', headers: {Authorization: this.authToken}})
    }
}
