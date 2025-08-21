//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0l2M1ZzZzlnNHR0UkJmU0VwUm05c3Z5dE9aT05Eb1IvS0VpWUt1VWkzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielV4RFVmZnhGWFl6Q3JCcGhaNm9xWSthc3RKNXV6NFNBWEJBcXh3SVptOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0S1p5TDA2NVpUOWpPK1pjTVNqTXp1UTdHS2grVkhrM1FHalY1UGJBMDJvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTMlZzNnNna0pGYXVWckF0eE9VOEk5WndEZUxKZWx5Y2E4TnN1MkJqR3dVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVJTHVnbHpJeVdFdmZFeEpvWE9MY0p1aFAvdXdkajZZSUphOXREbjVTWGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpFWVRTM0ZqbEthNG90cUdTVGtPM2hUaWFKYS9mVXlFK1FzOEhLWFBCUTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEVVYlczZDFoU1JUSE9OUDBIelZaKzY5UlJjQnV1bFhIMGloWWN2WlgzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWhEL0RBNjlvVXhtaVlmS1AxSGNZK0lEakV4QTdNZktGaXdoN0x0SzlrYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpyZmRvWlNRWFpSRS8xd1E5ajZtSHV4Wm0wOWgyaVhLclRJc2FaR0oraVM1eHUxNUZvSTFjTHlnRzVXTG1iRGlld1BBekM0b09rU3RXZUh3TWdScEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQwLCJhZHZTZWNyZXRLZXkiOiJGLzgxdjZuZVBnNjZOOVNJaDM5TEVXeHk0cFo2Q2djWElOOXIxcEJCUlR3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc0MDcyODcxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkYwNjRDQ0RBRjdDRDg3NDdGMkI2OEZDNDdGNTZGQ0VGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU3NTUyMzV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InYtQWYwejdVU0ZtSXNuYUl3YjhDS1EiLCJwaG9uZUlkIjoiZGQxZjU1MjktOGU0OS00ZjkyLTliOGQtYzliZTY5MmVkYzJiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5nUFpLSTNTcUZBUklHYjNpK1NCUG1URDZ0WT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmlYdGo2a2VtVlV0cE5UeXR0eXJnaytFS0dFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTStMaHQ4RkVOemxtc1VHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoid0R6UXVYbktRU09BdjVQNFNzOEI4dnBvV0ErNVI2OW95bnpxNUNpM2lWMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUEx2cUZybjY0VzI1ZFNVUDJtaDVaOTZ1V0Q5aEZ4MmtvZDdFSmU1b3g5VWVoTkIzUEpCbG5rVUt4MVgwK1hDT0E1Rno2Z2hSUmNtekp6d1UzS1d2Q2c9PSIsImRldmljZVNpZ25hdHVyZSI6IkFjMEdnaGE5ZXR5ekp0dVpZWU1xSjFWN0EvMzUrUml0amk3Qnpad3Y1c1J4TEFNbTVITFFsYzBrZVkrbVNpcVEvNlNIRkNqL3lpQzd5TVVIeXVud0JRPT0ifSwibWUiOnsiaWQiOiI5NDc3NDA3Mjg3MTo2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTkyNjA4Mzc4ODMxMDQ0OjZAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc0MDcyODcxOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0E4MExsNXlrRWpnTCtUK0VyUEFmTDZhRmdQdVVldmFNcDg2dVFvdDRsZCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1NzU1MjMyLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU55KyJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
