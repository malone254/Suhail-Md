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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_53_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc4LFxuICAgICAgICA5NyxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NixcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgwLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjYsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0OCxcbiAgICAgICAgMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMixcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA2LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxODEsXG4gICAgICAgIDU4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMixcbiAgICAgICAgNjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDY3LFxuICAgICAgICA4NixcbiAgICAgICAgOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMzYsXG4gICAgICAgIDYzLFxuICAgICAgICA5NyxcbiAgICAgICAgOSxcbiAgICAgICAgOTksXG4gICAgICAgIDU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi8rbDlsU2owYXhWZksyYUJsVDVZSHJqSzNlTjNSMG9rVnowb1ZvczIxeFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzQ2NDk2OTA2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGODg2Njk4QjA5MEEyNkNGNTVFQTZEQTk5QUVEQTQ3NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2MDUyMTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibUhqdzByRlNSZU9tUF9IRTdxd0hyQVwiLFxuICBcInBob25lSWRcIjogXCI2NTNmZjAxYy0xYjIxLTRhMjgtYTU0ZC0wNjRhMzIyZDE1ZmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIyLFxuICAgICAgMjUxLFxuICAgICAgMTExLFxuICAgICAgODAsXG4gICAgICAyMDEsXG4gICAgICAxNzMsXG4gICAgICAyMDYsXG4gICAgICAzLFxuICAgICAgMTMxLFxuICAgICAgMTAsXG4gICAgICAxMzEsXG4gICAgICAxNjgsXG4gICAgICAyMjYsXG4gICAgICAyMTIsXG4gICAgICA3MyxcbiAgICAgIDE5OCxcbiAgICAgIDgzLFxuICAgICAgMjAyLFxuICAgICAgMTA1LFxuICAgICAgM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjQsXG4gICAgICAyMDgsXG4gICAgICAxOTMsXG4gICAgICA3NSxcbiAgICAgIDEyMCxcbiAgICAgIDIwNixcbiAgICAgIDE5MixcbiAgICAgIDEwNyxcbiAgICAgIDkwLFxuICAgICAgNDQsXG4gICAgICAxMDksXG4gICAgICAyMTQsXG4gICAgICAxOSxcbiAgICAgIDI0OSxcbiAgICAgIDc1LFxuICAgICAgMTY3LFxuICAgICAgOTcsXG4gICAgICAxNyxcbiAgICAgIDE2MyxcbiAgICAgIDY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkQyRDNFNDY5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDY0OTY5MDY6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExMzE5NDExNDc1MjYyMDo3MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZO+8J2Tt/Cdk7TwnZO38J2TuPCdlIDwnZO3X/CdlILwnZOu8J2TvV/wnZOv8J2TqvCdk7bwnZOy8J2TtfCdk7LwnZOq8J2Tu1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01PUnpLNEhFSmkwdWJRR0dBOGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNnBoQ29EdmVsemM4VG8vTEtDYjBISkVubVk0amZuWDdVVXpSMDgrcXhUZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDeGJSSjBJQWJyNEorejg5YWtaSWNDU3NXLytGK21xbU90TFlzNzZ2Q1hGcE41RGVWc3lFTmljY003VlZONFk1ZmlmVk5XbFZuSTQ5WHNLMStVbEREUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTNWNwVFRaZ2ZpK1hvRFRSd3VNaVFaRFBkd3RlNjFLTVZGTnl1b1hjbnpxNEFRUjRHbkw0VW5yeGI3ZmNZOWhvb2F0Z1drTW1ha1NLYzNYTDVmSE9odz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDY0OTY5MDY6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDYwNTIxMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZFSlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkVKLmpzb24iOiAie1wia2V5RGF0YVwiOlwieS81d3lFbzJEcndBTk53Q0dxNUdid0pkMi9IT2dEWFRuN1l6cURjLzQ5MD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTc2NzY0NjExLFwiY3VycmVudEluZGV4XCI6MTEsXCJkZXZpY2VJbmRleGVzXCI6WzAsNiwxMCwxMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
