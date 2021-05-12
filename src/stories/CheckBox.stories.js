import React from 'react';

import CheckBox from '../components/Checkbox/Checkbox';

export default {
  title: 'CheckBox',
  component: CheckBox,

};

const Template = (args) => <CheckBox {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  label: 'Button',
};
