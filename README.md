# EthicalCord-V2
A better version of [EthicalCord](https://github.com/ZumoDev/EthicalCord); made with [discord-fetch](https://github.com/ZumoDev/discord-fetch) 

# Table of Contents
[Requirements](#requirements) 

[Instalation](#instalation)

[Examples](#examples)
- [Logging in](#logging-in)
- [User Info](#user-info)
- [Server Info](#server-info)
- [Channel Info](#channel-info)
- [Get Audit Logs](#get-audit-logs)

[API](#api)
- [Class: Client](#class-client)
  - [Client.login(token)](#clientlogintoken)
  - [Client.self()](#clientself)
  - [Client.user(id)](#clientuserid)
  - [Client.guild(id)](#clientguildid)
  - [Client.guildChannels(id)](#clientguildchannelsid)
  - [Client.channel(id)](#clientchannelid)
  - [Client.channelMessages(id)](#clientchannelmessagesid)
  - [Client.logs(id)](#clientlogsid)
 
 [Credits](#credits)

# Requirements
- `node-fetch@2.6.4` (`npm i node-fetch@2.6.4`)
- `discord-fetch` (`git clone https://github.com/ZumoDev/discord-fetch`) (Already installed in EthicalCordV2) 

# Instalation
- `git clone https://github.com/ZumoDev/EthicalCord-V2`

# Examples

## Logging in
```js
const Client = require('./EthicalCord-V2'), //imports Client
  client = new Client() //creates Client
client.login('my super secret token') //logs in

client.self().then(res => {
    if (res.username != undefined) {console.log(`Logged in as ${res.username}#${res.discriminator}`)}
    else console.error(res) && process.exit()
}) //Checks if the token is valid
```

## User Info
```js
const Client = require('./EthicalCord-V2'), 
  client = new Client() 
client.login('my super secret token') 

client.user('879785357800009788').then(res => console.log(res))
```

## Server Info
```js
const Client = require('./EthicalCord-V2'), 
  client = new Client() 
client.login('my super secret token') 

client.server('791749797509857290').then(res => console.log(res))
```

## Channel Info
```js
const Client = require('./EthicalCord-V2'), 
  client = new Client() 
client.login('my super secret token') 

client.channel('858356087894704178').then(res => console.log(res))
```


## Get Audit Logs
```js
const Client = require('./EthicalCord-V2'), 
  client = new Client() 
client.login('my super secret token')

client.logs('791749797509857290').then(res => console.log(res))
```

# API

## Class: `Client`

### <Client\>.login(token)
> Logs into a Discord account

- `<string> token` : The Discord account token to log into

### <Client\>.self()
> Gets information about the current account

Returns `<Promise (object)>`

### <Client\>.user(id)
> Gets information about the specified user

- `<string> id`: The user ID to get info about

Returns `<Promise (object)>`

### <Client\>.guild(id)
> Gets information about the specified guild

- `<string> id`: The guild ID to get info about

Returns `<Promise (object)>`

### <Client\>.guildChannels(id)
> Gets the channels of the specified guild

- `<string> id`: The guild ID to get the channels from

Returns `<Promise (array)>`

### <Client\>.channel(id)
> Gets information about the specified channel

- `<string> id`: The channel ID to get info about

Returns `<Promise> (object)`

### <Client\>.channelMessages(id)
> Gets the messages from the specified channel

- `<string> id`: The channel ID to get info about

Returns `<Promise> (object)`

### <Client\>.logs(id)
> Gets the Audit Logs from the specified guild
**Requires "SEE_AUDIT_LOGS" permission**

- `<string> id`: The guild ID to get the Audit Logs from

Returns `<Promise> (object)`

# Credits

Zumo#0662 - Main Developer
