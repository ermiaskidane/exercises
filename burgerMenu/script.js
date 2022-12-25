const burger = document.querySelector('#burger')
const cross = document.querySelector('#cross')
const navLists = document.querySelector('#collapse')

burger.addEventListener('click', () => {
  burger.classList.add('hide')
  cross.classList.remove('hide')
  navLists.classList.remove('visibility')
})

cross.addEventListener('click', () => {
  cross.classList.add('hide')
  burger.classList.remove('hide')
  navLists.classList.add('visibility')
})
