# 🖤️ WhatsApp Botto: VOID 🖤️
## 🤖️ Heroku Deployment Guide 🤖️

### Pre-requisite
 - 🌐️ Internet 🌐️️
- 🧠️ Brain 🧠️
- 🎵️ Music 🎵️

### Notice!
- I'd recommend using 🦊️ the Firefox browser
- I'd recommend disabling extreme ad-blocking extension or settings as it may cause some sites to break

## 💚️ Let's set up Mongo Atlas first 💚️ 
1. Go to [MongoDB cloud atlas](https://www.mongodb.com/cloud/atlas)

2. Sign up if you don't have an account already or log in if you have one already.
PS: If you don't want to use your email, go to https://temp-mail.org/en/ and generate a temporary disposable email address uwu)/
3. Create a new cluster on Mongo Atlas. [It takes time, so don't worry]
4. After creating a cluster, click on the 'CONNECT' button on the cluster which you've created.
5. On Setup connection security, I'd recommend you to add 'Your Current IP Address' for security concerns but if you are not willing to go through a little bit of pain, then simply add 'Access from anywhere. Also, you can change this anytime by opening your "IP Access list tab".
6. Then, create a database user, fill up the name and password and MAKE SURE TO REMEMBER THEM.
7. Click on the "Choose a connection method" and then click on the "Connect Your Application" option.
8. Finally, on the "Connect" tab select "Nodejs" as _DRIVER_ with "3.6 or later" in _VERSION_.
9. Copy the connection string that is provided below and paste it somewhere and replace <password> with 'the password you added while creating database user', also make sure to remove '< >' these from <yourPassword>. This will be your _MONGO CLUSTER URI_.
#### Example [Mongo Atlas Cluster URI]
```mongodb+srv://NekoDaKamiSama:kamisamaofdaculture@cluster0.v93qb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority```

10. That's it for this section, please proceed down below.


## 💗️ Steps to deploy your own Botto-VOID on Heroku cloud
1. [Whatsapp-Botto-Xre](https://github.com/Synthesized-Infinity/Whatsapp-Botto-Xre) - Go there
2. Scroll down a bit and you will see the "Deploy To Heroku" button in purple color (sorry if you are color blind)
3. Click on it and login or sign up for Heroku
4. Enter the following fields
    | KEY | VALUE |
    | --- | ----------- |
    | BOTNAME | VOID |
    | MODS |  |
    | PREFIX | ! |
    | SESSION_ID | Any text you want but make sure to remember and don't share it.
    | MONGO_URI | YOUR CLUSTER URI |
 
`BOT_NAME` The name of the Bot <br>
`PREFIX` The Prefix of the Bot <br>
`MODS` The phone numbers of users who you want to be the bot's Admins separated by a comma and must the numbers must be in the following format: `[cc][number]`. eg: `919744******`<br>
`SESSION_ID` A string to keep track of your session.
`MONGO_URI` is the Connection URL to your DB
5. Wait for the building to finish, you should always keep an eye on log messages, you can find log messages in the Dashboard -> More -> View logs
6. After it builds, click on the "View" or "Open App"
7. Authenticate By Providing Your SESSION_ID and a QR Code Will Show Up
8. Open WhatsApp on your phone -> Click on the 3 Dots on the top Right -> Click on WhatsApp Web -> Click on "Link a Device" and scan the QR from the previous step
9. Your heroku app can fall asleep so for keeping it awaken add your app to "https://kaffeine.herokuapp.com/". It pings your Heroku app every 30 minutes so it will never go to sleep.
10. Profit!

### 😼️ Enjoy and make sure to study!
### 🐼 Don't forget to Star the repo!