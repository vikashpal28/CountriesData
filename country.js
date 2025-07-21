const Name = new URLSearchParams(window.location.search);
const countryName = Name.get("name");
const flagImg = document.querySelector(".countrie-box img");
const CountryNameH1 = document.querySelector(".counties-details h1");
const NativeName = document.querySelector(".Native-Name");
const Population = document.querySelector(".Population");
const Region = document.querySelector(".Region");
const Subregion = document.querySelector(".Subregion");
const Capital = document.querySelector(".Capital");
const toplevelDomain = document.querySelector(".toplevelDomain");
const Currencies = document.querySelector(".Currencies");
const Language = document.querySelector(".Language");
const Border_countries = document.querySelector(".Border-countries");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then((data) => {
    flagImg.src = data[0].flags.svg;
    CountryNameH1.innerText = data[0].name.common;
    if (data[0].name.nativeName) {
      NativeName.innerText = Object.values(data[0].name.nativeName)[0].common;
    } else {
      NativeName.innerText = data[0].name.common;
    }
    Population.innerText = data[0].population.toLocaleString("en-IN");
    // for region
    if (data[0].region) {
      Region.innerText = data[0].region;
    } else {
      Region.innerText = "";
    }
    // for subregion
    if (data[0].subregion) {
      Subregion.innerText = data[0].subregion;
    } else {
      Subregion.innerText = "";
    }
    // for capital
    if (data[0].capital) {
      Capital.innerText = data[0].capital;
    } else {
      Capital.innerText = "";
    }
    // for toplevelDomain
    if (data[0].tld) {
      toplevelDomain.innerText = data[0].tld;
    } else {
      toplevelDomain.innerText = "";
    }

    // for currency
    if (data[0].currencies) {
      Currencies.innerText = Object.values(data[0].currencies)
        .map((currency) => currency.name)
        .join(", ");
    } else {
      Currencies.innerText = "";
    }
    // for language
    if (data[0].languages) {
      Language.innerText = Object.values(data[0].languages).join(", ");
    } else {
      Language.innerText = "";
    }
    // for borders countrise
    if (data[0].borders) {
      data[0].borders.forEach((border) => {
        // console.log(border);
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([bordercountry]) => {
            const borderCountryTag = document.createElement("a");
            borderCountryTag.innerText = bordercountry.name.common;
            borderCountryTag.href = `country.html?name=${bordercountry.name.common}`;
            Border_countries.append(borderCountryTag);
          });
      });
    } else {
    }
  });

  function goback(){
    history.back();
  }

const DarkMode = document.querySelector('.DarkMode');

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