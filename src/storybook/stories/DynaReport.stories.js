import React from 'react'
import DynaReport from '../../components/DynaReport/DynaReport'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)
const API_REQUEST =
  'http://191.13.138.172:9890/sab/reports/statistics/internal-customer-service?solutionDateInitial=2023-01-01&solutionDateFinal=2023-01-09'

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
  mock.onGet(API_REQUEST).reply(200, {
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

  return (
    <DynaReport
      api={instance}
      filter='sab/reports/statistics/internal-customer-service?solutionDateInitial=2023-01-01&solutionDateFinal=2023-01-09'
    />
  )
}
