import {storiesOf}  from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Admin from './Admin';

storiesOf("Admin, module").add("Admin", ()=>
(
    <Admin/>
)
);