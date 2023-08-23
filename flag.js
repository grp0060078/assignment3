
let XMLHttpRequest = require('xhr2');


let xhr = new XMLHttpRequest();


xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let names = JSON.parse(xhr.responseText);
    
    for(let name of names) {

        console.log(name['flags']);
    }
};

xhr.send();