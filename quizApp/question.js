const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');


let currentQuestionindex=0;
let score = 0;
showQuestion();

function startQuiz(){
    let currentQuestionindex=0;
    let score = 0;

    nextButton.innerHTML="Next";
    showQuestion();

}


function showQuestion(){
    fetch('https://kopitrack.000webhostapp.com/questions.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // display the data in the console
    // do something with the data here
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}