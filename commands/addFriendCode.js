const db = require("../db.js");

const addFriendCode = async (friendcode, msg) => {
  const regex = /[0-9\s]/m;

  // Validate friend code
  if (
    friendcode.length > 15 ||
    regex.exec(friendcode) === null ||
    friendcode.length < 12
  ) {
    return msg.reply(`Invalid friend code ${friendcode}`);
  }

  // Try inserting username/friendcode into db
  try {
    const insertFriendCode = await db.create({
      username: `${msg.author.username}`,
      pogocode: friendcode,
    });
    return msg.reply(
      `Friend code ${insertFriendCode.pogocode} added for ${insertFriendCode.username}`
    );
  } catch (e) {
    // Return error if friendcode already exists
    if (e.name === "SequelizeUniqueConstraintError") {
      return msg.reply("That friendcode already exists.");
    }
    console.log("error adding friend code:", e);
    return msg.reply("Something went wrong with adding a friend code.");
  }
};

module.exports = addFriendCode;
