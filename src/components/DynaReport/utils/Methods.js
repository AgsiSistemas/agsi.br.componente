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
    if (i > 0 && i < agrupamento.length - 1) text = text + ','
    text = text + ` ${element}: ${grupos[i]}`
  })
  return text
}
