import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import './index.css'

import React, { useState, useMemo } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useSelectedRegisters } from '../../context/context'

const conveniados = [
  {
    id: '63c0245a590c3af9991a2c46',
    nome: 'Mccall Peterson',
    telefone: '+1 (932) 536-3659',
    endereco: '549 Rockaway Parkway, Ernstville, Texas, 932',
    hasDependentes: false,
    qtdDependentes: 2,
    cidade: 'sumare',
    dependentes: [
      [965, 'Michael Cooke', 1165.56],
      [965, 'Michael Cooke', 1165.56],
      [965, 'Michael Cooke', 1165.56]
    ]
  },
  {
    id: '63c0245ad4570b68ae3c76d2',
    nome: 'Trisha Cantu',
    telefone: '+1 (935) 527-2150',
    endereco: '582 Verona Place, Edmund, Iowa, 3273',
    hasDependentes: true,
    qtdDependentes: 5,
    cidade: 'sumare',
    dependentes: [
      [587, 'Petra Copeland', 321.2],
      [587, 'Petra Copeland', 321.2],
      [587, 'Petra Copeland', 321.2]
    ]
  },
  {
    id: '63c0245ac1b91866b64ee7f1',
    nome: 'Cathy Rojas',
    telefone: '+1 (881) 578-3161',
    endereco: '189 Plaza Street, Ilchester, Ohio, 763',
    hasDependentes: true,
    qtdDependentes: 4,
    cidade: 'sumare',
    dependentes: [
      [871, 'Jeannie Fry', 1575.53],
      [871, 'Jeannie Fry', 1575.53],
      [871, 'Jeannie Fry', 1575.53]
    ]
  },
  {
    id: '63c0245aea1ce140468ffc15',
    nome: 'Lina Farley',
    telefone: '+1 (829) 491-3384',
    endereco: '886 Clymer Street, Holcombe, Arizona, 3259',
    hasDependentes: true,
    qtdDependentes: 1,
    cidade: 'americana',
    dependentes: [
      [350, 'Harriett Stein', 769.75],
      [350, 'Harriett Stein', 769.75],
      [350, 'Harriett Stein', 769.75]
    ]
  },
  {
    id: '63c0245a084c8f4e4760b9e5',
    nome: 'Moon Wilder',
    telefone: '+1 (952) 475-3584',
    endereco: '469 Chapel Street, Graball, Vermont, 7752',
    hasDependentes: true,
    qtdDependentes: 7,
    cidade: 'americana',
    dependentes: [
      [749, 'Stuart Wilcox', 1103.68],
      [749, 'Stuart Wilcox', 1103.68],
      [749, 'Stuart Wilcox', 1103.68]
    ]
  },
  {
    id: '63c0245a03a3b0498070fcf6',
    nome: 'Annmarie Ashley',
    telefone: '+1 (879) 487-3544',
    endereco: '127 Wilson Street, Sims, New Mexico, 3927',
    hasDependentes: true,
    qtdDependentes: 5,
    cidade: 'americana',
    dependentes: [
      [431, 'Bender Underwood', 1139.18],
      [431, 'Bender Underwood', 1139.18],
      [431, 'Bender Underwood', 1139.18]
    ]
  },
  {
    id: '63c0245ad5d288396f6d57ce',
    nome: 'Stevens Patterson',
    telefone: '+1 (816) 453-2070',
    endereco: '232 Diamond Street, Fruitdale, Arkansas, 4688',
    hasDependentes: false,
    qtdDependentes: 4,
    cidade: 'americana',
    dependentes: [
      [734, 'Marilyn Hurst', 220.05],
      [734, 'Marilyn Hurst', 220.05],
      [734, 'Marilyn Hurst', 220.05]
    ]
  },
  {
    id: '63c0245a4e9cdf3a77c4c326',
    nome: 'Ferguson Dodson',
    telefone: '+1 (864) 420-3519',
    endereco: '853 Bartlett Place, Whitehaven, Hawaii, 5271',
    hasDependentes: false,
    qtdDependentes: 4,
    cidade: 'americana',
    dependentes: [
      [151, 'Hampton Ware', 1862.14],
      [151, 'Hampton Ware', 1862.14],
      [151, 'Hampton Ware', 1862.14]
    ]
  },
  {
    id: '63c0245a272b77be79409f9d',
    nome: 'Robinson Harris',
    telefone: '+1 (900) 497-2842',
    endereco: '629 Madoc Avenue, Wolcott, Maine, 2818',
    hasDependentes: false,
    qtdDependentes: 1,
    cidade: 'americana',
    dependentes: [
      [198, 'Mann Munoz', 432.83],
      [198, 'Mann Munoz', 432.83],
      [198, 'Mann Munoz', 432.83]
    ]
  },
  {
    id: '63c0245af7c5f23d4743f2fb',
    nome: 'Evangeline Mendoza',
    telefone: '+1 (952) 405-2377',
    endereco: '784 Dinsmore Place, Goldfield, Connecticut, 5597',
    hasDependentes: false,
    qtdDependentes: 2,
    cidade: 'americana',
    dependentes: [
      [929, 'Rosie Mcleod', 561.78],
      [929, 'Rosie Mcleod', 561.78],
      [929, 'Rosie Mcleod', 561.78]
    ]
  },
  {
    id: '63c0245ae57061f486ff1dd4',
    nome: 'Pam Horne',
    telefone: '+1 (849) 548-3862',
    endereco: '737 Ryerson Street, Highland, Utah, 8492',
    hasDependentes: true,
    qtdDependentes: 8,
    cidade: 'americana',
    dependentes: [
      [209, 'Knapp Whitehead', 1154.6],
      [209, 'Knapp Whitehead', 1154.6],
      [209, 'Knapp Whitehead', 1154.6]
    ]
  },
  {
    id: '63c0245ac1647d0d3c4f67c9',
    nome: 'Duffy Woodward',
    telefone: '+1 (960) 423-2659',
    endereco: '251 Kane Place, Starks, North Carolina, 7405',
    hasDependentes: false,
    qtdDependentes: 1,
    cidade: 'americana',
    dependentes: [
      [273, 'Betsy Kennedy', 529.66],
      [273, 'Betsy Kennedy', 529.66],
      [273, 'Betsy Kennedy', 529.66]
    ]
  }
]

