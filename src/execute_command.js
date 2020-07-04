var trivial = require("./trivial_commands.js");
var logger = require('./logger.js');

var pass_bot_message_filter = function(message) {
  var startsWithPrefix = message.content.substring(0, 3) == "oo ";
  var notBot = !message.author.bot;

  return startsWithPrefix && notBot
}

function execute_command(message) {
  if (!pass_bot_message_filter(message)) return;

  let content = message.content;

  logger.info("Command received: " + content);

  var args = content.substring(3).split(" ");
  var cmd = args[0];

  args = args.splice(1);

  switch (cmd) {
    case 'intro':
      return trivial.intro(message);
    case 'ping':
      return trivial.ping(message);
    default:
      return trivial.default(message, cmd);
  }
}

module.exports = execute_command;