import {storiesOf}  from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import ToDoList from './ToDoList';

storiesOf("ToDoList, module").add("ToDoList", ()=>
(
    <ToDoList/>
)
);