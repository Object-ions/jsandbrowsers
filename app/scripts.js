console.log('hello world');

let form = document.querySelector('form');
form.addEventListener('submit', function submitForm(e) {
  e.preventDefault();
  //assign the varibles values with the target tags
  let question1 = document.getElementById('question1');
  let question1Value = document.getElementById('question1').value;
  // let question2 = document.getElementById('question2').value;
  // let question3 = document.getElementById('question3').value;
  // let question4 = document.getElementById('question4').value;
  // let question5 = document.getElementById('question5').value;
  // console.log(question1);
  console.log(question1Value);
  // console.log(question3);
  // console.log(question4);
  // console.log(question5);
});