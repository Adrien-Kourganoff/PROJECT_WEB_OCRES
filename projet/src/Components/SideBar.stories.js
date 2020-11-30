import React from 'react';
import { SideBar } from './SideBar';

// This default export determines where your story goes in the story list
export default {
  title: 'SideBar',
  component: SideBar,
};

const Template = (args) => <SideBar {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    primary: true,
    label: 'Astuce',
};