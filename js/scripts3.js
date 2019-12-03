(function(){ 

       'use strict';

       // let name = prompt ('enter your name, please');

       
       // if (name) {
       //        document.write(name);
       // } else {
       //        location.reload();
       // }


       // while (true){
       //        let name = prompt ('enter your name, please'); 

       //        if (name) {
       //               document.write(name);
       //               break;
       //        }

       // }

       let name = null;

       do {
              name = prompt ('enter your name, please');   
       } while (!name);

       document.write(name);


})();