import React from "react";
import CustomDataTable from "../../components/CustomDataTable/CustomDataTable.js";
import { Conteiner, ConteinerItem } from '../../components/Conteiner/Conteiner.js'


export default {
  title: 'CustomDataTable',
  component: CustomDataTable,

}

const TemplateDataTable = (args) => {
  return (
    <Conteiner style={{ width: '70%', background: 'green' }}>

      <ConteinerItem>
        <CustomDataTable {...args} />
      </ConteinerItem>

    </Conteiner>

  )
}

export const Default = TemplateDataTable.bind({});

Default.args = {
  title: 'TITULO',
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
    // <div style={{ width: '500px' }}>

    <Conteiner style={{ border: '1px solid', width: '300px' }}>

      <ConteinerItem>
        <CustomDataTable {...args} />
      </ConteinerItem>

    </Conteiner>

    // </div>
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