import React from "react";
import CustomComboListModal from "../../components/CustomComboListModal/CustomComboListModal.js";



export default {
  title: 'CustomComboListModal',
  component: CustomComboListModal
}

//👇 We create a “template” of how args map to rendering
const TemplateCustomInputSelectComboList = (args) => {
  return (
    <CustomComboListModal {...args} />
  )
}

//👇 Each story then reuses that template
export const DefaultComboList = TemplateCustomInputSelectComboList.bind({});

DefaultComboList.args = {

  getRecordsTable: (value) => console.log(value)
};
