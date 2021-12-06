
import React from 'react';
import { storiesOf } from '@storybook/react';
import Getchart from '../components/Getchart';
import GetBarChart from '../components/GetBarChart';
import Getweather from '../components/Getweather';
import GetAdress from '../components/Getaddress';
import Getmyapi from '../components/Getmyapi';

storiesOf('GetBarChart', module)
.add('with primary', () => <GetBarChart />);

storiesOf('Getmyapi', module)
.add('with primary', () => <Getmyapi/>);

storiesOf('GetAdress', module)
.add('with primary', () => <GetAdress/>);


storiesOf('Getweather', module)
.add('with primary', () => <Getweather />);

storiesOf('Getchart', module)
.add('with primary', () => <Getchart />);