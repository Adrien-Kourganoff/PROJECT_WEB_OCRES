import axios from "axios";
const callAPICreate = () => {
    axios
        .get('http://localhost:3001/index')
        .then((data) => {

            for (let i = 0; i < data.data.length; i++) {

                const idPost = data.data[i]._id;
                const tempHaute = data.data[i].tempHaute;
                const lieuTempHaute = data.data[i].lieuTempHaute;
                const anneeTempHaute = data.data[i].anneeTempHaute;

                const tempBasse = data.data[i].tempBasse;
                const lieuTempBasse = data.data[i].lieuTempBasse;
                const anneeTempBasse = data.data[i].anneeTempBasse;

                document.getElementById('id'+ i).innerHTML = `Id : ${idPost}`;
                document.getElementById('tempH'+ i).innerHTML = `Température la plus haute : ${tempHaute}°C`;
                document.getElementById('lieuTempH'+ i).innerHTML = `Lieu : ${lieuTempHaute}`
                document.getElementById('anneeTempH' + i).innerHTML = `Année : ${anneeTempHaute}`;

                document.getElementById('tempB' + i).innerHTML = `Température la plus basse : ${tempBasse}°C`;
                document.getElementById('lieuTempB' + i).innerHTML = `Lieu : ${lieuTempBasse}`;
                document.getElementById('anneeTempB' + i).innerHTML = `Année : ${anneeTempBasse}`;
            }
        })
        .catch(console.error);
}
export {callAPICreate};