import Test from "./Test.js"
import React from "react";

export default {
    title:"TestleS",
    component: Test,
};
// We create a “template” of how args map to rendering

const Template = (args) => <Test {...args} />;

// Each story then reuses that template
export const TestleS = Template.bind({});

TestleS.args = {
  primary: true,
  label: 'TestleS',
};