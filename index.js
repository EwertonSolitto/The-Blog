function openMenu() {
  const header = document.getElementById('header')

  header.classList.add('opened-menu')
}

function closeMenu() {
  const header = document.getElementById('header')

  header.classList.remove('opened-menu')
}
