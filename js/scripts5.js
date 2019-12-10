(function(){ 
       'use strict';

       // let num1 = genRand(),
       //     num2 = genRand();

       document.write(`${genRand(1, 6)} : ${genRand(1, 6)}`);
       document.write(`<br>`);
          
       document.write(`${genRand(1, 0)}`);
       document.write(`<br>`);


       // let userNum = null;

       // do {
       //        userNum = prompt('Enter number:');
       // } while (isNaN(userNum));
       
       // document.write(`${genRand(1, userNum)}`);
       // document.write(`<br>`);


       if (false) {
              let userNum1 = null;
              let userNum2 = null;

              do {
                     userNum1 = +prompt('Enter number1:');
                     
              } while (isNaN(userNum1));
              
              do {
                     userNum2 = +prompt('Enter number2:');
              } while (isNaN(userNum2));
              
              document.write(`${genRand(userNum1, userNum2)}`);
              document.write(`<br>`);
       }

       if (false) { 
              let answer = prompt ('Каково оф название');
       
              if(!answer || answer.toLowerCase() != 'ECMAScript'.toLowerCase()) {
              document.write ('not');
              } else {
              document.write ('yes');
              }
       }


       if (false) {let userNum1 = null,
           userNum2 = null;

       do {
              userNum1 = +prompt('Enter number1:');
              
       } while (isNaN(userNum1));
       
       do {
              userNum2 = +prompt('Enter number2:');
       } while (isNaN(userNum2));
       
       if( userNum1 > userNum2)  {
              document.write (userNum1);
              } else if ( userNum1 < userNum2){
              document.write (userNum2);
              } else document.write ("=");

       document.write ((userNum1 + userNum2) / 2);}


       

       let userNum1 = null,
           userNum2 = null;

              userNum1 = prompt('Enter number1:');
                     
              userNum2 = prompt('Enter number2:');
       
       
       if( charCodeAt(userNum1) > charCodeAt(userNum2))  {
              document.write (userNum1);
              } else document.write (userNum2);
       

       function genRand(min, max) {
              return Math.round(Math.random() * (max - min) + (min));
       }


})();