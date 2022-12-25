const faqContent = document.querySelectorAll('.faq--title')

console.log(faqContent)

faqContent.forEach((element) => {
  console.log(element)
  element.addEventListener('click', (event) => {
    element.nextElementSibling.classList.toggle('hide')
  })
})

