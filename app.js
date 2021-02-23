const Discord = require("discord.js");
const client = new Discord.Client();
const dotenv = require("dotenv").config();
const CLIENT_ID = process.env.CLIENT_ID;
const BOT_TOKEN = process.env.BOT_TOKEN;
const db = require("./db.js");
const helpers = require("./helpers.js");
const addFriendCode = require("./commands/addFriendCode.js");
const getAuthorFriendCode = require("./commands/getAuthorFriendCode.js");
const updateFriendCode = require("./commands/updateFriendCode.js");
const deleteFriendCode = require("./commands/deleteFriendCode.js");
const getMentionFriendCode = require("./commands/getMentionFriendCode.js");

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
    addFriendCode(args.join(""), msg);
  }
  // Get friend code
  if (command.toLowerCase() === "mycode") {
    getAuthorFriendCode(msg);
  }
  // Update friend code
  if (command.toLowerCase() === "newcode") {
    updateFriendCode(args.join(""), msg);
  }
  // Delete friend code
  if (command.toLowerCase() === "delcode") {
    deleteFriendCode(msg);
  }
  // Get other user's friend code from mention
  if (command.toLowerCase() === "fc") {
    getMentionFriendCode(args, msg);
  }
});
client.login(BOT_TOKEN);
