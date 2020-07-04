var bot_intro_action = function(message) {
  message.channel.send("Greetings! Welcome to the server!");
}
  
var bot_ping_action = function(message) {
  message.channel.send("pong");
}
  
var bot_default_action = function(message, cmd) {
  message.channel.send("I don't know how to \"" + cmd + "\" yet, don't tease me!");
}

module.exports = {
    intro: bot_intro_action,
    ping: bot_ping_action,
    default: bot_default_action
};