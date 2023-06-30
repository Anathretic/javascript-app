import { countriesList } from './utils.js'

const searchInput = document.querySelector('#query')
const regionSelect = document.querySelector('#region')

const body = document.querySelector('body')
const darkModeBtn = document.querySelector('.dark-mode-btn')

const API_URL_ALL = 'https://restcountries.com/v3.1/all'

let countries
let query = ''
let region = ''

fetch(API_URL_ALL)
	.then(res => res.json())
	.then(rawCountry => {
		countries = rawCountry.map(country => {
			return {
				name: country.name.official,
				flag: country.flags.png,
				capital: country.capital && country.capital[0],
				region: country.region,
			}
		})
		countriesList(countries)
	})

const dataAndRenderFilter = () => {
	const filteredCountries = countries.filter(country => {
		return country.name.toLowerCase().includes(query) && (!region || country.region === region)
	})

	countriesList(filteredCountries)
}

const handleDarkMode = () => {
	if (body.getAttribute('data-mode') === 'light') {
		body.setAttribute('data-mode', 'dark')
		darkModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>'
	} else {
		body.setAttribute('data-mode', 'light')
		darkModeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>'
	}
}

searchInput.addEventListener('input', e => {
	query = e.target.value.toLowerCase().trim()
	dataAndRenderFilter()
})

regionSelect.addEventListener('change', e => {
	region = e.target.value
	dataAndRenderFilter()
})

darkModeBtn.addEventListener('click', handleDarkMode)
