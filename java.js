window.addEventListener("scroll", showNavOnScroll);
showNavOnScroll()
function showNavOnScroll() {
  if (scrollY > 0) {
    header.classList.add('navScroll')
  } else {
    header.classList.remove('navScroll')
  }
}


const btOpenMenu = document.getElementById('bt-OpenMenu');
function openMenu() {
  const btOpenMenu = document.getElementById('body');
  btOpenMenu.classList.add('openMenu');
}
btOpenMenu.addEventListener('click', openMenu);


const btCloseMenu = document.getElementById('bt-CloseMenu');
function closeMenu() {
  const btCloseMenu = document.getElementById('body');
  btCloseMenu.classList.remove('openMenu');
}
btCloseMenu.addEventListener('click', closeMenu);


window.addEventListener('scroll', showBackToTopButtonOnScroll);
showBackToTopButtonOnScroll()
function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
      backToTopButton.classList.add('show')
  } else {
      backToTopButton.classList.remove('show')
  }
}