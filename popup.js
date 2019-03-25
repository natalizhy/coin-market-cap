//X-CMC_PRO_API_KEY
// 610dea86-f2d2-48fd-808b-005804b008aa
// fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?X_CMC_PRO_API_KEY=610dea86-f2d2-48fd-808b-005804b008aa&limit=10',{

fetch('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=6dc1f3d9-8222-451a-91c7-f8bf6efa78c4&limit=10',{
    method: 'Get',
    // mode: 'no-cors',
    headers: {
    "Accept": "application/json",
    "Cross-Origin":"*",
    },
}).then((response) => response.json()).then(natasha => {
    document.getElementById('preload').style.display = 'none'
    // append(data);
    console.log(natasha, "data");
    // var json2html = require('node-json2html');
    

    var transform = { 
        tag: 'tr',
        children: [{
            "<>": "td",
                "html": "${cmc_rank}"
        }, {
            "<>": "td",
                "html": "${name}"
        }, {
            "<>": "td",
                "html": "$${quote.USD.market_cap}"
        }, {
            "<>": "td",
                "html": "$${quote.USD.price}"
        }, {
            "<>": "td",
                "html": "$${quote.USD.volume_24h}",
        },{
            "<>": "td",
                "html": "${circulating_supply} ${symbol}"
        },{
            "<>": "td",
                "html": "${quote.USD.percent_change_1h}"
        }]
    };
         
    // function handler() {
    //     window.location.reload();
    // }
    const button = document.getElementById('button');
    button && button.addEventListener("click", () => window.location.reload());
    // document.getElementById('button').addEventListener("click", handler);
    // var img = document.createElement("IMG");
    // img.src = "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png";
    // document.getElementById('root').innerHTML="<img src='https://s2.coinmarketcap.com/static/img/coins/32x32/1.png' width='16' height='16'>";
    // var name = "<img src='https://s2.coinmarketcap.com/static/img/coins/32x32/1.png' onerror='alert(1)'>";
    // document.getElementById('placar').onclick = () => window.location.reload(true);
    var html = json2html.transform(JSON.stringify(natasha.data),transform);
    document.getElementById('placar').innerHTML = html;
    console.log(html);
    

    // document.write( json2html.transform({},transform) );
}).catch(err => console.log(err));

// jQuery(document).ready(function ($) {
//     $(window).load(function () {
//         setTimeout(function(){
//             $('#preload').fadeOut('slow', function () {
//             });
//         },2000);

//     });  
// });

// window.addEventListener("load", () => {
//     document.getElementById('off')
//     console.log(document.getElementById('off'))
// });

// window.onload = function() {
//     document.getElementById('off')
// };
// console.log(document.getElementById('off'))
    // document.getElementById('preload').style.position = 'none'
    // document.getElementById('off').style.display = 'none'

    // console.log("document.onload", e, Date.now() ,window.tdiff,  
    // (window.tdiff[0] = Date.now()) && window.tdiff.reduce(fred) ); 

// window.onload = function(e){ 
//     console.log("window.onload", e, Date.now() ,window.tdiff, 
//     (window.tdiff[1] = Date.now()) && window.tdiff.reduce(fred) ); 
// }
    // = console.log(); => document.getElementById('preload').style.position = 'none'
