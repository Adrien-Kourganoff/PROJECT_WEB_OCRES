
import React from 'react';
import { Astuce } from './Astuce';

export default {
  title: 'Actuce',
  component: Astuce,
};

const Template = (args) => <Astuce {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  
};