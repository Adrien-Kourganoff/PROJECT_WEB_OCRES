import React from 'react'
import './Topbar.css'

const Topbar = () => {

    var today = new Date();
    const mois = ["Janvier" , "Fevrier" , "Mars" , "Avril" , "Mai" , "Juin" , "Juiller", "Aout" , "Septembre" , "Octobre" , "Novembre", "Decembre"]
    // const oui = 12
    return (
        <div className='Topbar'>

            <div className='Date'>
                Bonjour, aujourd'hui nous sommes le {today.getDate()} {mois[today.getMonth()]} {today.getFullYear()}
            </div>
        </div>
    )
}

export default Topbar