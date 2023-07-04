// DASHBOARD

const createInfoElement = (label, value) => {
	const infoElement = document.createElement('div')

	const labelElement = document.createElement('strong')
	labelElement.innerText = `${label}: `
	const valueElement = document.createElement('span')
	valueElement.innerText = value

	infoElement.appendChild(labelElement)
	infoElement.appendChild(valueElement)

	return infoElement
}

const createFlagElement = country => {
	const flagContainer = document.createElement('div')
	const flagElement = document.createElement('img')
	flagElement.src = country.flag
	flagElement.alt = `${country.name} flag`
	flagElement.id = `${country.code}`

	flagContainer.appendChild(flagElement)
	return flagContainer
}

const createCountryItemElement = country => {
	const countryElement = document.createElement('li')

	countryElement.appendChild(createFlagElement(country))

	const infoContainer = document.createElement('div')
	infoContainer.classList.add('info-container')

	const countryNameElement = document.createElement('strong')
	countryNameElement.innerText = country.name
	countryNameElement.classList.add('country-name')

	infoContainer.appendChild(countryNameElement)
	infoContainer.appendChild(createInfoElement('Continent', country.continents))
	infoContainer.appendChild(createInfoElement('Capital', country.capital))

	countryElement.appendChild(infoContainer)

	return countryElement
}

const createListElement = countries => {
	const listElement = document.createElement('ul')
	countries.forEach(country => {
		listElement.appendChild(createCountryItemElement(country))
	})

	return listElement
}

export const countriesList = countries => {
	const rootElement = document.querySelector('#root')
	rootElement.innerHTML = ''
	rootElement.appendChild(createListElement(countries))
}

// DETAIL-ELEMENT

const createDetailElement = country => {
	const detailContainer = document.createElement('div')
	detailContainer.classList.add('detail-container')

	const flagElement = createFlagElement(country)
	const detailName = document.createElement('strong')
	detailName.innerText = country.name
	detailName.classList.add('container-country-title')

	detailContainer.appendChild(flagElement)
	detailContainer.appendChild(detailName)

	detailContainer.appendChild(createInfoElement('Native name', country.nativeName))
	detailContainer.appendChild(createInfoElement('Population', country.population))
	detailContainer.appendChild(createInfoElement('Region', country.region))
	detailContainer.appendChild(createInfoElement('Sub region', country.subRegion))
	detailContainer.appendChild(createInfoElement('Capital', country.capital))
	detailContainer.appendChild(createInfoElement('Top level domain', country.topLevelDomain))
	detailContainer.appendChild(createInfoElement('Currencies', country.currencies))
	detailContainer.appendChild(createInfoElement('Languages', country.languages))
	detailContainer.appendChild(createInfoElement('Border countries', country.borders))

	return detailContainer
}

export const renderCountryDetails = country => {
	const detailWrapper = document.querySelector('.container-info')
	detailWrapper.innerHTML = ''
	detailWrapper.appendChild(createDetailElement(country))
}
