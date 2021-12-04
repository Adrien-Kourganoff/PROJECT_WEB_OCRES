import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BoxAPICreated from './components/BoxAPICreated';

const Admin = () => {

    const callAPICreate = () => {
        axios
            .get('http://localhost:3001/index')
            .then((data) => {

                const tempHaute = data.data[0].tempHaute;
                const lieuTempHaute = data.data[0].lieuTempHaute;
                const anneeTempHaute = data.data[0].anneeTempHaute;

                const tempBasse = data.data[0].tempBasse;
                const lieuTempBasse = data.data[0].lieuTempBasse;
                const anneeTempBasse = data.data[0].anneeTempBasse;

                console.log(tempHaute);
                console.log(lieuTempHaute);

                document.getElementById('tempH').innerHTML = `Température la plus haute : ${tempHaute}°C`;
                document.getElementById('lieuTempH').innerHTML = `Lieu : ${lieuTempHaute}`
                document.getElementById('anneeTempH').innerHTML = `Année : ${anneeTempHaute}`;

                document.getElementById('tempB').innerHTML = `Température la plus basse : ${tempBasse}°C`;
                document.getElementById('lieuTempB').innerHTML = `Lieu : ${lieuTempBasse}`;
                document.getElementById('anneeTempB').innerHTML = `Année : ${anneeTempBasse}`;
            })
            .catch(console.error);
    }

    return (
        callAPICreate(),
        <div>
            <div>
                <h1>Modification de l'API créée</h1>
            </div>
            <div>
                <h3>Voici l'API que vous avez créée</h3>
                <BoxAPICreated />
            </div>
            <center>
                <div>
                    <form className='form' id='myForm'>
                        <label for='tH'>Température Haute</label>
                        <label for='lieuTH'>Température Haute</label>
                        <label for='anneeTH'>Température Haute</label>

                        <label for='tB'>Température Haute</label>
                        <label for='lieuTB'>Température Haute</label>
                        <label for='anneeTB'>Température Haute</label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </center>
            <div>
                <Link to="/map">
                    Pour retourner sur la page d'affichage des API, cliquer ici
                </Link>
            </div>
        </div>
    )
};

export default Admin;
