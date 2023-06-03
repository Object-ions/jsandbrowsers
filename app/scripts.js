console.log('hello world');

let form = document.querySelector('form');
form.addEventListener('submit', function submitForm(e) {
  e.preventDefault();
  //assign the varibles values with the target tags
  let question1 = document.getElementById('question1');
  let question1Value = document.getElementById('question1').value;

  if (question1Value <= 16) {
    console.log('since you are ' + question1Value + 'that is too young to study. come back when you are 16')
  } else if {

  }

  //show the valu in the console
  console.log(question1);
  console.log(question1Value);
  // console.log(question3);
  // console.log(question4);
  // console.log(question5);
});