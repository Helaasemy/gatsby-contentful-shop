import React from 'react';

import Button from '../components/Button/Button';

export default {
  title: 'Example/Button',
  component: Button,

};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  outlined: false,
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  outlined: true,
  children: 'Button',
};
