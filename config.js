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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_00_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDk1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDk5LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgNDksXG4gICAgICAgIDI3LFxuICAgICAgICA4OSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzksXG4gICAgICAgIDQ1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjksXG4gICAgICAgIDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc2LFxuICAgICAgICA5MixcbiAgICAgICAgNjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NixcbiAgICAgICAgNTksXG4gICAgICAgIDExNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgsXG4gICAgICAgIDI1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMCxcbiAgICAgICAgNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzTVpOeWpqS1F5bEJxbFY5NllxTThUMHVIRTV4Z3R2dEN3dVgwTVBaejc4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc0NjQ5NjkwNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjM1QkQ4Qjg1OUVDM0NGRTFENzhGNTQzN0Q3RTAwQjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNjc4NDA1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdrWjZfdXNHU1NTcEZUNDR5QWtDMUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDkwZTg2ZmYtNTI2YS00NTViLWFjOGEtNzc4YTEzMTZkMzI3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg4LFxuICAgICAgNzIsXG4gICAgICA4OCxcbiAgICAgIDk4LFxuICAgICAgMTg0LFxuICAgICAgODIsXG4gICAgICAyMTIsXG4gICAgICAyMyxcbiAgICAgIDQ5LFxuICAgICAgMTYxLFxuICAgICAgMjQzLFxuICAgICAgMjQ1LFxuICAgICAgMTMsXG4gICAgICA3MixcbiAgICAgIDE1NyxcbiAgICAgIDYyLFxuICAgICAgMjUxLFxuICAgICAgMzcsXG4gICAgICA0LFxuICAgICAgMTUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgNDgsXG4gICAgICA2NSxcbiAgICAgIDEwMixcbiAgICAgIDE4OCxcbiAgICAgIDEzLFxuICAgICAgOTAsXG4gICAgICAyMSxcbiAgICAgIDM3LFxuICAgICAgMTI4LFxuICAgICAgMjU0LFxuICAgICAgMixcbiAgICAgIDIzOCxcbiAgICAgIDE4NyxcbiAgICAgIDE0MyxcbiAgICAgIDg2LFxuICAgICAgMjAwLFxuICAgICAgMTExLFxuICAgICAgNDcsXG4gICAgICA3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDQTVYWkE2OFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQ2NDk2OTA2OjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTMxOTQxMTQ3NTI2MjA6ODNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2aq/CdmrvwnZq78J2asPCdmrvwnZCU8J2Qg/CdmrUg8J2QivCdmrDwnZCL8J2Qi/CdmrXwnZqqXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTU9Seks0SEVMejArclFHR0IwZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2cGhDb0R2ZWx6YzhUby9MS0NiMEhKRW5tWTRqZm5YN1VVelIwOCtxeFRnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpUMDM5UkRPZHRvRjcrU0JaWkhRQXlCK1RJL0ZxY2pwOUdrRDJwTytFcWRzYVlXM0M2QWJveXF5QXQvaGZ1Q05QVEZMeGpPQnpHWXlNS3l2OHFTekNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBrVHBSZytwZkJHQ0pDSmNWTTVaSm5TWHhVdGYwOTVBZEZhakVhV0dNOEZkOFlCM2ZtbnJGUUZ1ZkIwTDQ0QXhobmo0SWh5ODhEZmhQRVRWZThnWGd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0NjQ5NjkwNjo4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjc4NDAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkVKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGRUouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5LzV3eUVvMkRyd0FOTndDR3E1R2J3SmQyL0hPZ0RYVG43WXpxRGMvNDkwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NzY3NjQ2MTEsXCJjdXJyZW50SW5kZXhcIjoxMSxcImRldmljZUluZGV4ZXNcIjpbMCw2LDEwLDExXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
