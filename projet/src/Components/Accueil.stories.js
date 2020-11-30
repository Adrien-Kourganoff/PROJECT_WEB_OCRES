import {storiesOf}  from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Accueil from './Accueil';

storiesOf("Accueil, module").add("Accueil", ()=>
(
    <Accueil/>
)
);