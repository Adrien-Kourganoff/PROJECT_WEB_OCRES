import {storiesOf}  from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Quote from './Quote';

storiesOf("Quote, module").add("Quote", ()=>
(
    <Quote/>
)
);