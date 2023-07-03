import { renderCountryDetails } from './utils.js'

export const renderDetail = id => {
	const API_URL_DETAIL = `https://restcountries.com/v3.1/alpha/${id}`

	fetch(API_URL_DETAIL)
		.then(res => res.json())
		.then(([country]) => {
			country = {
				flag: country.flags.png,
				name: country.name.official,
				nativeName: country.name.nativeName ? Object.values(country.name.nativeName)[0].official : 'N/A',
				population: country.population.toLocaleString(),
				region: country.region,
				subRegion: country.subregion ? country.subregion : 'N/A',
				capital: country.capital ? country.capital && country.capital[0] : 'N/A',
				topLevelDomain: country.tld[0],
				currencies: country.currencies
					? Object.values(country.currencies)
							.map(currency => currency.name)
							.join(', ')
					: 'N/A',
				languages: country.languages ? Object.values(country.languages).join(', ') : 'N/A',
				borders: country.borders,
			}
			renderCountryDetails(country)
		})
}
