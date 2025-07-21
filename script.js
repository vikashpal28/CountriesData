const countriesContainer = document.querySelector(".countries-container");
const filterbyregion = document.querySelector(".filter-by-region");
const searchCountry = document.querySelector('.searchCountry');
const DarkMode = document.querySelector('.DarkMode');

let allCountryData;

fetch("./data.json")
.then((res) =>res.json())
.then((data)=>{
  allCountryData = data
     data.forEach((country) => {
      const countryCard = document.createElement("a");
      countryCard.classList.add("country-card");
      countryCard.href = `./country.html?name=${country.name}`;
      const cardHTML = `
    <img src="${country.flags.svg}" alt="flag">
            <div class="card-text">
            <h3 class="card-title">${country.name}</h3>   
            <p><b>Population</b>: ${country.population.toLocaleString(
              "en-IN"
            )}</p>
            <p><b>Region</b>: ${country.region}</p>
            <p><b>Capital</b>: ${country.capital}</p>     
`;
      countryCard.innerHTML = cardHTML;

      countriesContainer.append(countryCard);
    });
})
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
      const countryCard = document.createElement("a");
      countryCard.classList.add("country-card");
      countryCard.href = `./country.html?name=${country.name}`;
      const cardHTML = `
    <img src="${country.flags.svg}" alt="flag">
            <div class="card-text">
            <h3 class="card-title">${country.name}</h3>   
            <p><b>Population</b>: ${country.population.toLocaleString(
              "en-IN"
            )}</p>
            <p><b>Region</b>: ${country.region}</p>
            <p><b>Capital</b>: ${country.capital}</p>     
`;
      countryCard.innerHTML = cardHTML;

      countriesContainer.append(countryCard);
    });
  })
  .catch((error) => {
    console.error("Error fetching countries:", error);
  });

filterbyregion.addEventListener("change", (e) => {
  fetch(`https://restcountries.com/v3.1/region/${filterbyregion.value}`)
    .then((res) => res.json())
    .then(renderCountry)
   
    });


function renderCountry(data){
  countriesContainer.innerHTML = "";
      data.forEach((country) => {
        // console.log(country);
        const countryCard = document.createElement("a");
        countryCard.classList.add("country-card");
        countryCard.href = `./country.html?name=${country.name.common}`;
        const cardHTML = `
    <img src="${country.flags.svg}" alt="flag">
            <div class="card-text">
            <h3 class="card-title">${country.name.common}</h3>   
            <p><b>Population</b>: ${country.population.toLocaleString(
              "en-IN"
            )}</p>
            <p><b>Region</b>: ${country.region}</p>
            <p><b>Capital</b>: ${country.capital}</p>     
`;
        countryCard.innerHTML = cardHTML;

        countriesContainer.append(countryCard);
      });
}



function render(data){
  countriesContainer.innerHTML = "";
      data.forEach((country) => {
        // console.log(country);
        const countryCard = document.createElement("a");
        countryCard.classList.add("country-card");
        countryCard.href = `./country.html?name=${country.name.common}`;
        const cardHTML = `
    <img src="${country.flags.svg}" alt="flag">
            <div class="card-text">
            <h3 class="card-title">${country.name}</h3>   
            <p><b>Population</b>: ${country.population.toLocaleString(
              "en-IN"
            )}</p>
            <p><b>Region</b>: ${country.region}</p>
            <p><b>Capital</b>: ${country.capital}</p>     
`;
        countryCard.innerHTML = cardHTML;

        countriesContainer.append(countryCard);
      });
}

searchCountry.addEventListener('input', (e)=>{
  // console.log(e.target.value);
 const filterCountryName = allCountryData.filter((country) => country.name.toLowerCase().includes(e.target.value.toLowerCase()));
 render(filterCountryName);
})

DarkMode.addEventListener('click',() =>{
  document.body.classList.toggle('dark');
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
})

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
});

 


