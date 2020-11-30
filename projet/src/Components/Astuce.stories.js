import {storiesOf}  from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Astuce from './Astuce';



export default{

    title: 'Astuce',
    component: Astuce,
    argTypes:{
        variantcolor :{control : 'text'},
        onClick : {action : 'clicked'}
    }
}

 const ast = args => <Astuce {...args}/> 
 export const acceuil = ast.bind({})
 acceuil.args={
     variantcolor : 'purple',
     label :'astuce'
 }