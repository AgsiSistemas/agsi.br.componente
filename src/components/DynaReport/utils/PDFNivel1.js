import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import {
  startPageY,
  isArrayInArray,
  getGroupHeader,
  addSum,
  getFilteredHeader,
  pageUpd,
  retratoWidth,
  addheader
} from './Methods'

export const PDFNivel1 = (
  selecteds,
  fields,
  options,
  agrupamento = [],
  somar = [],
  title
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

    filteredHeader.forEach((element) => {
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
      retratoWidth / (fields.length - (hideGroupField ? agrupamento.length : 0))

    // PARA CADA REGISTRO
    data.forEach((el, index) => {
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

      const Y = pageUpd(doc.lastAutoTable.finalY, doc, page)

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

      Y = pageUpd(Y, doc, page, 750)

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
  addheader(doc, autoTable, fields, agrupamento, title, hideGroupField)

  doc.save('Test.pdf')
}
