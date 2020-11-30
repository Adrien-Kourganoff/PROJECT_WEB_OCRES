import {storiesOf}  from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Audio from './Audio';

storiesOf("Audio, module").add("Audio", ()=>
(
    <Audio/>
)
);