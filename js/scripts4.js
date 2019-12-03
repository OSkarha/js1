(function(){ 

       'use strict';

       let num1, num2;

       do {
              num1 = +prompt ('enter first number, please');  
       } while (isNaN(num1))

       document.write(`<p>${num1}</p>`);

       do {
              num2 = +prompt ('enter second number, please');  
       } while (isNaN(num2))

       document.write(`<p>${num2}</p>`);

       document.write(`------------`);

       document.write(`<p>${num2+num1}</p>`);

       document.write('<p>' + (num2+num1) + '</p>');
})();