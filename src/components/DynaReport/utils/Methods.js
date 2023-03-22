export const startPageY = 130
export let tableWidth = 0

export const setTableWidth = (newWidth) => {
  tableWidth = newWidth
}

export const mainHeaderStyle = {
  fillColor: [41, 89, 129],
  textColor: [255, 255, 255],
  fontStyle: 'bold'
}

export const getColumnStyles = (qtdColumns) => {
  const tempWidth = tableWidth / qtdColumns
  const tempObj = {}

  for (let index = 0; index < qtdColumns; index++) {
    tempObj[index] = {
      cellWidth: tempWidth,
      ...mainHeaderStyle
    }
  }
  return tempObj
}

export const getGroupsStyles = (qtdColumns, bold) => {
  const tempWidth = tableWidth / qtdColumns
  const tempObj = {}

  for (let index = 0; index < qtdColumns; index++) {
    tempObj[index] = {
      cellWidth: tempWidth,
      fontStyle: bold ? 'bold' : 'normal'
    }
  }
  return tempObj
}

export const getHeaderStyles = (qtdColumns) => {
  const tempWidth = tableWidth / qtdColumns
  const tempObj = {}

  for (let index = 0; index < qtdColumns; index++) {
    tempObj[index] = {
      cellWidth: tempWidth,
      fontStyle: 'bold',
      fillColor: [236, 245, 250]
    }
  }
  return tempObj
}

export const isArrayInArray = (arr, item) => {
  const asString = JSON.stringify(item)

  const contains = arr.some(function (ele) {
    return JSON.stringify(ele) === asString
  })
  return contains
}

export const getGroupHeader = (agrupamento, grupos) => {
  let text = ''
  agrupamento.forEach((element, i) => {
    text = text + `${element.trim()}: ${grupos[i].trim()}`
    if (i < agrupamento.length - 1) text = text + ', '
  })
  return text
}

export const addSum = (Y, header, content, doc, autoTable) => {
  const tempWidth = tableWidth / content.length
  const tempObj = {}

  for (let index = 0; index < content.length; index++) {
    tempObj[index] = {
      cellWidth: tempWidth,
      textColor: [0, 0, 0],
      fillColor: [180, 180, 180],
      lineColor: [0, 0, 0],
      lineWidth:
        (typeof content[index] === 'number' && index > 0) ||
        (index === 0 && content[index].length > 1)
          ? { top: 0.5, right: 0, bottom: 0, left: 0 }
          : 0
    }
  }

  autoTable(doc, {
    body: [content],
    head: header,
    startY: Y,
    pageBreak: 'avoid',
    columnStyles: tempObj
  })
}

export const addCount = (Y, header, content, doc, autoTable) => {
  autoTable(doc, {
    body: [content],
    head: header,
    startY: Y,
    pageBreak: 'avoid',
    columnStyles: {
      0: {
        cellWidth: tableWidth,
        textColor: [0, 0, 0],
        fillColor: [180, 180, 180],
        lineColor: [0, 0, 0]
      }
    }
  })
}

export const getFilteredHeader = (fields, agrupamento, hideGroupField) => {
  var temp = fields.slice()
  if (hideGroupField) {
    agrupamento.forEach((grupo) => {
      if (temp.includes(grupo)) {
        const index = temp.indexOf(grupo)
        temp.splice(index, 1)
      }
    })
  }
  return temp
}

export const pageUpd = (Y, doc, page, max = 780) => {
  if (page < doc.internal.getCurrentPageInfo().pageNumber) {
    page++
  }
  if (Y > max) {
    doc.addPage()
    return startPageY
  } else {
    return Y
  }
}

export const addheader = (
  doc,
  autoTable,
  fields,
  agrupamento,
  title,
  hideGroupField,
  addHeader = true
) => {
  var pageCount = doc.internal.getNumberOfPages()
  for (let i = 0; i < pageCount; i++) {
    const fullWidth = doc.internal.pageSize.getWidth()

    doc.setLineWidth(1)
    doc.setPage(i)
    doc.line(20, 30, fullWidth - 20, 30)
    doc.setFontSize(9)
    doc.text(
      fullWidth - 20,
      39,
      'Página ' +
        doc.internal.getCurrentPageInfo().pageNumber +
        '/' +
        pageCount,
      { align: 'right' }
    )
    doc.setFontSize(18)
    doc.text(fullWidth / 2, 45, title[0], { align: 'center' })
    doc.setFontSize(12)
    doc.text(fullWidth / 2, 63, title[1], { align: 'center' })
    doc.text(fullWidth / 2, 78, title[2], { align: 'center' })

    doc.line(20, 95, fullWidth - 20, 95)
    doc.setFontSize(9)
    var today = new Date()
    doc.text(fullWidth - 20, 92, today.toLocaleString(), { align: 'right' })

    const filteredHeader = getFilteredHeader(
      fields,
      agrupamento,
      hideGroupField
    )

    // TABELA
    if (addHeader) {
      doc.setDrawColor(0)
      doc.setFillColor(49, 88, 130)
      doc.rect(40, 96, fullWidth - 80, 33, 'F')

      autoTable(doc, {
        startY: 96,
        pageBreak: 'avoid',
        body: [filteredHeader],
        columnStyles: getColumnStyles(filteredHeader.length)
      })
    }
  }
}

