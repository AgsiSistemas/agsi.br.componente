import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'

const startPageY = 76

export const PDFBasico = (selecteds, fields, options, agrupamento = []) => {
  // DEFINICOES DE VARIAVEIS
  const doc = new jsPDF('p', 'pt', 'a4')

  // ADICIONA REGISTRO
  const addtable = (data) => {
    const newBody = data.map((el) => {
      return Object.values(el)
    })

    autoTable(doc, {
      body: newBody,
      head: [fields],
      pageBreak: 'avoid',
      headStyles: {
        fillColor: [41, 89, 129],
        textColor: [255, 255, 255],
        fontStyle: 'bold'
      }
    })
  }

  // TABELA PARA DEFINIR INICIO DA CRIACAO DE TABELAS
  autoTable(doc, {
    startY: startPageY
  })
  addtable(selecteds)

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
    doc.text(212, 45, 'Relatório resumido')

    doc.setFontSize(12)
    doc.text(230, 63, 'Ativos até 29/12/2022')
    doc.text(184, 78, 'Data de inclusão: 01/01/2022 a 29/12/2022')

    doc.line(20, 95, 580, 95)

    doc.setFontSize(9)
    var today = new Date()
    doc.text(493, 92, today.toLocaleString())
  }

  doc.save('Test.pdf')
}
