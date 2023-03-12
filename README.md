# SD-Telegram-Bot

生成 Stable Diffusion 图片的小鲨鱼 Telegram bot

# Usage

Telegram token
To use the Telegram Bot API, you first have to get a bot account by chatting with BotFather.

BotFather will give you a token, something like 123456789:AbCdefGhIJKlmNoPQRsTUVwxyZ.

在 `config/local.json` 中添加 Telegram token

```json
{
  "BOT_TOKEN": "123456789:AbCdefGhIJKlmNoPQRsTUVwxyZ"
}
```

SD webui `webui-user.bat` 中需要添加参数

```bash
set COMMANDLINE_ARGS=--api
```
