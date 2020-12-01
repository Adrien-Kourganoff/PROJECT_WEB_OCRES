import {storiesOf}  from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Audio from './Audio';



export default{

    title: 'Acceuil',
    component: Audio,
    argTypes:{
        variantcolor :{control : 'text'}
    }
}

 const aud = args => <Audio {...args}/> 
 export const acceuil = aud.bind({})
 acceuil.args={
     variantcolor : 'purple',
     label :'audio'
 }