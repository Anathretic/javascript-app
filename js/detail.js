import { renderCountryDetails } from './utils.js'

const secondLoaderElement = document.getElementById('second-loading-container')

const showLoader = () => {
	secondLoaderElement.style.display = 'inline-block'
}

const hideLoader = () => {
	secondLoaderElement.style.display = 'none'
}

export const renderDetail = id => {
	const API_URL_DETAIL = `https://restcountries.com/v3.1/alpha/${id}`

	showLoader()

	fetch(API_URL_DETAIL)
		.then(res => res.json())
		.then(([country]) => {
			hideLoader()
			country = {
				flag: country.flags.png,
				name: country.name.official,
				nativeName: country.name.nativeName ? Object.values(country.name.nativeName)[0].official : 'N/A',
				population: country.population.toLocaleString(),
				region: country.region,
				subRegion: country.subregion ? country.subregion : 'N/A',
				capital: country.capital ? country.capital && country.capital[0] : 'N/A',
				topLevelDomain: country.tld ? country.tld[0] : 'N/A',
				currencies: country.currencies
					? Object.values(country.currencies)
							.map(currency => currency.name)
							.join(', ')
					: 'N/A',
				languages: country.languages ? Object.values(country.languages).join(', ') : 'N/A',
				borders: country.borders ? country.borders.join(', ') : 'No border countries!',
			}
			renderCountryDetails(country)
		})
}
