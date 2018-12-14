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
client.login('NTIzMTU1MjYzMjMwOTY3ODI1.DvVaZg.pEQOur0KnNeZw1glFO6LW7y03SM');
client.login('NTIzMTU2NjYwMTM1Mzk1MzU4.DvVbqw.pkMvN3zWf7SIAXx_kL7gO548cj0');
client.login('NTIzMTY5ODE3MzYwODU5MTY2.DvVpsg.hvY8vkzq11_4Q0mv5324alg3oLc');
