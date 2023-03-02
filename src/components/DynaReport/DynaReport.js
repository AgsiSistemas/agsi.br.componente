import React from 'react'
import Principal from './components/Principal/Principal'
import { DynaProvider } from './context/context'

function DynaReport(props) {
  return (
    <DynaProvider>
      <Principal {...props} />
    </DynaProvider>
  )
}

export default DynaReport
