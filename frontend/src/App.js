import React from 'react';
import logo from './logo.svg';
import './App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Getchart from './components/Getchart.js'; // apache echarts.js test
import Myapi from './components/Getmyapi.js'; // apache echarts.js test
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Getweather from './components/Getweather.js'; // * openweathermap.org test
import Getaddress from './components/Getaddress.js'; // api.addresse.data.gouv.fr test
import App2 from './Admin/App2.js';
import GetBarChart from './components/GetBarChart.js'; // apache echarts.js test
import Map from './components/map.js'; // maplibre-gl

import { Route, Routes, Link } from 'react-router-dom';

//import 'react-bootstrap/dist/react-bootstrap.min.js';


function Home() {
  return (
    <div>
      <h3>Bonjour</h3>
    </div>
  );
}



function Viz() {
  return (
    <div className="container">
      <Getaddress />
      <Getweather />
      
  </div>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
      <Link to="/"> <li>Home</li> </Link>
      <Link to="/back"><li>Back</li></Link>
      <Link to="/map"><li>Map</li></Link>
     </ul>
    </nav>
  )
}
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(15),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return(
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/back" element= {<App2/>} />
        <Route path="/map" element= {<Map />} />
      </Routes>
      

   <Box sx={{ flexGrow:1}} >
      <Grid container spacing={3} ml={3} mb={5}>
      <Grid item xs={12}> </Grid>
      <Grid item xs={12}> </Grid>

        <Grid item md={6} xs={12}>
          <Item><GetBarChart/></Item>
        </Grid>
        <Grid item md={6} xs={12}>
          <Item><Getchart/></Item>
        </Grid>


        <Grid item md={6} xs={12}>
          <Item><Myapi/></Item>
        </Grid>
         <Grid item md={5} xs={12}>
          <Item><Getaddress/></Item>
        </Grid>


        <Grid item md={6} xs={12}>
          <Item><Getweather/> </Item>
        </Grid>
       

      </Grid>
    </Box>

     </div>
  );
}

export default App;

