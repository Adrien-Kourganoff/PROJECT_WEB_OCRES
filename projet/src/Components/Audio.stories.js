import React from 'react';
import { Audio } from './Audio';

// This default export determines where your story goes in the story list
export default {
  title: 'Audio',
  component: Audio,
};

const Template = (args) => <Audio {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};