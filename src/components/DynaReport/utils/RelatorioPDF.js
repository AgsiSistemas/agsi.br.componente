import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'

const startPageY = 130

const mainHeaderStyle = {
  fillColor: [41, 89, 129],
  textColor: [255, 255, 255],
  fontStyle: 'bold'
}

const getColumnStyles = (qtdColumns) => {
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

export const generatePDF = (selecteds, fields, options, agrupamento = []) => {
  //DEFINICOES DE VARIAVEIS
  const hasDependentes = fields.includes('dependentes')
  const hasGroup = options.includes('agrupar')

  const doc = new jsPDF('p', 'pt', 'a4')
  let page = 1

  //ADICIONA REGISTRO EM PRIMEIRO NIVEL
  const addPrimeiroNivel = (Y, header, content) => {
    autoTable(doc, {
      startY: Y > startPageY ? Y + 5 : Y,
      head: header && agrupamento.length > 0 ? [header] : [],
      pageBreak: 'avoid',
      margin: { top: startPageY },
      body: content
    })
  }

  const addSegundoNivel = (Y, header, content) => {
    autoTable(doc, {
      startY: Y > startPageY ? Y + 5 : Y,
      head: header ? [header] : [],
      pageBreak: 'avoid',
      body: content
      // columnStyles:
    })
  }

  //ADICIONA LINHA FINAL DA TABELA
  const addTableFooter = (Y, header, content) => {
    autoTable(doc, {
      body: content,
      head: header,
      startY: Y,
      pageBreak: 'avoid',
      styles: { fillColor: [255, 0, 0], halign: 'right' }
    })
  }

  //ADICIONA REGISTRO
  const addtable = (data) => {
    const cellWidth = 515.3 / fields.length

    //PARA CADA REGISTRO
    data?.forEach((el) => {
      let Y = doc.lastAutoTable.finalY
      const tempContent = []
      const newHeader = []

      for (const [key, value] of Object.entries(el)) {
        if (key !== 'dependentes' && key !== 'hasDependentes') {
          tempContent.push({
            content: value,
            styles: { fillColor: [255, 255, 255], cellWidth: cellWidth }
          })
          newHeader.push(key)
        }
      }

      //RESETA INICIO DE TABELA NA QUEBRA DE PAGINA
      if (page < doc.internal.getCurrentPageInfo().pageNumber) {
        page++
        Y = startPageY
      }

      addPrimeiroNivel(Y, newHeader, [tempContent])

      //DEPENDENTES
      if (hasDependentes) {
        addSegundoNivel(
          doc.lastAutoTable.finalY,
          null,
          Object.values(el.dependentes)
        )

        //TOTAL
        if (options.includes('totalizar')) {
          let total = 0
          el.dependentes?.forEach((element) => {
            total = total + element[2]
          })

          addTableFooter(doc.lastAutoTable.finalY, null, [
            [
              {
                content: `Total: ${total.toFixed(2)}`,
                styles: { halign: 'right', fillColor: [200, 200, 200] }
              }
            ]
          ])
        }
      }
    })
  }

  // TABELA PARA DEFINIR INICIO DA CRIACAO DE TABELAS
  autoTable(doc, {
    startY: startPageY
  })

  //VERIFICA SE TEM AGRUPAMENTO
  if (hasGroup) {
    const groupSections = []
    selecteds.forEach((element) => {
      if (!groupSections.includes(element.cidade))
        groupSections.push(element.cidade)
    })

    groupSections.forEach((group) => {
      autoTable(doc, {
        body: [['Grupo: ' + group]],
        startY: doc.lastAutoTable.finalY,
        pageBreak: 'avoid'
      })
      const dataGroup = []
      selecteds.forEach((element) => {
        if (element.cidade === group) dataGroup.push(element)
      })
      addtable(dataGroup)
    })
  } else {
    addtable(selecteds)
  }

  //HEADER
  var pageCount = doc.internal.getNumberOfPages()
  for (let i = 0; i < pageCount; i++) {
    doc.setLineWidth(1)
    doc.setPage(i)
    doc.line(20, 30, 580, 30)
    doc.setFontSize(9)
    doc.text(
      534,
      39,
      'Página ' + doc.internal.getCurrentPageInfo().pageNumber + '/' + pageCount
    )
    doc.setFontSize(18)
    doc.text(212, 45, 'Relatório dinâmico')

    doc.setFontSize(12)
    doc.text(230, 63, 'Ativos até 29/12/2022')
    doc.text(184, 78, 'Data de inclusão: 01/01/2022 a 29/12/2022')

    doc.line(20, 95, 580, 95)

    doc.setFontSize(9)
    var today = new Date()
    doc.text(493, 92, today.toLocaleString())

    // TABELA
    autoTable(doc, {
      startY: 96,
      pageBreak: 'avoid',
      body: [fields],
      columnStyles: getColumnStyles(fields.length)
    })
  }

  doc.save('Test.pdf')
}
