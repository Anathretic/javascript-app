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
    
	infoContainer.appendChild(createInfoElement('Region', country.region))
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
	rootElement.innerHTML = '';
	rootElement.appendChild(createListElement(countries))
}
