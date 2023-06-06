import React, { useState } from "react";

import CustomSimpleModal from "../../components/Modal/CustomSimpleModal/CustomSimpleModal.js";
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';

export default {
  title: 'CustomSimpleModal',
  component: CustomSimpleModal,

}

// const [openModal, setOpenModal] = React.useState(true)
//👇 We create a “template” of how args map to rendering
const TemplateModal = (args) => {
  return (<>
    <CustomSimpleModal {...args}>
      asda
    </CustomSimpleModal>
  </>)
}

//👇 Each story then reuses that template
export const Default = TemplateModal.bind({});
Default.args = {
  primary: true,
  open: true,
  title: 'Seleção de dados Bancários',
  footer: true,
  exitClick: () => console.log('click'),
  exitTitle: 'SAIR',
  exitVariant: '',
  exitClassName: 'asdasdasdasdasdasd',
  confirmClick: () => console.log('clickConfirm'),
  confirmTitle: 'Confirmar',
  confirmIcon: <AddTaskRoundedIcon />,
  confirmVariant: 'contained',
  confirmClassName: 'testeQQQQQQ'
};
