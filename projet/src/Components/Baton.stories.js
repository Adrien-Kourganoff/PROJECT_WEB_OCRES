import React from 'react';
import { Baton} from './Baton';

// This default export determines where your story goes in the story list
export default {
  title: 'Baton',
  component: Baton,
};

const Template = (args) => <Baton {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};