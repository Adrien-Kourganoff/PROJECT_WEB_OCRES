import {storiesOf}  from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Quote from './Quote';


export default{

    title: 'Quote',
    component: SideBar,
    argTypes:{
        variantcolor :{control : 'text'}
    }
}

 const quot = args => <SideBar {...args}/> 
 export const quote = quot.bind({})
 quote.args={
     variantcolor : 'purple',
     label :'accueil'
 }