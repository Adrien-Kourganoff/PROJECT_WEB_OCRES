import {storiesOf}  from '@storybook/react'
import PropTypes from 'prop-types';
import Accueil from './Accueil';



export default{

    title: 'Acceuil',
    component: Accueil,
    argTypes:{
        color :{control : 'text'}
    }
}

 const acc = args => <Accueil {...args}/> 
 export const acceuil = acc.bind({})
 acceuil.args={
     color : 'purple',
     label :'accueil'
 }