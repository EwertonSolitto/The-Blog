document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  handleForm();
});

function handleForm() {
  const form = document.querySelector('form')
  const name = form.querySelector('#name')
  const email = form.querySelector('#email')
  const message = form.querySelector('#message')

  if (name.value !== '' && email.value !== '' && message.value !== '') {
    if (email.value.search(/[@]/g) !== -1 && email.value.search(/[.com]/g) !== -1) {
      console.log(name.value, email.value, message.value)
    }
  }

  name.value = ""
  email.value = ""
  message.value = ""
}