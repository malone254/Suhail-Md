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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_38_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyOSxcbiAgICAgICAgODksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTksXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMixcbiAgICAgICAgMTYyLFxuICAgICAgICA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzksXG4gICAgICAgIDY3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyLFxuICAgICAgICA2MyxcbiAgICAgICAgNTksXG4gICAgICAgIDUzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzgsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDM5LFxuICAgICAgICAxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTksXG4gICAgICAgIDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTksXG4gICAgICAgIDY2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjExLFxuICAgICAgICA0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDQwLFxuICAgICAgICAxNixcbiAgICAgICAgMTAyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDc2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFVTjl3Ny9iTVd2djFLMFNwUzJ6UUMvU2RkcWIrcElKdGgxNUQwZ25GeEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzQ2NDk2OTA2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzMzI1OTMxQUI2OUE4QjRGMjhGRDEzMzRCODE0QTk1QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA5ODIzMTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN0NJSWxQX2tSaENEWnVIQUtRSzc3d1wiLFxuICBcInBob25lSWRcIjogXCJjMmJmZThkNy00ZjczLTQ0ZDQtYjhlYy0yOTkwOTUyMTBkMzlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODgsXG4gICAgICAxNjgsXG4gICAgICAxMjIsXG4gICAgICAxNDEsXG4gICAgICAxNjcsXG4gICAgICAxNzgsXG4gICAgICAyLFxuICAgICAgMTQ4LFxuICAgICAgMjEzLFxuICAgICAgNDUsXG4gICAgICAxMDYsXG4gICAgICA0OCxcbiAgICAgIDIyMyxcbiAgICAgIDE2MyxcbiAgICAgIDExNyxcbiAgICAgIDEwNSxcbiAgICAgIDIyMSxcbiAgICAgIDg5LFxuICAgICAgMjAxLFxuICAgICAgNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDIsXG4gICAgICA3NSxcbiAgICAgIDEyMyxcbiAgICAgIDc3LFxuICAgICAgOTQsXG4gICAgICAxMTMsXG4gICAgICA1NSxcbiAgICAgIDQ3LFxuICAgICAgMTI4LFxuICAgICAgMjI2LFxuICAgICAgMTAzLFxuICAgICAgMTgyLFxuICAgICAgMjA5LFxuICAgICAgMTk2LFxuICAgICAgMzUsXG4gICAgICA1NyxcbiAgICAgIDc2LFxuICAgICAgMjA3LFxuICAgICAgNDUsXG4gICAgICAzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUU0ZTMTQ2SFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQ2NDk2OTA2Ojc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTMxOTQxMTQ3NTI2MjA6NzdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTU9Seks0SEVLaTIwTFFHR0JjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2cGhDb0R2ZWx6YzhUby9MS0NiMEhKRW5tWTRqZm5YN1VVelIwOCtxeFRnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRydDdYMndaRHNFVit6MklwcncwNm56YjBUTjRtRVlpREw5WXEyakRLVlg2VDczSWY0TmRvNGtxUEVqZ3g0ZFR2K1E5WEtpd3k0NDRIV3RuUzhMa0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBVdWc5ZEh6YWo3WDRoUTNoUHVnb2duRjQvRzZLcUdVL1hLdWFuUEdmWFZKQVMvc3k3ZHhDVmgwL1FhV2EyR0RoSEhsN1Q2MTBBT2JUWkdHcnVjaWlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0NjQ5NjkwNjo3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTgyMzE1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkVKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGRUouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5LzV3eUVvMkRyd0FOTndDR3E1R2J3SmQyL0hPZ0RYVG43WXpxRGMvNDkwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NzY3NjQ2MTEsXCJjdXJyZW50SW5kZXhcIjoxMSxcImRldmljZUluZGV4ZXNcIjpbMCw2LDEwLDExXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
