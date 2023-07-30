document.querySelector('#contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  handleForm();
});

function handleForm() {
  const contactForm = document.querySelector('#contact-form')
  const name = contactForm.querySelector('#name')
  const email = contactForm.querySelector('#email')
  const message = contactForm.querySelector('#message')

  if (name.value !== '' && email.value !== '' && message.value !== '') {
    if (email.value.search(/[@]/g) !== -1 && email.value.search(/[.com]/g) !== -1) {
      console.log(`
      Nome:${name.value} 
      E-mail:${email.value} 
      Mensagem:${message.value}`
      )
    }
  }

  name.value = ""
  email.value = ""
  message.value = ""
}