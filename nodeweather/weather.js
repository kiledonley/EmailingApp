const fetch = require('node-fetch')
if (process.argv[2] == "Temp"){
    city =  process.argv[3];
    country =  process.argv[4];
fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=6f74a1e5b3dfcfba53be771b9a600c8c`)
.then(res => res.json())
.then(json => console.log(json));

}

if (process.argv[2] == "Forecast"){
    city =  process.argv[3];
    country =  process.argv[4];
fetch (`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=6f74a1e5b3dfcfba53be771b9a600c8c`)
.then(res => res.json())
.then(json => console.log(json));

}