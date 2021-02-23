const updateFriendCode = async (friendcode, msg) => {
  const affectedRows = await db.update(
    { pogocode: `${friendcode}` },
    { where: { username: `${msg.author.username}` } }
  );
  if (
    friendcode.length > 15 ||
    regex.exec(friendcode) === null ||
    friendcode.length < 12
  ) {
    return msg.reply(`Invalid friend code ${friendcode}`);
  }
  if (affectedRows > 0) {
    return msg.reply(
      `Your friend code was updated to ${friendcode.split(" ").join("")}.`
    );
  }
  return msg.reply(
    `Could not find a friend code for username ${msg.author.username}.`
  );
};

module.exports = updateFriendCode;
