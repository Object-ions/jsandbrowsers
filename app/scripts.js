console.log('hello world');

let form = document.querySelector('form');
form.addEventListener('submit', function submitForm(e) {
  e.preventDefault();
  //assign the varibles with the target tags
  let question1 = document.getElementById('question1').value;

  console.log(question1);
});