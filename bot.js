const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('======================================')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=======================================')
});

client.login('NTIzMTUyMjE3NTQxMTgxNDQw.DvVXeQ.qgULeGA2gpvL45TaC0d7oQJRHWQ');
client.login('NTIzMTQ4OTQ1MjQ1OTk1MDM4.DvVWEA.MfqK0Ya9iI26__toXurTqYzEpUE');
