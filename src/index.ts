const { Telegraf } = require("telegraf");
import { message } from "telegraf/filters";
import config from "config";
import consola from "consola";

const token = config.get("BOT_TOKEN");
const bot = new Telegraf(token);
consola.info("BOT_TOKEN: ", token);

bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on(message("text"), (ctx) => ctx.reply("👍"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
