AOS.init();


const stateHome = document.querySelector('.state__home')
const stateAbout = document.querySelector('.state__about')
const stateSkills = document.querySelector('.state__skills')
const statePortfolio = document.querySelector('.state__portfolio')
const stateContacts = document.querySelector('.state__contacts')


stateHome.addEventListener('click', () => {
  stateHome.style.fontWeight = '700'
  stateAbout.style.fontWeight = '100'
  stateSkills.style.fontWeight = '100'
  statePortfolio.style.fontWeight = '100'
  stateContacts.style.fontWeight = '100'
})
stateAbout.addEventListener('click', () => {
  stateHome.style.fontWeight = '100'
  stateAbout.style.fontWeight = '700'
  stateSkills.style.fontWeight = '100'
  statePortfolio.style.fontWeight = '100'
  stateContacts.style.fontWeight = '100'
})
stateSkills.addEventListener('click', () => {
  stateHome.style.fontWeight = '100'
  stateAbout.style.fontWeight = '100'
  stateSkills.style.fontWeight = '700'
  statePortfolio.style.fontWeight = '100'
  stateContacts.style.fontWeight = '100'
})
statePortfolio.addEventListener('click', () => {
  stateHome.style.fontWeight = '100'
  stateAbout.style.fontWeight = '100'
  stateSkills.style.fontWeight = '100'
  statePortfolio.style.fontWeight = '600'
  stateContacts.style.fontWeight = '100'
})
stateContacts.addEventListener('click', () => {
  stateHome.style.fontWeight = '100'
  stateAbout.style.fontWeight = '100'
  stateSkills.style.fontWeight = '100'
  statePortfolio.style.fontWeight = '100'
  stateContacts.style.fontWeight = '700'
})
