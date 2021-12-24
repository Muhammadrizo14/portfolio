const shoes = document.querySelector('.shoes')
const apparel = document.querySelector('.apparel')
const basics = document.querySelector('.basics')


shoes.addEventListener('click', ()=> {
	shoes.style.borderBottom = ' 3px solid #212121'
	apparel.style.border = 'none'
	basics.style.border = 'none'
})


apparel.addEventListener('click', ()=> {
	apparel.style.borderBottom = ' 3px solid #212121'
	shoes.style.border = 'none'
	basics.style.border = 'none'
})

basics.addEventListener('click', ()=> {
	basics.style.borderBottom = ' 3px solid #212121'
	shoes.style.border = 'none'
	apparel.style.border = 'none'
})