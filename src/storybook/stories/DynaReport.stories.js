import React from 'react'
import DynaReport from '../../components/DynaReport/DynaReport'
import axios from 'axios'

export default {
  title: 'DynaReport',
  component: DynaReport
}

const instance = axios.create({
  baseURL: 'http://191.13.138.172:9890/',
  timeout: 1000,
  headers: {
    Authorization: 'Bearer request your access'
  }
})

export const TesteDynaReport = () => (
  <DynaReport
    api={instance}
    filter='sab/reports/statistics/internal-customer-service?solutionDateInitial=2023-01-01&solutionDateFinal=2023-01-09'
  />
)
