const Discord = require('discord.js');
const logger = require('winston');
const auth = require('./auth.json');
const config = require('./config.json');
const db = require('sqlite');
const commands = require('./cmd.js');

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
    logger.info('Bot has started, with ' + bot.users.length + ' users, in ' + bot.channels.length + ' channels of ' + bot.guilds.length + ' guilds.');
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  // const mods = ['307972360579842048', '307972393605791744', '307972240249716737']
  // const admins = ['307972393605791744', '307972240249716737']
  const mods = ['419991219230474253'];
  const admins = ['419991219230474253'];

  if (message.channel.type !== 'text') return; //don't answer to dms

  commands.execute(message, args, command);
});


bot.login(auth.token);