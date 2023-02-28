import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import {
  startPageY,
  getColumnStyles,
  isArrayInArray,
  getGroupHeader,
  addSum,
  getFilteredHeader
} from './Methods'

export const PDFNivel1 = (
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
    const filteredHeader = getFilteredHeader(
      fields,
      agrupamento,
      hideGroupField
    )

    filteredHeader.forEach((element, index) => {
      if (somar.includes(element)) {
        const sumWithInitial = dataSection.reduce(
          (acc, data) => acc + Number(data[element]),
          0
        )
        somaContent.push(
          somaContent.length === 0 ? `Σ ${sumWithInitial}` : sumWithInitial
        )
        // } else if (index > 0) {
      } else {
        somaContent.push(somaContent.length === 0 ? `Σ` : null)
      }
    })
    addSum(doc.lastAutoTable.finalY, null, somaContent, doc, autoTable)
  }

  // ATUALIZA PAGINA E RETORNA Y
  const pageUpd = (Y) => {
    if (page < doc.internal.getCurrentPageInfo().pageNumber) {
      page++
      return startPageY
    } else if (Y > 780) {
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
      515.3 / (fields.length - (hideGroupField ? agrupamento.length : 0))

    // PARA CADA REGISTRO
    data.forEach((el, index) => {
      let Y = doc.lastAutoTable.finalY
      const tempContent = []
      for (const [key, value] of Object.entries(el)) {
        tempContent.push({
          content: value,
          styles: {
            fillColor: index % 2 === 0 ? [252, 252, 252] : [245, 245, 245],
            cellWidth: cellWidth
          }
        })
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
  if (agrupamento.length > 0) {
    const groupSections = []

    const selectedsClone = [...selecteds]

    selectedsClone.forEach((element) => {
      const tempGrupo = []
      agrupamento.forEach((grupo) => {
        tempGrupo.push(element[grupo])
      })

      if (!isArrayInArray(groupSections, tempGrupo)) {
        groupSections.push(tempGrupo)
      }
    })

    groupSections.forEach((section) => {
      let Y = doc.lastAutoTable.finalY
      const tempDataSection = []
      selectedsClone.forEach((register) => {
        let addToGroup = true

        section.forEach((element, index) => {
          if (register[agrupamento[index]] !== element) {
            addToGroup = false
          }
        })

        if (addToGroup) {
          if (hideGroupField) {
            agrupamento.forEach((grupo) => {
              delete register[grupo]
            })
          }
          tempDataSection.push(register)
        }
      })

      Y = pageUpd(Y)

      autoTable(doc, {
        body: [[getGroupHeader(agrupamento, section)]],
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

      addtable(tempDataSection)
      if (somar.length > 0) addSumFooter(tempDataSection)
      autoTable(doc, {
        startY: doc.lastAutoTable.finalY + 2
      })
    })
  } else {
    addtable(selecteds)
    if (somar.length > 0) addSumFooter(selecteds)
    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 2
    })
  }

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

    const filteredHeader = getFilteredHeader(
      fields,
      agrupamento,
      hideGroupField
    )

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
