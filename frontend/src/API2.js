import axios from "axios";

const callAPI2 = (city) => {
    // Call API

    if (city === "Paris") {
        axios
            .get(`https://api.breezometer.com/weather/v1/current-conditions?lat=48.86272&lon=2.28759&key=641f82b214e14a6fb39bf36a33bbcdb6`)
            .then((data) => {

                // Récupère la donnée d'une API
                const windSpeed = data.data.data.wind.speed.value;
                const pressure = data.data.data.pressure.value;
                const humidity = data.data.data.relative_humidity;


                // Modifier le DOM
                document.getElementById('vitesse-vent').innerHTML = `${windSpeed} km/h`;
                document.getElementById('pressure').innerHTML = `${pressure} mb`;
                document.getElementById('humidity').innerHTML = `${humidity} %`;
            })
            .catch(console.error);

        axios
            .get(`https://api.sunrise-sunset.org/json?lat=48.86272&lng=2.28759&date=today`)
            .then((data) => {

                // Récupère la donnée d'une API
                const sunrise = data.data.results.sunrise;
                const sunset = data.data.results.sunset;
                const solarnoon = data.data.results.solar_noon;
                const daylength = data.data.results.day_length;

                // Modifier le DOM
                document.getElementById('sunrise').innerHTML = `Lever du soleil : ${sunrise} (+1)`;
                document.getElementById('sunset').innerHTML = `Coucher du soleil : ${sunset} (+1)`;
                document.getElementById('solarnoon').innerHTML = `Midi solaire : ${solarnoon} (+1)`;
                document.getElementById('daylength').innerHTML = `Durée de la journée : ${daylength}`;

                var heures1 = sunrise.substring(0, 1);
                var minutes1 = sunrise.substring(2, 4);
                var secondes1 = sunrise.substring(5, 7);

                console.log(heures1);
                console.log(minutes1);
                console.log(secondes1);

                const heure1 = heures1 * 30;
                const minute1 = minutes1 * 6;
                const seconde1 = secondes1 * 6;

                document.querySelector('.heure').style.transform = `rotate(${heure1}deg)`;
                document.querySelector('.minute').style.transform = `rotate(${minute1}deg)`;
                document.querySelector('.seconde').style.transform = `rotate(${seconde1}deg)`;
            })
            .catch(console.error);
    }
    if (city === "Londres") {
        axios
            .get(`https://api.breezometer.com/weather/v1/current-conditions?lat=51.507351&lon=-0.127758&key=641f82b214e14a6fb39bf36a33bbcdb6`)
            .then((data) => {

                // Récupère la donnée d'une API
                const windSpeed = data.data.data.wind.speed.value;
                const pressure = data.data.data.pressure.value;
                const humidity = data.data.data.relative_humidity;

                // Modifier le DOM
                document.getElementById('vitesse-vent').innerHTML = `${windSpeed} km/h`;
                document.getElementById('pressure').innerHTML = `${pressure} mb`;
                document.getElementById('humidity').innerHTML = `${humidity} %`;
            })
            .catch(console.error);

        axios
            .get(`https://api.sunrise-sunset.org/json?lat=51.507351&lng=-0.127758&date=today`)
            .then((data) => {

                // Récupère la donnée d'une API
                const sunrise = data.data.results.sunrise;
                const sunset = data.data.results.sunset;
                const solarnoon = data.data.results.solar_noon;
                const daylength = data.data.results.day_length;

                // Modifier le DOM
                document.getElementById('sunrise').innerHTML = `Lever du soleil : ${sunrise} (+0)`;
                document.getElementById('sunset').innerHTML = `Coucher du soleil : ${sunset} (+0)`;
                document.getElementById('solarnoon').innerHTML = `Midi solaire : ${solarnoon} (+0)`;
                document.getElementById('daylength').innerHTML = `Durée de la journée : ${daylength} `;

                var heures1 = sunrise.substring(0, 1);
                var minutes1 = sunrise.substring(2, 4);
                var secondes1 = sunrise.substring(5, 7);

                console.log(heures1);
                console.log(minutes1);
                console.log(secondes1);

                const heure1 = heures1 * 30;
                const minute1 = minutes1 * 6;
                const seconde1 = secondes1 * 6;

                document.querySelector('.heure').style.transform = `rotate(${heure1}deg)`;
                document.querySelector('.minute').style.transform = `rotate(${minute1}deg)`;
                document.querySelector('.seconde').style.transform = `rotate(${seconde1}deg)`;

            })
            .catch(console.error);
    }
    if (city === "Madrid") {
        axios
            .get(`https://api.breezometer.com/weather/v1/current-conditions?lat=40.416775&lon=-3.703790&key=641f82b214e14a6fb39bf36a33bbcdb6`)
            .then((data) => {

                // Récupère la donnée d'une API
                const windSpeed = data.data.data.wind.speed.value;
                const pressure = data.data.data.pressure.value;
                const humidity = data.data.data.relative_humidity;


                // Modifier le DOM
                document.getElementById('vitesse-vent').innerHTML = `${windSpeed} km/h`;
                document.getElementById('pressure').innerHTML = `${pressure} mb`;
                document.getElementById('humidity').innerHTML = `${humidity} %`;
            })
            .catch(console.error);

        axios
            .get(`https://api.sunrise-sunset.org/json?lat=40.416775&lng=-3.703790&date=today`)
            .then((data) => {

                // Récupère la donnée d'une API
                const sunrise = data.data.results.sunrise;
                const sunset = data.data.results.sunset;
                const solarnoon = data.data.results.solar_noon;
                const daylength = data.data.results.day_length;

                // Modifier le DOM
                document.getElementById('sunrise').innerHTML = `Lever du soleil : ${sunrise}(+1)`;
                document.getElementById('sunset').innerHTML = `Coucher du soleil : ${sunset} (+1)`;
                document.getElementById('solarnoon').innerHTML = `Midi solaire : ${solarnoon} (+1)`;
                document.getElementById('daylength').innerHTML = `Durée de la journée : ${daylength}`;

                var heures1 = sunrise.substring(0, 1);
                var minutes1 = sunrise.substring(2, 4);
                var secondes1 = sunrise.substring(5, 7);

                console.log(heures1);
                console.log(minutes1);
                console.log(secondes1);

                const heure1 = heures1 * 30;
                const minute1 = minutes1 * 6;
                const seconde1 = secondes1 * 6;

                document.querySelector('.heure').style.transform = `rotate(${heure1}deg)`;
                document.querySelector('.minute').style.transform = `rotate(${minute1}deg)`;
                document.querySelector('.seconde').style.transform = `rotate(${seconde1}deg)`;

            })
            .catch(console.error);
    }
    if (city === "Moscou") {
        axios
            .get(`https://api.breezometer.com/weather/v1/current-conditions?lat=55.755871&lon=37.617680&key=641f82b214e14a6fb39bf36a33bbcdb6`)
            .then((data) => {

                // Récupère la donnée d'une API
                const windSpeed = data.data.data.wind.speed.value;
                const pressure = data.data.data.pressure.value;
                const humidity = data.data.data.relative_humidity;

                // Modifier le DOM
                document.getElementById('vitesse-vent').innerHTML = `${windSpeed} km/h`;
                document.getElementById('pressure').innerHTML = `${pressure} mb`;
                document.getElementById('humidity').innerHTML = `${humidity} %`;
            })
            .catch(console.error);

        axios
            .get(`https://api.sunrise-sunset.org/json?lat=55.755871&lng=37.617680&date=today`)
            .then((data) => {

                // Récupère la donnée d'une API
                const sunrise = data.data.results.sunrise;
                const sunset = data.data.results.sunset;
                const solarnoon = data.data.results.solar_noon;
                const daylength = data.data.results.day_length;

                // Modifier le DOM
                document.getElementById('sunrise').innerHTML = `Lever du soleil : ${sunrise} (+3)`;
                document.getElementById('sunset').innerHTML = `Coucher du soleil : ${sunset} (+3)`;
                document.getElementById('solarnoon').innerHTML = `Midi solaire : ${solarnoon} (+3)`;
                document.getElementById('daylength').innerHTML = `Durée de la journée : ${daylength}`;

                var heures1 = sunrise.substring(0, 1);
                var minutes1 = sunrise.substring(2, 4);
                var secondes1 = sunrise.substring(5, 7);

                console.log(heures1);
                console.log(minutes1);
                console.log(secondes1);

                const heure1 = heures1 * 30;
                const minute1 = minutes1 * 6;
                const seconde1 = secondes1 * 6;

                document.querySelector('.heure').style.transform = `rotate(${heure1}deg)`;
                document.querySelector('.minute').style.transform = `rotate(${minute1}deg)`;
                document.querySelector('.seconde').style.transform = `rotate(${seconde1}deg)`;

            })
            .catch(console.error);
    }
    if (city === "Berlin") {
        axios
            .get(`https://api.breezometer.com/weather/v1/current-conditions?lat=52.5170365&lon=13.3888599&key=641f82b214e14a6fb39bf36a33bbcdb6`)
            .then((data) => {

                // Récupère la donnée d'une API
                const windSpeed = data.data.data.wind.speed.value;
                const pressure = data.data.data.pressure.value;
                const humidity = data.data.data.relative_humidity;


                // Modifier le DOM
                document.getElementById('vitesse-vent').innerHTML = `${windSpeed} km/h`;
                document.getElementById('pressure').innerHTML = `${pressure} mb`;
                document.getElementById('humidity').innerHTML = `${humidity} %`;
            })
            .catch(console.error);

        axios
            .get(`https://api.sunrise-sunset.org/json?lat=52.5170365&lng=13.3888599&date=today`)
            .then((data) => {

                // Récupère la donnée d'une API
                const sunrise = data.data.results.sunrise;
                const sunset = data.data.results.sunset;
                const solarnoon = data.data.results.solar_noon;
                const daylength = data.data.results.day_length;

                // Modifier le DOM
                document.getElementById('sunrise').innerHTML = `Lever du soleil : ${sunrise} (+1)`;
                document.getElementById('sunset').innerHTML = `Coucher du soleil : ${sunset} (+1)`;
                document.getElementById('solarnoon').innerHTML = `Midi solaire : ${solarnoon} (+1)`;
                document.getElementById('daylength').innerHTML = `Durée de la journée : ${daylength}`;

                var heures1 = sunrise.substring(0, 1);
                var minutes1 = sunrise.substring(2, 4);
                var secondes1 = sunrise.substring(5, 7);

                console.log(heures1);
                console.log(minutes1);
                console.log(secondes1);

                const heure1 = heures1 * 30;
                const minute1 = minutes1 * 6;
                const seconde1 = secondes1 * 6;

                document.querySelector('.heure').style.transform = `rotate(${heure1}deg)`;
                document.querySelector('.minute').style.transform = `rotate(${minute1}deg)`;
                document.querySelector('.seconde').style.transform = `rotate(${seconde1}deg)`;
            })
            .catch(console.error);
    }
    if (city === "Rome") {
        axios
            .get(`https://api.breezometer.com/weather/v1/current-conditions?lat=41.8933203&lon=12.4829321&key=641f82b214e14a6fb39bf36a33bbcdb6`)
            .then((data) => {

                // Récupère la donnée d'une API
                const windSpeed = data.data.data.wind.speed.value;
                const pressure = data.data.data.pressure.value;
                const humidity = data.data.data.relative_humidity;

                // Modifier le DOM
                document.getElementById('vitesse-vent').innerHTML = `${windSpeed} km/h`;
                document.getElementById('pressure').innerHTML = `${pressure} mb`;
                document.getElementById('humidity').innerHTML = `${humidity} %`;
            })
            .catch(console.error);

        axios
            .get(`https://api.sunrise-sunset.org/json?lat=41.8933203&lng=12.4829321&date=today`)
            .then((data) => {

                // Récupère la donnée d'une API
                const sunrise = data.data.results.sunrise;
                const sunset = data.data.results.sunset;
                const solarnoon = data.data.results.solar_noon;
                const daylength = data.data.results.day_length;

                // Modifier le DOM
                document.getElementById('sunrise').innerHTML = `Lever du soleil : ${sunrise} (+1)`;
                document.getElementById('sunset').innerHTML = `Coucher du soleil : ${sunset} (+1)`;
                document.getElementById('solarnoon').innerHTML = `Midi solaire : ${solarnoon} (+1)`;
                document.getElementById('daylength').innerHTML = `Durée de la journée : ${daylength}`;

                var heures1 = sunrise.substring(0, 1);
                var minutes1 = sunrise.substring(2, 4);
                var secondes1 = sunrise.substring(5, 7);

                console.log(heures1);
                console.log(minutes1);
                console.log(secondes1);

                const heure1 = heures1 * 30;
                const minute1 = minutes1 * 6;
                const seconde1 = secondes1 * 6;

                document.querySelector('.heure').style.transform = `rotate(${heure1}deg)`;
                document.querySelector('.minute').style.transform = `rotate(${minute1}deg)`;
                document.querySelector('.seconde').style.transform = `rotate(${seconde1}deg)`;
            })
            .catch(console.error);
    }
    if (city === "Lisbonne") {
        axios
            .get(`https://api.breezometer.com/weather/v1/current-conditions?lat=38.7077507&lon=-9.1365919&key=641f82b214e14a6fb39bf36a33bbcdb6`)
            .then((data) => {
                
                // Récupère la donnée d'une API
                const windSpeed = data.data.data.wind.speed.value;
                const pressure = data.data.data.pressure.value;
                const humidity = data.data.data.relative_humidity;


                // Modifier le DOM
                document.getElementById('vitesse-vent').innerHTML = `${windSpeed} km/h`;
                document.getElementById('pressure').innerHTML = `${pressure} mb`;
                document.getElementById('humidity').innerHTML = `${humidity} %`;
            })
            .catch(console.error);

        axios
            .get(`https://api.sunrise-sunset.org/json?lat=38.7077507&lon=-9.1365919&date=today`)
            .then((data) => {

                // Récupère la donnée d'une API
                const sunrise = data.data.results.sunrise;
                const sunset = data.data.results.sunset;
                const solarnoon = data.data.results.solar_noon;
                const daylength = data.data.results.day_length;

                // Modifier le DOM
                document.getElementById('sunrise').innerHTML = `Lever du soleil : ${sunrise} (+0)`;
                document.getElementById('sunset').innerHTML = `Coucher du soleil : ${sunset} (+0)`;
                document.getElementById('solarnoon').innerHTML = `Midi solaire : ${solarnoon} (+0)`;
                document.getElementById('daylength').innerHTML = `Durée de la journée : ${daylength}`;

                var heures1 = sunrise.substring(0, 1);
                var minutes1 = sunrise.substring(2, 4);
                var secondes1 = sunrise.substring(5, 7);

                console.log(heures1);
                console.log(minutes1);
                console.log(secondes1);

                const heure1 = heures1 * 30;
                const minute1 = minutes1 * 6;
                const seconde1 = secondes1 * 6;

                document.querySelector('.heure').style.transform = `rotate(${heure1}deg)`;
                document.querySelector('.minute').style.transform = `rotate(${minute1}deg)`;
                document.querySelector('.seconde').style.transform = `rotate(${seconde1}deg)`;
            })
            .catch(console.error);
    }
    if (city === "Montréal") {
        axios
            .get(`https://api.breezometer.com/weather/v1/current-conditions?lat=45.5031824&lon=-73.5698065&key=641f82b214e14a6fb39bf36a33bbcdb6`)
            .then((data) => {
                
                // Récupère la donnée d'une API
                const windSpeed = data.data.data.wind.speed.value;
                const pressure = data.data.data.pressure.value;
                const humidity = data.data.data.relative_humidity;


                // Modifier le DOM
                document.getElementById('vitesse-vent').innerHTML = `${windSpeed} km/h`;
                document.getElementById('pressure').innerHTML = `${pressure} mb`;
                document.getElementById('humidity').innerHTML = `${humidity} %`;
            })
            .catch(console.error);

        axios
            .get(`https://api.sunrise-sunset.org/json?lat=45.5031824&lon=-73.5698065&date=today`)
            .then((data) => {

                // Récupère la donnée d'une API
                const sunrise = data.data.results.sunrise;
                const sunset = data.data.results.sunset;
                const solarnoon = data.data.results.solar_noon;
                const daylength = data.data.results.day_length;

                // Modifier le DOM
                document.getElementById('sunrise').innerHTML = `Lever du soleil : ${sunrise} (-5)`;
                document.getElementById('sunset').innerHTML = `Coucher du soleil : ${sunset} (-5)`;
                document.getElementById('solarnoon').innerHTML = `Midi solaire : ${solarnoon} (-5)`;
                document.getElementById('daylength').innerHTML = `Durée de la journée : ${daylength}`;

                var heures1 = sunrise.substring(0, 1);
                var minutes1 = sunrise.substring(2, 4);
                var secondes1 = sunrise.substring(5, 7);

                console.log(heures1);
                console.log(minutes1);
                console.log(secondes1);

                const heure1 = heures1 * 30;
                const minute1 = minutes1 * 6;
                const seconde1 = secondes1 * 6;

                document.querySelector('.heure').style.transform = `rotate(${heure1}deg)`;
                document.querySelector('.minute').style.transform = `rotate(${minute1}deg)`;
                document.querySelector('.seconde').style.transform = `rotate(${seconde1}deg)`;
            })
            .catch(console.error);
    }
    if (city === "Los Angeles") {
        axios
            .get(`https://api.breezometer.com/weather/v1/current-conditions?lat=34.0536909&lon=-118.242766&key=641f82b214e14a6fb39bf36a33bbcdb6`)
            .then((data) => {
                
                // Récupère la donnée d'une API
                const windSpeed = data.data.data.wind.speed.value;
                const pressure = data.data.data.pressure.value;
                const humidity = data.data.data.relative_humidity;


                // Modifier le DOM
                document.getElementById('vitesse-vent').innerHTML = `${windSpeed} km/h`;
                document.getElementById('pressure').innerHTML = `${pressure} mb`;
                document.getElementById('humidity').innerHTML = `${humidity} %`;
            })
            .catch(console.error);

        axios
            .get(`https://api.sunrise-sunset.org/json?lat=34.0536909&lon=-118.242766&date=today`)
            .then((data) => {

                // Récupère la donnée d'une API
                const sunrise = data.data.results.sunrise;
                const sunset = data.data.results.sunset;
                const solarnoon = data.data.results.solar_noon;
                const daylength = data.data.results.day_length;

                // Modifier le DOM
                document.getElementById('sunrise').innerHTML = `Lever du soleil : ${sunrise} (-8)`;
                document.getElementById('sunset').innerHTML = `Coucher du soleil : ${sunset} (-8)`;
                document.getElementById('solarnoon').innerHTML = `Midi solaire : ${solarnoon} (-8)`;
                document.getElementById('daylength').innerHTML = `Durée de la journée : ${daylength}`;

                var heures1 = sunrise.substring(0, 1);
                var minutes1 = sunrise.substring(2, 4);
                var secondes1 = sunrise.substring(5, 7);

                console.log(heures1);
                console.log(minutes1);
                console.log(secondes1);

                const heure1 = heures1 * 30;
                const minute1 = minutes1 * 6;
                const seconde1 = secondes1 * 6;

                document.querySelector('.heure').style.transform = `rotate(${heure1}deg)`;
                document.querySelector('.minute').style.transform = `rotate(${minute1}deg)`;
                document.querySelector('.seconde').style.transform = `rotate(${seconde1}deg)`;
            })
            .catch(console.error);
    }
    if (city === "Sao Paulo") {
        axios
            .get(`https://api.breezometer.com/weather/v1/current-conditions?lat=-23.5506507&lon=-46.6333824&key=641f82b214e14a6fb39bf36a33bbcdb6`)
            .then((data) => {
                
                // Récupère la donnée d'une API
                const windSpeed = data.data.data.wind.speed.value;
                const pressure = data.data.data.pressure.value;
                const humidity = data.data.data.relative_humidity;


                // Modifier le DOM
                document.getElementById('vitesse-vent').innerHTML = `${windSpeed} km/h`;
                document.getElementById('pressure').innerHTML = `${pressure} mb`;
                document.getElementById('humidity').innerHTML = `${humidity} %`;
            })
            .catch(console.error);

        axios
            .get(`https://api.sunrise-sunset.org/json?lat=-23.5506507&lon=-46.6333824&date=today`)
            .then((data) => {

                // Récupère la donnée d'une API
                const sunrise = data.data.results.sunrise;
                const sunset = data.data.results.sunset;
                const solarnoon = data.data.results.solar_noon;
                const daylength = data.data.results.day_length;

                // Modifier le DOM
                document.getElementById('sunrise').innerHTML = `Lever du soleil : ${sunrise} (-3)`;
                document.getElementById('sunset').innerHTML = `Coucher du soleil : ${sunset} (-3)`;
                document.getElementById('solarnoon').innerHTML = `Midi solaire : ${solarnoon} (-3)`;
                document.getElementById('daylength').innerHTML = `Durée de la journée : ${daylength}`;

                var heures1 = sunrise.substring(0, 1);
                var minutes1 = sunrise.substring(2, 4);
                var secondes1 = sunrise.substring(5, 7);

                console.log(heures1);
                console.log(minutes1);
                console.log(secondes1);

                const heure1 = heures1 * 30;
                const minute1 = minutes1 * 6;
                const seconde1 = secondes1 * 6;

                document.querySelector('.heure').style.transform = `rotate(${heure1}deg)`;
                document.querySelector('.minute').style.transform = `rotate(${minute1}deg)`;
                document.querySelector('.seconde').style.transform = `rotate(${seconde1}deg)`;
            })
            .catch(console.error);
    }
    if (city === "Jakarta") {
        axios
            .get(`https://api.breezometer.com/weather/v1/current-conditions?lat=-6.1753942&lon=106.827183&key=641f82b214e14a6fb39bf36a33bbcdb6`)
            .then((data) => {
                
                // Récupère la donnée d'une API
                const windSpeed = data.data.data.wind.speed.value;
                const pressure = data.data.data.pressure.value;
                const humidity = data.data.data.relative_humidity;


                // Modifier le DOM
                document.getElementById('vitesse-vent').innerHTML = `${windSpeed} km/h`;
                document.getElementById('pressure').innerHTML = `${pressure} mb`;
                document.getElementById('humidity').innerHTML = `${humidity} %`;
            })
            .catch(console.error);

        axios
            .get(`https://api.sunrise-sunset.org/json?lat=-6.1753942&lon=106.827183&date=today`)
            .then((data) => {

                // Récupère la donnée d'une API
                const sunrise = data.data.results.sunrise;
                const sunset = data.data.results.sunset;
                const solarnoon = data.data.results.solar_noon;
                const daylength = data.data.results.day_length;

                // Modifier le DOM
                document.getElementById('sunrise').innerHTML = `Lever du soleil : ${sunrise} (+7)`;
                document.getElementById('sunset').innerHTML = `Coucher du soleil : ${sunset} (+7)`;
                document.getElementById('solarnoon').innerHTML = `Midi solaire : ${solarnoon} (+7)`;
                document.getElementById('daylength').innerHTML = `Durée de la journée : ${daylength}`;

                var heures1 = sunrise.substring(0, 1);
                var minutes1 = sunrise.substring(2, 4);
                var secondes1 = sunrise.substring(5, 7);

                console.log(heures1);
                console.log(minutes1);
                console.log(secondes1);

                const heure1 = heures1 * 30;
                const minute1 = minutes1 * 6;
                const seconde1 = secondes1 * 6;

                document.querySelector('.heure').style.transform = `rotate(${heure1}deg)`;
                document.querySelector('.minute').style.transform = `rotate(${minute1}deg)`;
                document.querySelector('.seconde').style.transform = `rotate(${seconde1}deg)`;
            })
            .catch(console.error);
    }
    if (city === "Le Caire") {
        axios
            .get(`https://api.breezometer.com/weather/v1/current-conditions?lat=30.0443879&lon=31.2357257&key=641f82b214e14a6fb39bf36a33bbcdb6`)
            .then((data) => {
                
                // Récupère la donnée d'une API
                const windSpeed = data.data.data.wind.speed.value;
                const pressure = data.data.data.pressure.value;
                const humidity = data.data.data.relative_humidity;


                // Modifier le DOM
                document.getElementById('vitesse-vent').innerHTML = `${windSpeed} km/h`;
                document.getElementById('pressure').innerHTML = `${pressure} mb`;
                document.getElementById('humidity').innerHTML = `${humidity} %`;
            })
            .catch(console.error);

        axios
            .get(`https://api.sunrise-sunset.org/json?lat=30.0443879&lon=31.2357257&date=today`)
            .then((data) => {

                // Récupère la donnée d'une API
                const sunrise = data.data.results.sunrise;
                const sunset = data.data.results.sunset;
                const solarnoon = data.data.results.solar_noon;
                const daylength = data.data.results.day_length;

                // Modifier le DOM
                document.getElementById('sunrise').innerHTML = `Lever du soleil : ${sunrise} (+2)`;
                document.getElementById('sunset').innerHTML = `Coucher du soleil : ${sunset} (+2)`;
                document.getElementById('solarnoon').innerHTML = `Midi solaire : ${solarnoon} (+2)`;
                document.getElementById('daylength').innerHTML = `Durée de la journée : ${daylength}`;

                var heures1 = sunrise.substring(0, 1);
                var minutes1 = sunrise.substring(2, 4);
                var secondes1 = sunrise.substring(5, 7);

                console.log(heures1);
                console.log(minutes1);
                console.log(secondes1);

                const heure1 = heures1 * 30;
                const minute1 = minutes1 * 6;
                const seconde1 = secondes1 * 6;

                document.querySelector('.heure').style.transform = `rotate(${heure1}deg)`;
                document.querySelector('.minute').style.transform = `rotate(${minute1}deg)`;
                document.querySelector('.seconde').style.transform = `rotate(${seconde1}deg)`;
            })
            .catch(console.error);
    }
    if (city === "Malmo") {
        axios
            .get(`https://api.breezometer.com/weather/v1/current-conditions?lat=55.6052931&lon=13.0001566&key=641f82b214e14a6fb39bf36a33bbcdb6`)
            .then((data) => {
                // Récupère la donnée d'une API
                const windSpeed = data.data.data.wind.speed.value;
                const pressure = data.data.data.pressure.value;
                const humidity = data.data.data.relative_humidity;


                // Modifier le DOM
                document.getElementById('vitesse-vent').innerHTML = `${windSpeed} km/h`;
                document.getElementById('pressure').innerHTML = `${pressure} mb`;
                document.getElementById('humidity').innerHTML = `${humidity} %`;
            })
            .catch(console.error);

        axios
            .get(`https://api.sunrise-sunset.org/json?lat=55.6052931&lon=13.0001566&date=today`)
            .then((data) => {

                // Récupère la donnée d'une API
                const sunrise = data.data.results.sunrise;
                const sunset = data.data.results.sunset;
                const solarnoon = data.data.results.solar_noon;
                const daylength = data.data.results.day_length;

                // Modifier le DOM
                document.getElementById('sunrise').innerHTML = `Lever du soleil : ${sunrise} (+1)`;
                document.getElementById('sunset').innerHTML = `Coucher du soleil : ${sunset} (+1)`;
                document.getElementById('solarnoon').innerHTML = `Midi solaire : ${solarnoon} (+1)`;
                document.getElementById('daylength').innerHTML = `Durée de la journée : ${daylength} (+1)`;

                var heures1 = sunrise.substring(0, 1);
                var minutes1 = sunrise.substring(2, 4);
                var secondes1 = sunrise.substring(5, 7);

                console.log(heures1);
                console.log(minutes1);
                console.log(secondes1);

                const heure1 = heures1 * 30;
                const minute1 = minutes1 * 6;
                const seconde1 = secondes1 * 6;

                document.querySelector('.heure').style.transform = `rotate(${heure1}deg)`;
                document.querySelector('.minute').style.transform = `rotate(${minute1}deg)`;
                document.querySelector('.seconde').style.transform = `rotate(${seconde1}deg)`;
            })
            .catch(console.error);
    }
}; 
export {callAPI2};