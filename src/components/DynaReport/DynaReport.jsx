import React from 'react'
import Principal from './components/Principal/Principal'
import { DynaProvider } from './context/context'

function DynaReport() {
  return (
    <DynaProvider>
      <Principal />
    </DynaProvider>
  )
}

export default DynaReport
