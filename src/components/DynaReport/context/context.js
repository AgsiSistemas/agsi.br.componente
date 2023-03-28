import * as React from 'react'
const DynaContext = React.createContext()

function contextReducer(state, action) {
  if (action.type === 'selecteds') {
    return { ...state, selecteds: action.value }
  } else if (action.type === 'columnsOrder') {
    return { ...state, columnsOrder: action.value }
  } else if (action.type === 'fields') {
    return { ...state, fields: action.value }
  } else if (action.type === 'checkedFields') {
    return { ...state, checkedFields: action.value }
  } else if (action.type === 'agrupamento') {
    return { ...state, agrupamento: action.value }
  } else if (action.type === 'options') {
    return { ...state, options: action.value }
  } else if (action.type === 'somar') {
    return { ...state, somar: action.value }
  } else if (action.type === 'summableFields') {
    return { ...state, summableFields: action.value }
  } else if (action.type === 'savedTree') {
    return { ...state, savedTree: action.value }
  } else if (action.type === 'title') {
    return { ...state, title: action.value }
  } else if (action.type === 'api') {
    return { ...state, api: action.value }
  } else if (action.type === 'endpoint') {
    return { ...state, endpoint: action.value }
  }
}

function DynaProvider({ children }) {
  const [state, dispatch] = React.useReducer(contextReducer, {
    selecteds: [],
    columnsOrder: [],
    fields: [],
    checkedFields: [],
    agrupamento: [],
    savedTree: [
      {
        id: 1,
        parent: 0,
        droppable: true,
        text: 'Grupo 01'
      }
    ],
    options: [],
    somar: [],
    summableFields: [],
    title: '',
    api: {},
    endpoint: ''
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
