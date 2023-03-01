export const startPageY = 130
export const retratoWidth = 515.3

export const mainHeaderStyle = {
  fillColor: [41, 89, 129],
  textColor: [255, 255, 255],
  fontStyle: 'bold'
}

export const getColumnStyles = (qtdColumns) => {
  const tempWidth = retratoWidth / qtdColumns
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
  const tempWidth = retratoWidth / qtdColumns
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
  const tempWidth = retratoWidth / qtdColumns
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
    text = text + ` ${element}: ${grupos[i]}`
    if (i < agrupamento.length - 1) text = text + ','
  })
  return text
}

export const addSum = (Y, header, content, doc, autoTable) => {
  const tempWidth = retratoWidth / content.length
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
    doc.line(20, 30, 580, 30)
    doc.setFontSize(9)
    doc.text(
      fullWidth - 18,
      39,
      'Página ' +
        doc.internal.getCurrentPageInfo().pageNumber +
        '/' +
        pageCount,
      { align: 'right' }
    )
    doc.setFontSize(18)
    doc.text(fullWidth / 2, 45, title, { align: 'center' })
    doc.setFontSize(12)
    doc.text(fullWidth / 2, 63, 'Ativos até 29/12/2022', { align: 'center' })
    doc.text(fullWidth / 2, 78, 'Data de inclusão: 01/01/2022 a 29/12/2022', {
      align: 'center'
    })

    doc.line(20, 95, 580, 95)
    doc.setFontSize(9)
    var today = new Date()
    doc.text(fullWidth - 18, 92, today.toLocaleString(), { align: 'right' })

    const filteredHeader = getFilteredHeader(
      fields,
      agrupamento,
      hideGroupField
    )

    // TABELA
    if (addHeader) {
      doc.setDrawColor(0)
      doc.setFillColor(49, 88, 130)
      doc.rect(40, 96, 515.3, 33, 'F')

      autoTable(doc, {
        startY: 96,
        pageBreak: 'avoid',
        body: [filteredHeader],
        columnStyles: getColumnStyles(filteredHeader.length)
      })
    }
  }
}
