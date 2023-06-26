import { countriesList } from './utils.js'

const API_URL_ALL = 'https://restcountries.com/v3.1/all'

let countries

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
