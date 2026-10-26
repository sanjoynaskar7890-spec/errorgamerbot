const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();
app.get('/', (req,res)=> res.send('ErrorGamer 24/7 Live on Koyeb!'));
app.listen(process.env.PORT || 8000, () => console.log('Web server live'));

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag} - KOYEB 24/7 LIVE`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  const text = message.content.toLowerCase();

  // Tag korle ba gop gop bolle reply
  if (message.mentions.has(client.user) || text.includes('gop gop') || text.includes('errorgamer') || text.includes('tera gop')) {
    const replies = [
      `Arey <@${message.author.id}> tera GopGop main kar dunga, samjha? 😂🔥`,
      `Oye <@${message.author.id}> zyada GopGop mat kar, warna ErrorGamer aa jayega! 😎`,
      `Abe <@${message.author.id}> tera gameplay dekh ke mera bot bhi has raha hai! 🤣`,
      `Chill <@${message.author.id}> , ErrorGamer yaha hai, tension not! 🎮`
    ];
    const random = replies[Math.floor(Math.random() * replies.length)];
    return message.reply(random);
  }

  if (text === 'hi' || text === 'hello' || text === 'hii') {
    return message.reply(`Hi <@${message.author.id}> ! Kya haal hai? 😎`);
  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'help') {
    await interaction.reply('**🤖 ErrorGamerBot Help**\n🔥 `/roast` - Roast\n🎮 `/gamer` - Tips\n💬 Mujhe tag karke normal baat bhi kar sakte ho!');
  }
  if (interaction.commandName === 'roast') {
    const user = interaction.options.getUser('user');
    await interaction.reply(`🔥 ${user ? `<@${user.id}>` : "Tu"} Tera gameplay dekh ke mera Koyeb server bhi crash ho gaya! 😂`);
  }
  if (interaction.commandName === 'gamer') {
    await interaction.reply('🎮 **GYAN:** Roz 15 min Aim Lab kar, tu bhi pro ban jayega! 🎯');
  }
  if (interaction.commandName === 'meme') {
    await interaction.reply('😂 https://i.imgflip.com/65efzo.jpg');
  }
});

client.login(process.env.BOT_TOKEN);
