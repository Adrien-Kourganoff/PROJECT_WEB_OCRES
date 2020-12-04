import {storiesOf}  from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Baton from './Baton';


export default{

    title: 'Baton',
    label:'Baton',
    component: Baton,
    argTypes:{
        backgroundColor :{control : 'text'}
    }
}

 const bat = args => <Baton data = {[
    {name: 'Lu', happiness: 3,  amt: 24},
    {name: 'Ma', happiness: 2,  amt: 22},
    {name: 'Me', happiness: 3,  amt: 22},
    {name: 'Je', happiness: 3,  amt: 20},
    {name: 'Ve', happiness: 4,  amt: 21},
    {name: 'Sa', happiness: 3,  amt: 25},
    {name: 'Di', happiness: 5,  amt: 21},
  ]}/> 
 export const baton = bat.bind({})
 baton.args={
    backgroundColor: 'purple',
     label :'accueil'
     
 }