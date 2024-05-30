
let button = document.querySelector('button');
button.addEventListener('click', () => {
    let continents = document.querySelector('.continents');
    continents.classList.toggle('visible');
})

const loadCountryApi = () => {
    fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        displayCountries(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}


const displayCountries = (countries) => {
    console.log(countries);
    const countriesHtml = countries.map(country => getCountry(country))
    const countriesDiv = document.querySelector('.countries');
    countriesDiv.innerHTML = countriesHtml.join(' ');
}

const getCountry = (country) => {
    console.log(country);
    return `
    <div class="country">
        <img src="${country.flag}" alt="${country.name}">
        <div class="card--body">
            <h3>${country.name}</h3>
            <p class="population">Population: <span>${country.population}</span></p>
            <p class="region">Region: <span>${country.region}</span></p>
            <p class="capital">Capital: <span>${country.capital}</span></p>
        </div>
    </div>
`;
}

loadCountryApi()