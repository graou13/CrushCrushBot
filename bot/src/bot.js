const Discord = require('discord.js');
const logger = require('winston');
const auth = require('./auth.json');
const config = require('./config.json');
const db = require('sqlite');
const commands = require('./cmd.js');
const treatment = require('./treat.js');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
db.open("./src/db.sqlite");
const bot = new Discord.Client();

bot.on('ready', () => {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.user.username + ' - (' + bot.user.id + ')');
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  // mods and admins list transfered to config file, last elem of list = test role for my test server

  if (message.channel.type !== 'text') return; //don't answer to dms

  commands.execute(message, args, command, db);
  treatment.treat(message, db);
});


bot.login(auth.token);