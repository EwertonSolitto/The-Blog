const posts = document.querySelectorAll('.search-response')
const input = document.querySelector('#search-input')

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  posts.forEach((post) => {
    if (post.querySelector('h2').textContent.toUpperCase().search(input.value.toUpperCase()) !== -1) {
      return post.classList.remove('disapper')
    }
    return post.classList.add('disapper')
  })
})