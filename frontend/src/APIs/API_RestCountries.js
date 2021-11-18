//API : https://restcountries.com/v3.1/all
document.addEventListener("DOMContentLoaded", function(){

    const listePays = document.getElementById("listePays");
    let pays;

    listePays.addEventListener("change", choixPays);
 
    function choixPays(event){
        afficherInfosPays(event.target.value);
    }

    fetch("https://restcountries.com/v3.1/all").then(res => res.json())
                                            .then(data => initialisation(data))
                                            .catch(err => console.log("Erreur:", err));

    function initialisation (infoPays){
        pays = infoPays;
        let option = "";

        console.log(pays);
        //pays.forEach(country => option+=`<option value="${country.alpha3Code}">${country.translations.fra.common}</option>`);
        pays.forEach(country => option+=`<option value="${country.alpha3Code}">${country.name.common}</option>`);

        listePays.innerHTML = option;
        //listePays.selectedIndex = Math.floor(Math.random()*listePays.length);
        listePays.selectedIndex = 120;

        afficherInfosPays(listePays.selectedIndex);
    }

    function afficherInfosPays(countryByAlpha3Code){
        let info=pays[listePays.selectedIndex];

        document.querySelector("img").src = info.flags.png;
        document.querySelector("img").alt = `Flag of ${info.name.common}`;
        document.getElementById("capitale").innerHTML = info.capital;
        document.getElementById("langue").innerHTML = info.languages[Object.keys(info.languages)[0]];
        document.getElementById("population").innerHTML = info.population.toLocaleString("en-US");
        document.getElementById("monnaie").innerHTML = info.currencies[Object.keys(info.currencies)[0]].name;
        document.getElementById("symbole").innerHTML = info.currencies[Object.keys(info.currencies)[0]].symbol;
        document.getElementById("continent").innerHTML = info.region;
        document.getElementById("sous-continent").innerHTML = info.subregion;
    }
})