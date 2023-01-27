import * as React from 'react'
const DynaContext = React.createContext()

function contextReducer(state, action) {
  if (action.type === 'selecteds') {
    return { ...state, selecteds: action.value }
  } else if (action.type === 'columnsOrder') {
    return { ...state, columnsOrder: action.value }
  } else if (action.type === 'fields') {
    return { ...state, fields: action.value }
  } else if (action.type === 'agrupamento') {
    return { ...state, agrupamento: action.value }
  } else if (action.type === 'options') {
    return { ...state, options: action.value }
  }
}

function DynaProvider({ children }) {
  const [state, dispatch] = React.useReducer(contextReducer, {
    selecteds: [],
    columnsOrder: [null, 'nome', 'telefone'],
    fields: ['nome', 'telefone'],
    agrupamento: [],
    options: []
  })
  const value = { state, dispatch }

  return <DynaContext.Provider value={value}>{children}</DynaContext.Provider>
}

function useSelectedRegisters() {
  const context = React.useContext(DynaContext)
  if (context === undefined) {
    throw new Error('useSelectedRegisters must be used within a DynaProvider')
  }
  return context
}

export { DynaProvider, useSelectedRegisters }
