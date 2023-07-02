import { renderCountryDetails } from "./utils.js"

export const renderDetail = id => {
	const API_URL_DETAIL = `https://restcountries.com/v3.1/alpha/${id}`

	fetch(API_URL_DETAIL)
		.then(res => res.json())
		.then(([country]) => {

			country = {
				flag: country.flags.png,
				name: country.name.official,
				nativeName: Object.values(country.name.nativeName)[0].official,
				population: country.population.toLocaleString(),
				region: country.region,
				subRegion: country.subregion,
				capital: country.capital && country.capital[0],
				topLevelDomain: country.tld[0],
				currencies: Object.values(country.currencies)
					.map(currency => currency.name)
					.join(', '),
				languages: Object.values(country.languages).join(', '),
				borders: country.borders,
			}
			renderCountryDetails(country)
		})
}
