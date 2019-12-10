(function(){ 

       'use strict';

       var salaries = {
              'Sasha':100,
              'Max':300,
              'Sergey':250
       };

       let sum = 0;
       
       for(let salary in salaries){
              sum += salaries[salary];
       }
       
       console.log(sum);

       let max = 0,
              name = null,
              i=0;

       for(let salary in salaries){
              i++
              if (max < salaries[salary]){
              max = salaries[salary];
              name = salary   
              }
       }

       if (i == 0) {
              console.log ('now');
       } else {
              console.log(name + '-' + max);

              let min = max, nameMin = null;
       
              for(let salary in salaries){
                     if (min > salaries[salary]){
                     min = salaries[salary];
                     nameMin = salary   
                     }
              }
              console.log(nameMin + '-' + min);
       }

       


       
})();