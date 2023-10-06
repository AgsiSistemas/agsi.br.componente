import React from "react";
import CustomRadioGroup from "../../components/Inputs/CustomRadioGroup/CustomRadioGroup.js";

export default {
  title: 'CustomRadioGroup',
  component: CustomRadioGroup
}

const TemplateDataTable = (args) => {
  return (
    <div>

      <CustomRadioGroup {...args} />

    </div>
  )
}

export const Default = TemplateDataTable.bind({});

Default.args = {
  title: 'Financeiro',
  value: 'Todos',
  // onChange,
  // defaultValue,
  itemsList: [
    { value: 'Todos', label: 'Todos' },
    { value: 'Somente Titulos', label: 'Somente Titulos' },
    { value: 'Somente', label: 'Somente', disabled: true },
  ],
  row: false
}

export const RowDirection = TemplateDataTable.bind({});

RowDirection.args = {
  title: 'Financeiro',
  value: 'Todos',
  // onChange,
  // defaultValue,
  itemsList: [
    { value: 'Todos', label: 'Todos' },
    { value: 'Somente Titulos', label: 'Somente Titulos' },
  ],
  row: true
}