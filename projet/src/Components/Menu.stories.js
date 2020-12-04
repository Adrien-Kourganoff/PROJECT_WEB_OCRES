import {storiesOf}  from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Menu from './Menu';



export default{

    title: 'Menu',
    component: Menu,
    argTypes:{
        variantcolor :{control : 'text'}
    }
}

 const men = args => <Menu {...args}/> 
 export const menu = men.bind({})
 menu.args={
     variantcolor : 'purple',
     label :'accueil'
 }