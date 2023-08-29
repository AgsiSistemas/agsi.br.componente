import React from "react";
import CustomDataTable from "../../components/CustomDataTable/CustomDataTable.js";


export default {
  title: 'CustomDataTable',
  component: CustomDataTable,

}

const TemplateDataTable = (args) => {
  return (
    <div>

      <CustomDataTable {...args} />

    </div>
  )
}

export const Default = TemplateDataTable.bind({});

Default.args = {
  columnList: [
    {
      field: 'id',
      header: 'Código'
    },
    {
      field: 'id',
      header: 'Código'
    }, {
      field: 'id',
      header: 'Código'
    }, {
      field: 'id',
      header: 'Código'
    }, {
      field: 'id',
      header: 'Código'
    }, {
      field: 'id',
      header: 'Código'
    }, {
      field: 'id',
      header: 'Código'
    }, {
      field: 'id',
      header: 'Código'
    }, {
      field: 'id',
      header: 'Código'
    }, {
      field: 'id',
      header: 'Código'
    },
  ]
}

const TemplateDataTableWidth = (args) => {
  return (
    <div style={{ width: '500px' }}>

      <CustomDataTable {...args} />

    </div>
  )
}

export const WidthOverflow = TemplateDataTableWidth.bind({});

WidthOverflow.args = {
  columnList: [
    {
      field: 'id',
      header: 'Código'
    },
    {
      field: 'id',
      header: 'Código'
    }, {
      field: 'id',
      header: 'Código'
    }, {
      field: 'id',
      header: 'Código'
    }, {
      field: 'id',
      header: 'Código'
    }, {
      field: 'id',
      header: 'Código'
    }, {
      field: 'id',
      header: 'Código'
    }, {
      field: 'id',
      header: 'Código'
    }, {
      field: 'id',
      header: 'Código'
    }, {
      field: 'id',
      header: 'Código'
    },
  ]
}