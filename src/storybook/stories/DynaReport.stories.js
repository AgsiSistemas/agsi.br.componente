import React from 'react'
import DynaReport from '../../components/DynaReport/DynaReport'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)
const API_REQUEST_REPORT =
  'http://191.13.138.172:9890/sab/reports/statistics/internal-customer-service?solutionDateInitial=2023-01-01&solutionDateFinal=2023-01-09'

const API_REQUEST_MODELS =
  'http://191.13.138.172:9890/app-control/report-models'

const endpoint = 'sab/reports/statistics/internal-customer-service'

export default {
  title: 'DynaReport',
  component: DynaReport
}

const instance = axios.create({
  baseURL: 'http://191.13.138.172:9890/',
  timeout: 10000,
  headers: {
    Authorization: 'Bearer request your access'
  }
})

export const TesteDynaReport = () => {
  mock.onGet(API_REQUEST_REPORT).reply(200, {
    data: {
      columns: [
        'Código',
        'Atendimento',
        'Cód. Motivo Relato',
        'Motivo Relato',
        'Operador',
        'Quantidade'
      ],
      lines: [
        ['15', 'CHAMADO ', '1', 'SEM DETALHE', 'ODETE          ', '1'],
        ['15', 'CHAMADO ', '1', 'SEM DETALHE', 'SIMONE         ', '2'],
        ['18', 'DÚVIDAS COM PRESTADOR', null, null, 'RAFAEL         ', '1'],
        ['9', 'RECLAMACAO', null, null, 'ROSANGELA      ', '1'],
        ['5', 'SEGURO VIAGEM ', null, null, 'ALINE          ', '1'],
        ['5', 'SEGURO VIAGEM ', '1', 'SEM DETALHE', 'SIMONE         ', '1'],
        ['6', 'SOLICITAÇÃO DE AUTORIZAÇÃO', null, null, 'CARLOS         ', '1'],
        [
          '6',
          'SOLICITAÇÃO DE AUTORIZAÇÃO',
          null,
          null,
          'CREDNET        ',
          '164'
        ],
        ['6', 'SOLICITAÇÃO DE AUTORIZAÇÃO', null, null, 'FABIANA        ', '1'],
        ['6', 'SOLICITAÇÃO DE AUTORIZAÇÃO', null, null, 'MAILME         ', '8'],
        ['6', 'SOLICITAÇÃO DE AUTORIZAÇÃO', null, null, 'MARIANA        ', '1'],
        ['6', 'SOLICITAÇÃO DE AUTORIZAÇÃO', null, null, 'MARIANNE       ', '3'],
        ['6', 'SOLICITAÇÃO DE AUTORIZAÇÃO', null, null, 'ROSANGELA      ', '49']
      ],
      summableFields: ['Quantidade']
    }
  })

  mock.onPost(API_REQUEST_MODELS).reply(200, {
    timestamp: '2023-03-23T13:57:36.393Z',
    status: 0,
    message: 'string',
    developerMessage: 'string',
    data: 0
  })

  mock.onGet(`${API_REQUEST_MODELS}?endpoint=${endpoint}`).reply(200, [
    {
      id: 2,
      endpoint: 'sab/reports/statistics/internal-customer-service',
      username: 'Matheus',
      name: 'Teste modelo 1',
      standard: false,
      configuration: JSON.stringify({
        options: [
          'Horizontal (paisagem)',
          'Contador de registros',
          'Mostrar campo de agrupamento'
        ],
        group: [
          {
            id: 1,
            parent: 0,
            droppable: true,
            text: 'Grupo 01'
          },
          {
            id: 'Código',
            parent: 1,
            droppable: false,
            text: 'Código'
          },
          {
            id: 11,
            parent: 0,
            droppable: true,
            text: 'Grupo 02'
          },
          {
            id: 'Quantidade',
            parent: 11,
            droppable: false,
            text: 'Quantidade'
          }
        ],
        columnsOrder: [null, 'Quantidade', 'Código', 'Atendimento', 'Operador'],
        checkedFields: ['Código', 'Operador', 'Quantidade', 'Atendimento'],
        sum: ['Quantidade']
      })
    },
    {
      id: 3,
      endpoint: 'sab/reports/statistics/internal-customer-service',
      username: 'Matheus',
      name: 'Teste modelo 2',
      standard: true,
      configuration: JSON.stringify({
        options: ['Horizontal (paisagem)'],
        group: [
          {
            id: 1,
            parent: 0,
            droppable: true,
            text: 'Grupo 01'
          },
          {
            id: 'Operador',
            parent: 1,
            droppable: false,
            text: 'Operador'
          }
        ],
        columnsOrder: [
          null,
          'Código',
          'Cód. Motivo Relato',
          'Quantidade',
          'Motivo Relato',
          'Atendimento',
          'Operador'
        ],
        checkedFields: [
          'Código',
          'Atendimento',
          'Cód. Motivo Relato',
          'Motivo Relato',
          'Operador',
          'Quantidade'
        ],
        sum: []
      })
    }
  ])

  mock.onDelete(`${API_REQUEST_MODELS}/2`).reply(200, {
    timestamp: '2023-03-23T13:57:36.393Z',
    status: 0,
    message: 'string',
    developerMessage: 'string',
    data: 'string'
  })
  mock.onDelete(`${API_REQUEST_MODELS}/3`).reply(200, {
    timestamp: '2023-03-23T13:57:36.393Z',
    status: 0,
    message: 'string',
    developerMessage: 'string',
    data: 'string'
  })

  return (
    <DynaReport
      api={instance}
      title='Relatório pelo storybook'
      subTitle='Ativos até 29/12/2022'
      text='Data de inclusão: 01/01/2022 a 29/12/2022'
      filter='solutionDateInitial=2023-01-01&solutionDateFinal=2023-01-09'
      endPoint={endpoint}
    />
  )
}
