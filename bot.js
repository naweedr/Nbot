const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'online') {
    	message.reply('online :)');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NjcxMDUzMDEwNTE2MDQ5OTQx.Xi3VGA.Eddsq-NwSuHjHp8A7gyjb1iQKLo);
