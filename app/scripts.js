
let form = document.querySelector('form');
form.addEventListener('submit', function submitForm(e) {
  e.preventDefault();
  //assign the varibles values with the target tags
  let question1Value = document.getElementById('question1').value;
  let question2Value = document.getElementById('question2').value;
  let question3Value = document.getElementById('question3').value;
  let question4Value = document.getElementById('question4').value;
  let question5Value = document.getElementById('question5').value;

  //creat a branch to check logic
  if (question1Value <= 16) {
    console.log('since you are ' + question1Value + ' that is too young to study. come back when you are 16');
  } else if (question2Value === 'no') {
    console.log('I have nothing to offer you');
  } else if (question3Value === 'yes') {
    console.log('congratulations you are a great candid for Python!');
  } else if (question4Value === 'yes') {
    console.log('congratulations you are a great candid for JavaScript!')
  } else if (question5Value === 'precious') {
    console.log('congratulations you are a great candid for Ruby');
  } else {
    console.log('congratulations you are a great candid for C#');
  };
});