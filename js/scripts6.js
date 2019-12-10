(function(){ 

       'use strict';

       let word = 'vasya';
       let letter = 'a';
       let nLetter = 'p';

       function ucFirst(str){
              let firstLetter = str.charAt(0).toUpperCase();   
              return firstLetter + str.substr(1);
       }

       

       function delLetter(str, l){
              let regexp = new RegExp(l, 'gi');
             str = str.replace(regexp, '');
              return str;
       }

       function repLatter (str, l, n){
              let regexp1 = new RegExp(l, 'gi');
             str = str.replace(regexp1, n);
              return str;
       }


       console.log(word);
       console.log(ucFirst(word));

       console.log(word);
       console.log(delLetter(word, letter));

       console.log(word);
       console.log(repLatter(word, letter, nLetter));

})();