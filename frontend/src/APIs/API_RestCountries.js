//API : https://restcountries.com/v3.1/all
document.addEventListener("DOMContentLoaded", function(){

    const listePays = document.getElementById("listePays");
    let pays;

    console.log(document.getElementById("listePays"));
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

        pays.forEach(country => option+=`<option value="${country.alpha3Code}">${country.name}</option>`);
        
        listePays.innerHTML = option;
        listePays.selectedIndex = Math.floor(Math.random()*listePays.length);

        console.log("value = " + listePays.selectedIndex)
        //afficherInfosPays(listePays[listePays.selectedIndex].value);  
        afficherInfosPays(listePays.selectedIndex);
    }

    function afficherInfosPays(countryByAlpha3Code){
        const info = pays.find(country => country.alpha3Code === countryByAlpha3Code);

        console.log("alpha3Code : " + countryByAlpha3Code);
        console.log("find :");
        console.log(country => country.alpha3Code);

        document.querySelector("#Drapeau img").src = info.flag;
        document.querySelector("#Drapeau img").alt = `Flag of ${info.name}`;
        document.getElementById("capitale").innerHTML = info.capital;
        document.getElementById("langue").innerHTML = info.languages;
        document.getElementById("population").innerHTML = info.population.toLocaleString("en-US");
        document.getElementById("monnaie").innerHTML = info.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ");
        document.getElementById("continent").innerHTML = info.region;
        document.getElementById("sous-continent").innerHTML = info.subregion;
    }
})