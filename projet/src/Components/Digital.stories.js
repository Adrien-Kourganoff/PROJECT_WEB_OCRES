import {storiesOf}  from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Digital from './Digital';


export default{

    title: 'Digital',
    component: Digital,
    argTypes:{
        label :'accueil'
    }
}

 const dig = args => <Digital {...args}/> 
 export const digital = dig.bind({})
 digital.args={
    
     label :'accueil'
 }