const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_55_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDEsXG4gICAgICAgIDU4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MixcbiAgICAgICAgNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDQyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5MSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDU5LFxuICAgICAgICA5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDM1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDU2LFxuICAgICAgICA4MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk3LFxuICAgICAgICAzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDY5LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDU2LFxuICAgICAgICA5NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc5LFxuICAgICAgICA2MixcbiAgICAgICAgMTMxLFxuICAgICAgICA5LFxuICAgICAgICA5MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDkzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMixcbiAgICAgICAgNTUsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI2LFxuICAgICAgICAyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzksXG4gICAgICAgIDQwLFxuICAgICAgICA4MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIitqTFlmeGIrRlBOeThWVDk1cXQ0VklWd2lUcHJVOFNjdWxsMWhqV3VQSDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlNNGJqS3ZmU3dLZnRKbksyc1lSUkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDA2ZDg5NjYtNzcxMi00ZWVjLWFhYzctOTllZGVjYTVmNmRkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkxLFxuICAgICAgODIsXG4gICAgICAxMjIsXG4gICAgICAxNSxcbiAgICAgIDUxLFxuICAgICAgNzQsXG4gICAgICA4OCxcbiAgICAgIDgsXG4gICAgICAyNDEsXG4gICAgICA0MCxcbiAgICAgIDE5MyxcbiAgICAgIDUyLFxuICAgICAgMTIwLFxuICAgICAgMzEsXG4gICAgICAxMTYsXG4gICAgICAxOTgsXG4gICAgICAxMzIsXG4gICAgICAxOTQsXG4gICAgICAxNzEsXG4gICAgICAxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgODgsXG4gICAgICAxNTcsXG4gICAgICAxMTMsXG4gICAgICAxNjIsXG4gICAgICAxMzMsXG4gICAgICAxMDcsXG4gICAgICAxNDgsXG4gICAgICAxNjQsXG4gICAgICAxMjUsXG4gICAgICAyMzAsXG4gICAgICA3OCxcbiAgICAgIDEyNCxcbiAgICAgIDI3LFxuICAgICAgOTgsXG4gICAgICAyMzAsXG4gICAgICA2NCxcbiAgICAgIDE4LFxuICAgICAgNCxcbiAgICAgIDEwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01IQTFKd0pFSW0rbjdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSEhzM2JCZkxReTFBNDdSOXZpTXNnOFMwK2E5ckhQM1JBUkxtSHdxTVBTYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnTGI3cEhRamdzV2MyRkpqOFBzdGxVVHljTm9ZK1N6RVVhSzRERDRveGRUWnZscjc0QjdpTXZ5ZlA1WTFUcGJHV3FzQUtFdHEyVWNiZllEMUJHWXlDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmeXZDZmkrNjJkY2sxeXVIdEpLYXZQbHY4d0ppWGZWMzVnRWRMMTI2YmxTSlNsd0srL3Q0QjBYK295STZJMVVsNUZ4a3RRbEJKVU5YemtoZWxqdjFnQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMTY1ODIzMzE6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM3ODM4MTQyNTg3MTIzOjlAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDE2NTgyMzMxOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTgwNDkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQzY5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDNjkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUa282eFg1STJjVUFKd2NybmJYS2FURWJ2akJpZFZuU1JobGlQdEtidkN3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI0NzYwMjM4NzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDE4MDQ5NjYyOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
