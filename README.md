# FriendCodes Bot

FriendCodes Bot stores your Pokemon Go friend code for easy sharing across Discord.

![2021-02-23_18h45_06](https://user-images.githubusercontent.com/13428576/108928776-5dc5eb80-7608-11eb-968b-77caf8a4a422.png)

## Features
* Add your friend code to the bot once and retrieve it on-demand. Never have to copy/paste it from the Pokemon Go app again!
* Get other player's friend codes by mentioning them!
* The bot strips the spaces from the code so your friends can easily copy/paste it into their app.




### Installation:

1.  [Follow the guide here for creating your bot](https://anidiots.guide/getting-started/getting-started-long-version)
2.  Clone this repository locally
3.  Navigate to the bot directory and run `npm install`
4.  Rename `.env.example` to `.env` and add your own tokens and database credentials.
5.  run `node app.js`

### Commands (visual reference below):
- `addcode [YOUR_CODE_HERE]` adds your friend code to the bot.
- `mycode` to retrieve your friend code.
- `delcode` to delete your friend code from the bot.
- `newcode [NEW_CODE_HERE]` to update your friend code.
- `fc @mention` to retrieve the mentioned user's friend code.

![2021-02-23_19h16_23](https://user-images.githubusercontent.com/13428576/108930505-aaf78c80-760b-11eb-8162-9c3e0c0b303e.png)

