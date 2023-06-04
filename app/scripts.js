

let form = document.querySelector('form');
let result = '';

form.addEventListener('submit', function submitForm(e) {
  e.preventDefault();

  //store user value into variables according to its question number
  let question1 = parseInt(document.getElementById('question1').value);
  let question2 = document.getElementById('question2').value;
  let question3 = document.getElementById('question3').value;
  let question4 = document.getElementById('question4').value;
  let question5 = document.getElementById('question5').value;
  let display = document.getElementById('answer-display')

  console.log(question1);

  //create a branch to check logic and store the answer in 'result'
  if (question1 === '') {
    result = 'Please enter a vaild answer'
  } else if (question1 < 16) {
    result = 'since you are ' + question1 + ' that is too young to study. come back when you are 16';
  } else if (question2 === 'no') {
    result = 'I am sorry, I have nothing to offer you';
  } else if (question3 === 'yes') {
    result = 'congratulations you are a great candidate for Python!';
  } else if (question4 === 'yes') {
    result = 'congratulations you are a great candidate for JavaScript!';
  } else if (question5 === 'precious') {
    result = 'congratulations you are a great candidate for Ruby';
  } else {
    result = 'congratulations you are a great candidate for C#';
  };

  //show the "answer-display" div
  display.removeAttribute('class')

  //show 'result' on the <span #result> (inside #answer-display)
  document.getElementById('result').innerText = result;

  //clear form answers
  document.getElementById('question1').value = null;
  document.getElementById('question2').value = null;
  document.getElementById('question3').value = null;
  document.getElementById('question4').value = null;
  document.getElementById('question5').value = null;

});