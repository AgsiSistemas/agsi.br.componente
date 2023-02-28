export const startPageY = 130

export const mainHeaderStyle = {
  fillColor: [41, 89, 129],
  textColor: [255, 255, 255],
  fontStyle: 'bold'
}

export const getColumnStyles = (qtdColumns) => {
  const tempWidth = 515.3 / qtdColumns
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
  const tempWidth = 515.3 / qtdColumns
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
  const tempWidth = 515.3 / qtdColumns
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
  const tempWidth = 515.3 / content.length
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
