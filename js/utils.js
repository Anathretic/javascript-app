const createFlag = country => {
	const flagImg = document.createElement('img')
	flagImg.src = country.flag
	flagImg.alt = `${country.name} flag`

	return flagImg
}

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
	const flagElement = createFlag(country)
	flagElement.setAttribute ('id', `${country.code}`)

	return flagElement
}

const createCountryItemElement = country => {
	const countryElement = document.createElement('li')

	countryElement.appendChild(createFlagElement(country))

	const infoContainer = document.createElement('div')
	infoContainer.classList.add('country-container')

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

	const flagContainer = document.createElement('div')
	const flagElement = createFlag(country)
	flagContainer.appendChild(flagElement)
	
	const detailName = document.createElement('strong')
	detailName.innerText = country.name
	detailName.classList.add('more-info-title')

	detailContainer.appendChild(flagContainer)
	detailContainer.appendChild(detailName)

	detailContainer.appendChild(createInfoElement('Native name', country.nativeName))
	detailContainer.appendChild(createInfoElement('Population', country.population))
	detailContainer.appendChild(createInfoElement('Region', country.region))
	detailContainer.appendChild(createInfoElement('Sub region', country.subRegion))
	detailContainer.appendChild(createInfoElement('Capital', country.capital))
	detailContainer.appendChild(createInfoElement('Top level domain', country.topLevelDomain))
	detailContainer.appendChild(createInfoElement('Currencies', country.currencies))
	detailContainer.appendChild(createInfoElement('Languages', country.languages))
	detailContainer.appendChild(createInfoElement('Number of border countries', country.borders))
	detailContainer.appendChild(createInfoElement('Start of the week', country.startOfWeek))

	return detailContainer
}

export const renderCountryDetails = country => {
	const detailWrapper = document.querySelector('.more-info-box')
	detailWrapper.innerHTML = ''
	detailWrapper.appendChild(createDetailElement(country))
}
