(function(){ 
       'use strict';

       let questions = [ {
                     text: '1.Are you OK',
                     answers: [
                            'a. yes',
                            'b. no',
                            'c. so so'
                      ],
                     answer: 'a'
              }, {
                     text: '2.Are you OK',
                     answers: [
                            'a. yes',
                            'b. no',
                            'c. so so'
                     ],
                     answer: 'b'
              }, {
                     text: '3.Are you OK',
                     answers: [
                            'a. yes',
                            'b. no',
                            'c. so so'
                     ],
                     answer: 'c'
              }
       ];

       let rightAns = 0,
              rights = [],
              wrongs = []; 
       
       for (let key in questions) {
              let question = questions[key];
              let answers = question.answers.join('\n');
              let userAnswer = prompt(question.text + '\n' + answers);
               if(userAnswer == question.answer){
                     rights.push(question.text) 
                     rightAns++;
                     questions[key].type = 'right';
                } else {
                            wrongs.push (`
                            ${question.text}<br>
                            <small>Правильный ответ :${question.answer}</small>
                            `); 
                            questions[key].type = 'wrong';
                       
                }

       }

       console.log(wrongs);
       console.log(rights);

       let h1 = document.createElement('h1');
       h1.innerText = `you got ${rightAns} question(s) right from ${questions.length}` 

       let container = document.querySelector('.container')
       
       container.appendChild(h1);

       let ul = document.createElement('ul');
       container.appendChild(ul);

       for (let key in questions) {
            let li = document.createElement('li');
            li.innerHTML = questions[key].text;
            li.classList.add(questions[key].type);
            ul.appendChild(li);
       }



       showResults('right', rights);
       showResults('wrong', wrongs);

       function showResults(style, answers) {
              let target = document.createElement('ul');
              target.classList.add(style);
              container.appendChild(target);

              for (let key in answers) {
                     let text = answers[key],
                     li = document.createElement('li');
                     li.innerHTML = text;
                     target.appendChild(li);
              }
       }

})();