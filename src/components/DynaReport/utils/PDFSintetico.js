import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import {
  startPageY,
  isArrayInArray,
  getGroupHeader,
  addSum,
  addCount,
  getFilteredHeader,
  getHeaderStyles,
  pageUpd,
  tableWidth,
  addheader
} from './Methods'

export const PDFSintetico = (
  selecteds,
  fields,
  options,
  agrupamento = [],
  somar = [],
  title
) => {
  // DEFINICOES DE VARIAVEIS
  const isHorizontal = options.includes('Horizontal (paisagem)')
  const isCounting = options.includes('Contador de registros')
  const maxLength = isHorizontal ? '461' : '750'
  const doc = new jsPDF(isHorizontal ? 'l' : 'p', 'pt', 'a4')
  let page = 1

  const hideGroupField = !options.includes('Mostrar campo de agrupamento')

  const addSumFooter = (dataSection) => {
    const somaContent = []
    let filteredHeader = fields.slice()

    agrupamento.forEach((grupo) => {
      filteredHeader = getFilteredHeader(filteredHeader, grupo, hideGroupField)
    })

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

  const addCountFooter = (dataSection) => {
    const contadorContent = [`Reg:  ${dataSection.length}`]
    addCount(doc.lastAutoTable.finalY, null, contadorContent, doc, autoTable)
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
      tableWidth /
      (fields.length -
        (hideGroupField ? agrupamento[0].length + agrupamento[1].length : 0))

    // PARA CADA REGISTRO
    data.forEach((el, index) => {
      const tempContent = []
      const newHeader = []

      for (const [key, value] of Object.entries(el)) {
        tempContent.push({
          content: value.trim(),
          styles: {
            fillColor: index % 2 === 0 ? [252, 252, 252] : [245, 245, 245],
            cellWidth: cellWidth
          }
        })
        newHeader.push(key)
      }

      const Y = pageUpd(doc.lastAutoTable.finalY, doc, page, maxLength)
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

  // NIVEL 1
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

    Y = pageUpd(Y, doc, page, maxLength)
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

      Y = pageUpd(doc.lastAutoTable.finalY, doc, page, maxLength)
      autoTable(doc, {
        body: [agrupamentoNivel2],
        startY: Y,
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
      if (isCounting) addCountFooter(tempDataSection2)
      autoTable(doc, {
        startY: doc.lastAutoTable.finalY + 2
      })
    })
    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 2
    })
  })

  // HEADER
  addheader(doc, autoTable, fields, agrupamento.flat(), title, hideGroupField)

  doc.save(
    `${title[0] === '' ? 'Título não definido' : title[0] + 'sintético'}.pdf`
  )
}
