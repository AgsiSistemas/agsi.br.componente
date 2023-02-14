import React from 'react'
import Principal from './components/Principal/Principal'
import { DynaProvider } from './context/context'

function DynaReport({ api, filter }) {
  return (
    <DynaProvider>
      <Principal api={api} filter={filter} />
    </DynaProvider>
  )
}

export default DynaReport
