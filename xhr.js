let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');


xhr.onload = function () {
    let datas= JSON.parse(xhr.responseText);
// 
    for (let data of datas){ 

     country =(data['name']); 

      console.log(country['common']);   
    
      console.log(data['region']);   


      console.log(data['subregion']);   

      console.log(data['population']); 
    }
};
xhr.send();
