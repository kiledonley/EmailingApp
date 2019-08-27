const fetch = require('node-fetch');

function getXR(from, to){
    fetch('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=$(from)&to_currency=$(to)&apikey=YJEI5AUU78YSL7LP')
    .then(res=> res.json())
    .then(json=> console.log(json))

}