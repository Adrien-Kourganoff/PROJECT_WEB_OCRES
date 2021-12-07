import axios from "axios";

const callAPI3 = () => {
    axios
        .get(`http://api.icndb.com/jokes/random?exclude=[nerdy,explicit]`)
        .then((data) => {

            // Récupère la donnée d'une API
            const joke = data.data.value.joke;

            // Modifier le DOM
            document.getElementById('joke').innerHTML = joke;
        })
        .catch(console.error);
}
export {callAPI3};