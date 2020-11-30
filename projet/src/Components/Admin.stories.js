import {storiesOf}  from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Admin from './Admin';



export default{

    title: 'Admin',
    component: Admin,
    argTypes:{
        variantcolor :{control : 'text'}
    }
}

 const adm= args => <Accueil {...args}/> 
 export const admin = adm.bind({})
 admin.args={
     variantcolor : 'purple',
     label :'accueil'
 }