import { renderDashboard } from './dashboard.js'
import { renderDetail } from './detail.js'

const main = document.getElementById('root')
const body = document.querySelector('body')
const popup = document.querySelector('.more-info')
const closeBtn = document.querySelector('.container-btn')
const darkModeBtn = document.querySelector('.dark-mode-btn')

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
	}
}

const closePopup = () => {
	popup.classList.remove('active')
}

darkModeBtn.addEventListener('click', handleDarkMode)
closeBtn.addEventListener('click', closePopup)
main.addEventListener('click', showPopup)
