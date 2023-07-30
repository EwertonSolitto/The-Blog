const form = document.querySelector('#search-form').querySelector('form')
const input = form.querySelector('#search-input')
const posts = document.querySelectorAll('.search-response')
const search = document.querySelector('#search')
const button = form.querySelector('button')

input.value = document.URL.slice(document.URL.search('search=') + 7, document.URL.length)

form.addEventListener('submit', (event) => {
  event.preventDefault()
  posts.forEach((post) => {
    if (post.querySelector('h2').textContent.toUpperCase().search(input.value.toUpperCase()) !== -1) {
      return post.classList.remove('disapper')
    }
    return post.classList.add('disapper')
  })
})

search.addEventListener('submit', (event) => {
  event.preventDefault()
  const searchInput = search.querySelector('input')
  input.value = searchInput.value
  searchInput.value = ''
  button.click()
})

button.click()
