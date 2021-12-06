import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BoxAPICreated from './components/BoxAPICreated';

const Admin = () => {

    var deleteAPIDATA = () => {
        axios
            .delete('http://localhost:3001/index/${id}')
            .catch(console.error);
      }

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
        deleteAPIDATA(),
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
                    <div>
                        <label htmlFor="name">Nom de l'element à rajouter dans l'API</label>
                        <div>
                            <input type="text" id="name" name="name" required
                                minLength="4" maxLength="8" size="10">
                            </input>
                            <button>Submit</button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name">Nom de l'element à enlever de l'API</label>
                        <div>
                            <input type="text" id="name" name="name" required
                                minLength="4" maxLength="8" size="10">
                            </input>
                            <button>Submit</button>
                        </div>
                    </div>
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
