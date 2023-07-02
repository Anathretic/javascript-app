import { countriesList } from './utils.js'

const searchInput = document.querySelector('#query')
const regionSelect = document.querySelector('#region')
const API_URL_ALL = 'https://restcountries.com/v3.1/all'

let countries
let query = ''
let continents = ''

export const renderDashboard = () => {
	fetch(API_URL_ALL)
		.then(res => res.json())
		.then(rawCountry => {
			countries = rawCountry.map(country => {
				return {
					name: country.name.official,
					flag: country.flags.png,
					capital: country.capital && country.capital[0],
					continents: country.continents[0],
					code: country.cca3,
				}
			})
			countriesList(countries)
		})

	const dataAndRenderFilter = () => {
		const filteredCountries = countries.filter(country => {
			return country.name.toLowerCase().includes(query) && (!continents || country.continents === continents)
		})

		countriesList(filteredCountries)
	}

	searchInput.addEventListener('input', e => {
		query = e.target.value.toLowerCase().trim()
		dataAndRenderFilter()
	})

	regionSelect.addEventListener('change', e => {
		continents = e.target.value
		dataAndRenderFilter()
	})
}
