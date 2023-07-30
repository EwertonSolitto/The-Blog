const form = document.querySelector('#search-form').querySelector('form')
const input = form.querySelector('#search-input')
const posts = document.querySelectorAll('.search-response')
const search = document.querySelector('#search')
const button = form.querySelector('button')
const notFound = document.querySelector('#not-found')

input.value = document.URL.slice(document.URL.search('search=') + 7, document.URL.length)

form.addEventListener('submit', (event) => {
  event.preventDefault()
  let counter = 0
  posts.forEach((post) => {
    if (post.querySelector('h2').textContent.toUpperCase().search(input.value.toUpperCase()) !== -1) {
      counter = -1000
      return post.classList.remove('disapper')
    }
    counter++
    return post.classList.add('disapper')
  })
  
  if (counter === posts.length) {
    notFound.classList.add('apper')
  } else {
    notFound.classList.remove('apper')
  }
})

search.addEventListener('submit', (event) => {
  event.preventDefault()
  const searchInput = search.querySelector('input')
  input.value = searchInput.value
  searchInput.value = ''
  button.click()
})

button.click()
