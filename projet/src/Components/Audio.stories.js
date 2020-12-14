import {storiesOf}  from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Audio from './Audio';



export default{

    title: 'Audio',
    component: Audio,
    argTypes:{
        variantcolor :{control : 'text'}
    }
}

 const aud = args => <Audio {...args}/> 
 export const audio = aud.bind({})
 audio.args={
     variantcolor : 'purple',
     label :'audio'
 }