import config from "config";
import consola from "consola";
import { Buffer } from "node:buffer";
import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import { txt2img } from "./api";

const token = config.get("BOT_TOKEN");
const bot = new Telegraf(token);
consola.info("BOT_TOKEN: ", token);

bot.start((ctx) => ctx.reply("欢迎使用小鲨鱼"));
bot.help((ctx) => ctx.reply("Send me a prompt."));
bot.command("sdimg", async (ctx) => {
  const text = ctx.message.text;
  consola.info("text: ", text);
  if (!text || !text.trim() || text.trim() === "/sdimg") {
    ctx.reply("Please send a prompt.");
    return;
  }
  const res = await txt2img({ prompt: text });
  consola.info("res: ", res);
  const image = res?.images?.[0];
  ctx.replyWithPhoto({ source: Buffer.from(image, "base64") });
});
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
