import React from 'react';
import { Quote } from './Quote';

// This default export determines where your story goes in the story list
export default {
  title: 'Quote',
  component: Quote,
};

const Template = (args) => <Quote {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};