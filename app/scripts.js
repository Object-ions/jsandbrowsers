console.log('hello world');

let form = document.querySelector('form');
form.addEventListener('submit', function submitForm(e) {
  e.preventDefault();
  console.log('form submitted');
});