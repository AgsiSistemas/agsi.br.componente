import React from "react";
import CustomComboListModal from "../../components/CustomComboListModal/CustomComboListModal.js";
import { Conteiner, ConteinerItem } from "../../components/Conteiner/Conteiner.js";
import CustomTextField from "../../components/Inputs/CustomTextField/CustomTextField.js";
import { Typography } from "@mui/material";



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

const ModalContent = () => {
  return (
    <Conteiner>
      {/* <Typography>asd</Typography> */}
      <ConteinerItem>
        <CustomTextField label='name' />
      </ConteinerItem>
    </Conteiner>
  )
}

//👇 Each story then reuses that template
export const DefaultComboList = TemplateCustomInputSelectComboList.bind({});

DefaultComboList.args = {

  title: 'Limite de utilização',
  // getRecordsTable: (value) => console.log(value),
  // childrenModal: <ModalContent />
};