export const resumirDadosNvl1 = (registroBase, agrupamento, somar) => {
  const groupSections1 = []
  const selectedsClone = [...registroBase]
  const agrupamentoNivel1 = [...agrupamento[0]]
  const newRegister = []

  selectedsClone.forEach((element) => {
    const tempGrupo = []
    agrupamentoNivel1.forEach((grupo) => {
      tempGrupo.push(element[grupo])
    })

    if (!isArrayInArray(groupSections1, tempGrupo)) {
      groupSections1.push(tempGrupo)
    }
  })

  groupSections1.forEach((section1) => {
    const tempDataSection1 = []
    const tempResume = []
    selectedsClone.forEach((register) => {
      let addToGroup = true

      section1.forEach((element, index) => {
        if (register[agrupamentoNivel1[index]] !== element) {
          addToGroup = false
        }
      })

      if (addToGroup) {
        tempDataSection1.push(register)
      }
    })

    agrupamentoNivel1.forEach((grupo, index) => {
      tempResume.push(section1[index])
    })

    somar.forEach((soma) => {
      const sum = tempDataSection1.reduce((accumulator, object) => {
        return accumulator + Number(object[soma])
      }, 0)
      tempResume.push(sum)
    })

    newRegister.push(tempResume)
  })

  return {
    lines: newRegister,
    columns: [...agrupamentoNivel1, ...somar],
    summableFields: somar
  }
}

export const resumirDadosNvl2 = (registroBase, agrupamento, somar) => {
  const groupSections1 = []
  const selectedsClone = [...registroBase]
  const agrupamentoNivel1 = [...agrupamento[0]]
  const agrupamentoNivel2 = [...agrupamento[1]]
  const newRegister = []
  selectedsClone.forEach((element) => {
    const tempGrupo = []
    agrupamentoNivel1.forEach((grupo) => {
      tempGrupo.push(element[grupo])
    })

    if (!isArrayInArray(groupSections1, tempGrupo)) {
      groupSections1.push(tempGrupo)
    }
  })

  groupSections1.forEach((section1) => {
    const tempDataSection1 = []
    selectedsClone.forEach((register) => {
      let addToGroup = true

      section1.forEach((element, index) => {
        if (register[agrupamentoNivel1[index]] !== element) {
          addToGroup = false
        }
      })

      if (addToGroup) {
        tempDataSection1.push(register)
      }
    })

    // NIVEL 2
    const groupSections2 = []
    tempDataSection1.forEach((element) => {
      const tempGrupo = []
      agrupamentoNivel2.forEach((grupo) => {
        tempGrupo.push(element[grupo])
      })

      if (!isArrayInArray(groupSections2, tempGrupo)) {
        groupSections2.push(tempGrupo)
      }
    })

    groupSections2.forEach((section2) => {
      const tempDataSection2 = []
      const tempResume = []

      tempDataSection1.forEach((register) => {
        let addToGroup = true

        section2.forEach((element, index) => {
          if (register[agrupamentoNivel2[index]] !== element) {
            addToGroup = false
          }
        })

        if (addToGroup) {
          tempDataSection2.push(register)
        }
      })

      agrupamentoNivel1.forEach((grupo, index) => {
        tempResume.push(section1[index])
      })
      agrupamentoNivel2.forEach((grupo, index) => {
        tempResume.push(section2[index])
      })

      somar.forEach((soma) => {
        const sum = tempDataSection2.reduce((accumulator, object) => {
          return accumulator + Number(object[soma])
        }, 0)
        tempResume.push(sum)
      })

      newRegister.push(tempResume)
    })
  })

  return {
    lines: newRegister,
    columns: [...agrupamentoNivel1, ...agrupamentoNivel2, ...somar],
    summableFields: somar
  }
}

export const getFormattedData = (_data, fields) => {
  const newData = []

  _data?.forEach((register, i) => {
    const temp = {}
    fields?.forEach((field, j) => {
      temp[field] = register[j]
    })
    temp.id = i
    newData.push(temp)
  })
  return newData
}

export const resumir = (registroBase, agrupamento, somar) => {
  return agrupamento.length > 1
    ? resumirDadosNvl2(registroBase, agrupamento, somar)
    : resumirDadosNvl1(registroBase, agrupamento, somar)
}
