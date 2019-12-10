(function(){ 

       'use strict';

       let names = [
              'Sasha',
              'Max',
              'Sergey',
              'Anton',
              'Bohdan',
              'Kate',
              'Masha',
              'Serj',
              'Alex',
              'Sanya',
              'Oleg',
              'Artur',
              'Valya'
       ];







       // for(let i=0; i<names.length; i++){
       //        console.log(names[i]);
       // };

       // for(let i = names.length - 1; i >= 0; i--){
       //        console.log(names[i]);
       // }


       // for(let i = names.length - 1; i >= 0; i--) {
       //        if (names[i].charAt(0) == 'A') {
       //               console.log(names[i]);
       //        }
       // }

       // for(let i = names.length - 1; i >= 0; i--) {
       //        if (names[i].toLowerCase().indexOf ('a') >=0) {
       //               console.log(names[i]);
       //        }
       // }

       // for(let i = names.length - 1; i >= 0; i--) {
       //        console.log (names[i].charAt(0)) 
       //        }

       let str = names.join('*')
       // console.log(str);

       console.log(str.split('*'))

       

})();