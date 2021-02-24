const Discord = require("discord.js");
const client = new Discord.Client();
const dotenv = require("dotenv").config();
const CLIENT_ID = process.env.CLIENT_ID;
const BOT_TOKEN = process.env.BOT_TOKEN;
const db = require("./db.js");

// Commands
const addFriendCode = require("./commands/addFriendCode.js");
const getAuthorFriendCode = require("./commands/getAuthorFriendCode.js");
const updateFriendCode = require("./commands/updateFriendCode.js");
const deleteFriendCode = require("./commands/deleteFriendCode.js");
const getMentionFriendCode = require("./commands/getMentionFriendCode.js");

// Get user from Discord mention
const getUserFromMention = (mention) => {
  if (!mention) return;
  if (mention.startsWith("<@") && mention.endsWith(">")) {
    mention = mention.slice(2, -1);
    if (mention.startsWith("!")) {
      mention = mention.slice(1);
    }
    return client.users.cache.get(mention);
  }
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.generateInvite(["ADMINISTRATOR"]).then((link) => {
    console.log(link);
  });
  db.sync();
});

client.on("message", async (msg) => {
  const args = msg.content.slice(0).trim().split(/ +/g);
  const command = args.shift();

  // Add friend code
  if (command.toLowerCase() === "addcode") {
    addFriendCode(args.join(""), msg, db);
  }
  // Get friend code
  if (command.toLowerCase() === "mycode") {
    getAuthorFriendCode(msg, db);
  }
  // Update friend code
  if (command.toLowerCase() === "newcode") {
    updateFriendCode(args.join(""), msg, db);
  }
  // Delete friend code
  if (command.toLowerCase() === "delcode") {
    deleteFriendCode(msg, db);
  }
  // Get mentioned user's friend code
  if (command.toLowerCase() === "fc") {
    const user = getUserFromMention(args[0]);
    getMentionFriendCode(user, msg, db);
  }
  // Send bot invite link
  if (command.toLowerCase() === "linkme") {
    msg.channel.send(
      `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&permissions=8&scope=bot`
    );
  }
});
client.login(BOT_TOKEN);
