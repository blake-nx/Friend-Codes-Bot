const getMentionFriendCode = async (args, msg) => {
  if (args[0]) {
    const user = getUserFromMention(args[0]);
    // Find user in db
    const friendcode = await db.findOne({
      where: { username: `${user.username}` },
    });

    if (!user) {
      return msg.reply(
        "Please use a proper mention if you want to see someone else's friend code."
      );
    }
    // If user exists send their friend code
    if (friendcode) {
      let pogocode = friendcode.get("pogocode").split(" ").join("");
      msg.channel.send(`${user.username}'s friend code:`);
      return msg.channel.send(`${pogocode}`);
    } else {
      return msg.channel.send(
        `Could not find a friend code for ${user.username}`
      );
    }
  }
};

module.exports = getMentionFriendCode;
