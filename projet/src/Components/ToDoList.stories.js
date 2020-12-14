import {storiesOf}  from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import ToDoList from './ToDoList';


export default{

    title: 'ToDoList',
    component: ToDoList,
    argTypes:{
        variantcolor :{control : 'text'}
    }
}

 const tdl = args => <ToDoList {...args}/> 
 export const todolist = tdl.bind({})
 todolist.args={
     variantcolor : 'purple',
     label :'accueil'
 }