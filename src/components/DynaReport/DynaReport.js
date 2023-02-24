import React from 'react'
import Principal from './components/Principal/Principal'
import { DynaProvider } from './context/context'

function DynaReport({ api, filter, title }) {
  return (
    <DynaProvider>
      <Principal api={api} filter={filter} title={title} />
    </DynaProvider>
  )
}

export default DynaReport
