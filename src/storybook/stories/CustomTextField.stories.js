import React from "react";

import CustomTextField from '../../components/Inputs/CustomTextField/CustomTextField.js'
import CustomInputSelect from '../../components/Inputs/CustomInputSelect/CustomInputSelect.js'


export default {
  title: 'CustomTextField',
  component: CustomTextField,

}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <CustomTextField {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'Nome',
};
