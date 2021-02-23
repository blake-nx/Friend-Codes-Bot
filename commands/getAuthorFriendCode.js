const getAuthorFriendCode = async (msg) => {
  // Find user in db
  const friendcode = await db.findOne({
    where: { username: `${msg.author.username}` },
  });
  // If user exists send their friend code
  if (friendcode) {
    msg.channel.send(`${msg.author.username}'s friend code is:`);
    return msg.channel.send(
      `${friendcode.get("pogocode").split(" ").join("")}`
    );
  } else {
    return msg.reply(`Could not find friend code for ${msg.author.username}`);
  }
};

module.exports = getAuthorFriendCode;
