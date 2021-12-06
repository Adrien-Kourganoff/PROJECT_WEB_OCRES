import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BoxAPICreated from './components/BoxAPICreated';
import { useState } from 'react';

function Admin() {

    const [id, setId] = useState('');

    const handleInputDelete = () => {
        console.log(id);
        axios
            .delete(`http://localhost:3001/index/${id}`)
            .catch(console.error);
    };
    const handleInputAdd = () => {
        axios
            .post(`http://localhost:3001/index`)
            .catch(console.error);
    };
    var callAPICreate = () => {
        axios
            .get('http://localhost:3001/index')
            .then((data) => {
                for (let i = 0; i < 5; i++) {

                    const id = data.data[i]._id;
                    const tempHaute = data.data[i].tempHaute;
                    const lieuTempHaute = data.data[i].lieuTempHaute;
                    const anneeTempHaute = data.data[i].anneeTempHaute;

                    const tempBasse = data.data[i].tempBasse;
                    const lieuTempBasse = data.data[i].lieuTempBasse;
                    const anneeTempBasse = data.data[i].anneeTempBasse;

                    document.getElementById('id'+ i).innerHTML = `Id : ${id}`;
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


    /*var putAPIDATA = () => {
        axios
            .put(`http://localhost:3001/index`)
            .catch(console.error);
    }*/

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
                    <input placeholder='id' onChange={e => setId(e.target.value)} />
                    <button onClick={() => handleInputDelete()}>Delete</button>
                </div>
                <div>
                    <input onChange={e => setId(e.target.value)} />
                    <button onClick={() => handleInputAdd()}>Add</button>
                </div>
            </center>
            <div>
                <Link to="/map">
                    Pour retourner sur la page d'affichage des API, cliquer ici
                </Link>
            </div>
        </div>
    );
}

export default Admin;