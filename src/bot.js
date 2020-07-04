var Discord = require("discord.js");
var auth = require('./auth.json');
var logger = require('./logger.js');
var execute = require('./execute_command.js');

var bot = new Discord.Client();

var bot_ready = function() {
  logger.info("Bot logged in as: " + bot.user.username);
}

bot.once('ready', bot_ready);
bot.on('message', execute);

bot.login(auth.token);