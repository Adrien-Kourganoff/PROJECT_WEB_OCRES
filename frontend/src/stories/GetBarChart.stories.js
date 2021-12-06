
import React from 'react';
import { storiesOf } from '@storybook/react';
import Getchart from '../components/Getchart';
import GetBarChart from '../components/GetBarChart';
import Getweather from '../components/Getweather';
import GetAdress from '../components/Getaddress';
import Getmyapi from '../components/Getmyapi';
import Map from '../components/map.js';

storiesOf('GetBarChart', module)
.add('display', () => <GetBarChart />);

storiesOf('Getmyapi', module)
.add('display', () => <Getmyapi/>);

storiesOf('GetAdress', module)
.add('display', () => <GetAdress/>);


storiesOf('Map', module)
.add('display', () => <Map/>);


storiesOf('Getweather', module)
.add('display', () => <Getweather />);

storiesOf('Getchart', module)
.add('display', () => <Getchart />);