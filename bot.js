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

client.login('NTIzMTU2NjYwMTM1Mzk1MzU4.DvVbqw.pkMvN3zWf7SIAXx_kL7gO548cj0');
client.login('NTE2OTExNjY2NjQ3MDA3MjMy.DvVeQQ.PO76iv_r59fUg6Q6EfEBaZmAbZY');
client.login('NTE2NzUyNDQxOTQ2MTQ0Nzg0.DvVZrw.BQ2942-e8U0BMPqwXPBR0Y5GNqw');

