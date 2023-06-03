
let form = document.querySelector('form');
form.addEventListener('submit', function submitForm(e) {
  e.preventDefault();
  //assign the varibles values with the target tags
  let question1 = document.getElementById('question1').value;
  let question2 = document.getElementById('question2').value;
  let question3 = document.getElementById('question3').value;
  let question4 = document.getElementById('question4').value;
  let question5 = document.getElementById('question5').value;
  let display = document.getElementById('answer-display')

  //creat a branch to check logic
  if (question1 <= 16) {
    console.log('since you are ' + question1 + ' that is too young to study. come back when you are 16');
  } else if (question2 === 'no') {
    console.log('I have nothing to offer you');
  } else if (question3 === 'yes') {
    console.log('congratulations you are a great candid for Python!');
  } else if (question4 === 'yes') {
    console.log('congratulations you are a great candid for JavaScript!')
  } else if (question5 === 'precious') {
    console.log('congratulations you are a great candid for Ruby');
  } else {
    console.log('congratulations you are a great candid for C#');
  };

  //take the value from the user input and change the text (span) accoring to the value

  document.getElementById('q1Span').innerText = question1;

  display.removeAttribute('class')

});