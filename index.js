const Telegraf = require('telegraf')

const bot = new Telegraf('813393069:AAG6yyLYNCYRzaPm9N2rsx_nTlmpjZK9YKw')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
