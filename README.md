# discord-new
A new Javascript wrapper for the Discord API

## Installing
> npm i discord.new

```JS
const Discord = require('discord.new');
const client =  new Discord.Client();

client.login('your bot token');

client.on('ready', (readyMsg) => {
    console.log(readyMsg);
});

client.on('message', message => {
    console.log(message);
})```
