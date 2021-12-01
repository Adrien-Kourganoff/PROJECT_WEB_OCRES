import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserAppointment from '../../components/DashboardComponents/UserAppointment/UserAppointment';

export default function Appointment() {
   
    return (
        <div>
            <UserAppointment/>
        </div>
    )
}
