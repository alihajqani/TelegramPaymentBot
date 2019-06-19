const request = require('request');
const Telegraf = require('telegraf')
const ZarinpalCheckout = require('zarinpal-checkout');

const bot = new Telegraf('813393069:AAG6yyLYNCYRzaPm9N2rsx_nTlmpjZK9YKw')
const zarinpal = ZarinpalCheckout.create('1b39ad08-90c5-11e9-b0a8-000c29344814', false);

var options = {
    method: 'POST',
    url: 'https://api.idpay.ir/v1.1/payment',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': ' 86bde924-244c-4abc-8ddc-4a0647fda45b',
        'X-SANDBOX': 1,
    },
    body: {
        'order_id': '101',
        'amount': 10000,
        'name': 'وحید وکیلی',
        'phone': '09039491657',
        'mail': 'v.vakili73@gmail.com',
        'desc': 'for test',
        'callback': 'https://t.me/ABCTestPaymentBot',
    },
    json: true,
};

bot.start(function (ctx) {
    ctx.reply('Welcome')
    // console.log(ctx)

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });
})

bot.hears('zarinpal', function (ctx) {
    zarinpal.PaymentRequest({
        Amount: '1000',
        CallbackURL: 'https://t.me/ABCTestPaymentBot',
        Description: 'A Payment from Node.JS',
        Email: 'v.vakili73@gmail.com',
        Mobile: '09039491657'
    }).then(response => {
        if (response.status === 100) {
            console.log(response.url);
            ctx.replyWithMarkdown('[ZarinPal Gate - Open](' + response.url + ')')
        }
    }).catch(err => {
        console.error(err);
    });
})

bot.launch()



