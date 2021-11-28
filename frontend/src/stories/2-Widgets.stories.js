import React from 'react';
import Widget from '../widgets/Widget.js';

export default {
    title: 'Widgets',
  };

export const meteo = () => <Widget type="Météo"/> ;

export const suggest = () => <Widget type="Suggestion"/>;