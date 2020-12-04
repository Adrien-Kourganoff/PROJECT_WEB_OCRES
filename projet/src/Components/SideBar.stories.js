import {storiesOf}  from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import SideBar from './SideBar';



export default{

    title: 'SideBar',
    component: SideBar,
    argTypes:{
        variantcolor :{control : 'text'}
    }
}

 const sb = args => <SideBar {...args}/> 
 export const sidebar = sb.bind({})
 sidebar.args={
     variantcolor : 'purple',
     label :'accueil'
 }