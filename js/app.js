import { renderDashboard } from './dashboard.js'
import { renderDetail } from './detail.js'

const main = document.getElementById('root')
const body = document.querySelector('body')
const popup = document.querySelector('.more-info')
const closeBtn = document.querySelector('.more-info-btn')
const darkModeBtn = document.querySelector('.dark-mode-btn')
const toTheTopBtn = document.querySelector('.return-arrow')

renderDashboard()

const handleDarkMode = () => {
	if (body.getAttribute('data-mode') === 'light') {
		body.setAttribute('data-mode', 'dark')
		darkModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>'
	} else {
		body.setAttribute('data-mode', 'light')
		darkModeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>'
	}
}

const showPopup = el => {
	if (el.srcElement.alt) {
		renderDetail(el.srcElement.id)
		popup.classList.add('active')
		scrollBlock()
	}
}

const closePopup = () => {
	popup.classList.remove('active')
	body.classList.remove('scroll-block')
	body.classList.remove('scroll-block-padding')
}

const scrollBlock = () => {
	const documentWidth = document.documentElement.clientWidth
	const windowWidth = window.innerWidth
	const scrollBarWidth = windowWidth - documentWidth
	document.documentElement.style.setProperty('--padding-space', scrollBarWidth + 'px')

	if (popup.classList.contains('active')) {
		if (body.classList.contains('scroll-block')) {
			body.classList.remove('scroll-block')
		} else {
			body.classList.add('scroll-block')
		}
	}

	if (scrollBarWidth > 0) {
		body.classList.add('scroll-block-padding')
	}
}

const moveToTheTop = () => {
	window.scrollTo(0, 0)
}

const handleToTheTopBtn = () => {
	const scrollPosition = window.innerHeight + window.scrollY
	const pageHeight = document.body.offsetHeight - 100

	if (window.scrollY > 100 && scrollPosition < pageHeight) {
		toTheTopBtn.classList.add('active-arrow')
	} else if (scrollPosition >= pageHeight) {
		toTheTopBtn.classList.remove('active-arrow')
	} else {
		toTheTopBtn.classList.remove('active-arrow')
	}
}

toTheTopBtn.addEventListener('click', moveToTheTop)
darkModeBtn.addEventListener('click', handleDarkMode)
main.addEventListener('click', showPopup)
closeBtn.addEventListener('click', closePopup)
window.addEventListener('scroll', handleToTheTopBtn)
