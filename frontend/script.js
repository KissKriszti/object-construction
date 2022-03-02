function Country(name, short, population, flag, continent) {
    this.name = name
    this.short = short
    this.population = population
    this.flag = flag
    this.continent = continent
}

//Components
const menuButton = () => {
    return `
    <button id="menu-btn">
        <svg width="40" height="40">
            <rect width="20" height="2"/>
            <rect width="20" height="2"/>
            <rect width="20" height="2"/>
        </svg>
        <span>button</span>
    </button>
    `
}

const header = (logo, button) => {
    return `
    <header>
        <a id="logo">${logo}</a>
        ${button()}
    </header>`
}

//Exercise
const countryCards = (cards) => {
    return `
    <div id="cards">
        ${cards}
    </div>
    `
}

const countryCard = (name, short, population, flag, continent) => {
    return `
    <div>
        <h2>${name}</h2>
        <h2>${short}</h2>
        <p>${population}</p>
        <img src="${flag}"></img>
        <p>${continent}</p>
    </div>
    `
}



const loadEvent = async () => {
    //Get data
    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();
    // console.log(countryArr[0])
    //Process data
    let countries = countryArr.map(function (country) {
        return new Country(country.name.common, country.cca3, country.population, country.flags.svg, country.continents[0])
    })
    console.log(countries)
    const rootElement = document.getElementById("root")
    rootElement.insertAdjacentHTML('beforeend', header("Countries", menuButton))

    //Exercise
    let content = ""
    for (let item of countries) {
        content += countryCard(item.name, item.short, item.population, item.flag, item.continent)
    }

    rootElement.insertAdjacentHTML('beforeend', countryCards(content))

    const menuButton1 = document.getElementById("menu-btn")
    menuButton1.addEventListener('click', (event) => {
        event.target.classList.toggle("clicked")
    })
}

window.addEventListener('load', loadEvent)