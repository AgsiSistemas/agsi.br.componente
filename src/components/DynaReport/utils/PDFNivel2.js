import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import {
  startPageY,
  getColumnStyles,
  getGroupsStyles,
  isArrayInArray,
  getGroupHeader,
  addSum,
  getFilteredHeader,
  getHeaderStyles
} from './Methods'

export const PDFNivel2 = (
  selecteds,
  fields,
  options,
  agrupamento = [],
  somar = []
) => {
  // DEFINICOES DE VARIAVEIS
  const doc = new jsPDF('p', 'pt', 'a4')
  let page = 1

  const hideGroupField = !options.includes('Mostrar campo de agrupamento')

  const addSumFooter = (dataSection) => {
    const somaContent = []
    let filteredHeader = fields.slice()

    agrupamento.forEach((grupo) => {
      filteredHeader = getFilteredHeader(filteredHeader, grupo, hideGroupField)
    })

    filteredHeader.forEach((element, index) => {
      if (somar.includes(element)) {
        const sumWithInitial = dataSection.reduce(
          (acc, data) => acc + Number(data[element]),
          0
        )
        somaContent.push(
          somaContent.length === 0 ? `Σ ${sumWithInitial}` : sumWithInitial
        )
      } else {
        somaContent.push(somaContent.length === 0 ? `Σ` : null)
      }
    })

    addSum(doc.lastAutoTable.finalY, null, somaContent, doc, autoTable)
  }

  // ATUALIZA PAGINA E RETORNA Y
  const pageUpd = (Y, max = 780) => {
    if (page < doc.internal.getCurrentPageInfo().pageNumber) {
      page++
      return startPageY
    } else if (Y > max) {
      page++
      doc.addPage()
      return startPageY
    }
    return Y
  }

  // ADICIONA REGISTRO EM PRIMEIRO NIVEL
  const addPrimeiroNivel = (Y, header, content) => {
    autoTable(doc, {
      startY: Y > startPageY ? Y : startPageY,
      head: header ? [header] : [],
      pageBreak: 'avoid',
      margin: { top: startPageY },
      body: content
    })
  }

  // ADICIONA REGISTRO
  const addtable = (data) => {
    const cellWidth =
      515.3 /
      (fields.length -
        (hideGroupField ? agrupamento[0].length + agrupamento[1].length : 0))

    // PARA CADA REGISTRO
    data.forEach((el) => {
      let Y = doc.lastAutoTable.finalY
      const tempContent = []
      const newHeader = []

      for (const [key, value] of Object.entries(el)) {
        tempContent.push({
          content: value,
          styles: { fillColor: [255, 255, 255], cellWidth: cellWidth }
        })
        newHeader.push(key)
      }

      Y = pageUpd(Y)

      addPrimeiroNivel(Y, null, [tempContent])
    })
  }

  // TABELA PARA DEFINIR INICIO DA CRIACAO DE TABELAS
  autoTable(doc, {
    startY: startPageY
  })

  // VERIFICA SE TEM AGRUPAMENTO
  const groupSections1 = []
  const selectedsClone = [...selecteds]
  const agrupamentoNivel1 = agrupamento[0]
  const agrupamentoNivel2 = agrupamento[1]

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
    let Y = doc.lastAutoTable.finalY
    const tempDataSection1 = []
    selectedsClone.forEach((register) => {
      let addToGroup = true

      section1.forEach((element, index) => {
        if (register[agrupamentoNivel1[index]] !== element) {
          addToGroup = false
        }
      })

      if (addToGroup) {
        if (hideGroupField) {
          agrupamentoNivel1.forEach((grupo) => {
            delete register[grupo]
          })
        }
        tempDataSection1.push(register)
      }
    })

    Y = pageUpd(Y, 750)
    autoTable(doc, {
      body: [[getGroupHeader(agrupamentoNivel1, section1)]],
      startY: Y,
      pageBreak: 'avoid',
      columnStyles: {
        0: {
          fillColor: [205, 214, 236],
          textColor: [0, 0, 0],
          fontStyle: 'bold'
        }
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

      autoTable(doc, {
        body: [agrupamentoNivel2],
        startY: doc.lastAutoTable.finalY,
        pageBreak: 'avoid',
        columnStyles: getHeaderStyles(section2.length)
      })
      autoTable(doc, {
        body: [section2],
        startY: doc.lastAutoTable.finalY,
        pageBreak: 'avoid',
        columnStyles: getHeaderStyles(section2.length)
      })

      tempDataSection1.forEach((register) => {
        let addToGroup = true

        section2.forEach((element, index) => {
          if (register[agrupamentoNivel2[index]] !== element) {
            addToGroup = false
          }
        })

        if (addToGroup) {
          if (hideGroupField) {
            agrupamentoNivel2.forEach((grupo) => {
              delete register[grupo]
            })
          }
          tempDataSection2.push(register)
        }
      })
      addtable(tempDataSection2)
      if (somar.length > 0) addSumFooter(tempDataSection2)
      autoTable(doc, {
        startY: doc.lastAutoTable.finalY + 2
      })
    })
    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 2
    })
  })

  // HEADER
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

    const filteredHeader = fields

    if (hideGroupField) {
      agrupamento[0].forEach((grupo) => {
        if (filteredHeader.includes(grupo)) {
          const index = filteredHeader.indexOf(grupo)
          filteredHeader.splice(index, 1)
        }
      })
      agrupamento[1].forEach((grupo) => {
        if (filteredHeader.includes(grupo)) {
          const index = filteredHeader.indexOf(grupo)
          filteredHeader.splice(index, 1)
        }
      })
    }

    // TABELA
    autoTable(doc, {
      startY: 96,
      pageBreak: 'avoid',
      body: [filteredHeader],
      columnStyles: getColumnStyles(filteredHeader.length)
    })
  }

  doc.save('Test.pdf')
}
