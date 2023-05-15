import React, { Fragment } from "react"
import { Box } from "@mui/material"
import './BarMessageTest.scss'

export const BarMessageTest = () => {
  return (
    <Fragment>
      <div className="bar-test-message-content">
        <div><b>Ambiente de Teste e Desenvolvimento!</b><em >"Alterações NÃO fazem efeito no Banco de dados Produção!"</em></div>
      </div>
    </Fragment>
  )
}