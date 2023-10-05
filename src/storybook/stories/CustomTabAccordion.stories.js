import React from "react";

import CustomTabAccordion from "../../components/CustomAccordion/CustomTabAccordion.js";

export default {
  title: 'CustomTabAccordion',
  component: CustomTabAccordion,

}
const handleSet = (value) => {
  localStorage.setItem('setTest', value)
}
const valueSet = localStorage.getItem('setTest')

const TemplateDefault = (args) => {


  return (
    <CustomTabAccordion {...args} />

  )
}

export const Default = TemplateDefault.bind({});

Default.args = {
  itens:
    [
      { id: "1", title: 'Title 1', subTitle: 'Subtitulo teste', tag: 'title2', content: (<p>conteudo</p>) },
      { id: "2", title: 'Title 2', tag: 'title1', content: (<div><h3>aaaaaa</h3></div>) },
    ],
  value: valueSet,
  onChange: (value) => { handleSet(value) }
}