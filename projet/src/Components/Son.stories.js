import {storiesOf}  from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Son from './Son';


export default{

    title: 'Son',
    component: Son,
    argTypes:{
        variantcolor :{control : 'text'}
    }
}

 const so = args => <Son {...args}/> 
 export const son = so.bind({})
 son.args={
     variantcolor : 'purple',
     label :'accueil'
 }