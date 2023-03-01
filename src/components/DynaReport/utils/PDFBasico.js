import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import { startPageY, addheader } from './Methods'

export const PDFBasico = (selecteds, fields, title) => {
  // DEFINICOES DE VARIAVEIS
  const doc = new jsPDF('p', 'pt', 'a4')

  // ADICIONA REGISTRO
  const addtable = (data) => {
    const newBody = data.map((el) => {
      return Object.values(el)
    })

    autoTable(doc, {
      startY: doc.lastAutoTable.finalY,
      body: newBody,
      head: [fields],
      headStyles: {
        fillColor: [41, 89, 129],
        textColor: [255, 255, 255],
        fontStyle: 'bold'
      },
      margin: { top: startPageY - 34 }
    })
  }

  addtable(selecteds)

  // HEADER
  addheader(doc, autoTable, fields, [], title, false, false)

  doc.save('Test.pdf')
}
