function handleMenu() {
  const header = document.getElementById('header')

  if (header.classList.contains('opened-menu')) {
    return header.classList.remove('opened-menu')
  } else {
    return header.classList.add('opened-menu')
  }
}