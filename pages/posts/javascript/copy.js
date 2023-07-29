document.querySelectorAll('.top-code').forEach((div) => {
  div.querySelector('.copy-button').addEventListener('click', async () => {
    navigator.clipboard.writeText(div.parentElement.querySelector('pre').textContent)

    const button = div.querySelector('button')
    const span = button.querySelector('span')

    button.classList.add('copied')
    span.innerText = 'Copiado!'

    setInterval(resetButton, 5000)

    function resetButton() {
      button.classList.remove('copied')
      span.innerText = 'Copiar'
    }
  })
})