const deleteFriendCode = async (msg, db) => {
  const rowCount = await db.destroy({
    where: { username: `${msg.author.username}` },
  });

  if (!rowCount) return msg.reply("That friend code does not exist.");

  return msg.reply("Friend code deleted.");
};
module.exports = deleteFriendCode;
