console.log('hello world');

let form = document.querySelector('form');
form.addEventListener('submit', function submitForm(e) {
  e.preventDefault();
  //assign the varibles values with the target tags
  let question1 = document.getElementById('question1');
  let question1Value = document.getElementById('question1').value;

  let question2 = document.getElementById('question2');
  let question2Value = document.getElementById('question2').value;

  let question3 = document.getElementById('question3');
  let question3Value = document.getElementById('question3').value;

  let question4 = document.getElementById('question4');
  let question4Value = document.getElementById('question4').value;

  let question5 = document.getElementById('question5');
  let question5Value = document.getElementById('question5').value;

  if (question1Value <= 16) {
    console.log('since you are ' + question1Value + 'that is too young to study. come back when you are 16')
  } else {
    console.log('move on the Question 2');
  }

  if (question2Value === "no") {
    console.log('I have nothing to offer you')
  } else {
    console.log('move on the Question 3');
  }

  if (question3Value === "yes") {
    console.log('congratulations you are a great candid for Python!')
  } else {
    console.log('move on the Question 4');
  }

  if (question4Value === "yes") {
    console.log('congratulations you are a great candid for JavaScript!');
  } else {
    console.log('move on the Question 5');
  }

  if (question5Value === "percious") {
    console.log('congratulations you are a great candid for Ruby');
  } else {
    console.log('congratulations you are a great candid for C#');
  }


  //show the valu in the console
  console.log(question1);
  console.log(question1Value);
});