export const DynaGrade = () => {
  const [registers, setRegisters] = useState([])

  const configColumns = {
    nome: { field: 'nome', header: 'Nome', width: 230, type: 'string' },
    endereco: {
      field: 'endereco',
      header: 'Endereço',
      width: 330,
      type: 'string'
    },
    telefone: {
      field: 'telefone',
      header: 'Telefone',
      width: 160,
      type: 'string'
    },
    dependentes: {
      field: 'hasDependentes',
      header: 'Possui dependentes',
      width: 160,
      type: 'string'
    },
    cidade: {
      field: 'cidade',
      header: 'Cidade',
      width: 160,
      type: 'string'
    }
  }

  const {
    state: { selecteds, fields },
    dispatch
  } = useSelectedRegisters()

  useMemo(() => {
    setRegisters(conveniados)
  }, [])

  const onSelectRegister = (e) => {
    dispatch({ value: e, type: 'selecteds' })
  }

  const onColReorder = (e) => {
    const temp = []
    e.columns.forEach((e) => {
      temp.push(e.props.field)
    })
    dispatch({ value: temp, type: 'columnsOrder' })
  }

  const dynamicColumns = fields.map((col, i) => {
    return (
      <Column
        key={configColumns[col].field}
        columnKey={configColumns[col].field}
        field={configColumns[col].field}
        header={configColumns[col].header}
        filter
        filterPlaceholder={`Filtrar por ${configColumns[col].header}`}
      />
    )
  })

  return (
    <div>
      <div className='card'>
        <DataTable
          value={registers}
          reorderableColumns
          onColReorder={(e) => onColReorder(e)}
          responsiveLayout='scroll'
          selection={selecteds}
          onSelectionChange={(e) => onSelectRegister(e.value)}
          dataKey='id'
          selectionPageOnly
          paginator
          rows={30}
          size='small'
          showGridlines
          stripedRows
        >
          <Column selectionMode='multiple' headerStyle={{ width: '3em' }} />
          {dynamicColumns}
        </DataTable>
      </div>
    </div>
  )
}

export default DynaGrade
