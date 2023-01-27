import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { dicionary } from "./Constants";

const getFieldWidth = {
  nome: 160,
  endereco: 120,
  telefone: 100,
  dependentes: 0,
};

const mainHeaderStyle = {
  fillColor: [41, 89, 129],
  textColor: [255, 255, 255],
  fontStyle: "bold",
};

export const generatePDF = (selecteds, fields, options, agrupamento = []) => {
  //DEFINICOES DE VARIAVEIS
  const hasDependentes = fields.includes("dependentes");
  const hasGroup = options.includes("agrupar");

  let doc = new jsPDF("p", "pt", "a4");
  let page = 1;

  //CRIA OBJ DE STYLE
  const getUsuarioStyle = () => {
    const result = {};
    fields.forEach((element, index) => {
      const countExcludeFields = hasDependentes ? 2 : 1;
      if (fields.length > index + countExcludeFields) {
        result[index] = { cellWidth: getFieldWidth[element] };
      }
    });
    return result;
  };

  //ADICIONA REGISTRO EM PRIMEIRO NIVEL
  const addPrimeiroNivel = (Y, header, content) => {
    autoTable(doc, {
      startY: Y > 116 ? Y + 5 : Y,
      head: header ? [header] : [],
      pageBreak: "avoid",
      margin: { top: 116 },
      body: content,
      columnStyles: getUsuarioStyle(),
    });
  };

  const addSegundoNivel = (Y, header, content) => {
    autoTable(doc, {
      startY: Y > 116 ? Y + 5 : Y,
      head: header ? [header] : [],
      pageBreak: "avoid",
      body: content,
      columnStyles: getUsuarioStyle(),
    });
  };

  //ADICIONA LINHA FINAL DA TABELA
  const addTableFooter = (Y, header, content) => {
    autoTable(doc, {
      body: content,
      head: header,
      startY: Y,
      pageBreak: "avoid",
      styles: { fillColor: [255, 0, 0], halign: "right" },
    });
  };

  //ADICIONA USUARIO
  const addUsuario = (usuarios) => {
    //PARA CADA USUARIO
    usuarios?.forEach((el) => {
      let Y = doc.lastAutoTable.finalY;
      const usuarioContent = [];
      const newHeader = [];

      for (const [key, value] of Object.entries(el)) {
        if (key !== "dependentes" && key !== "hasDependentes") {
          usuarioContent.push({
            content: value,
            styles: { fillColor: [255, 255, 255] },
          });
          newHeader.push(dicionary[key]);
        }
      }

      //RESETA INICIO DE TABELA NA QUEBRA DE PAGINA
      if (page < doc.internal.getCurrentPageInfo().pageNumber) {
        page++;
        Y = 116;
      }

      addPrimeiroNivel(Y, newHeader, [usuarioContent]);

      //DEPENDENTES
      if (hasDependentes) {
        addSegundoNivel(
          doc.lastAutoTable.finalY,
          null,
          Object.values(el.dependentes)
        );

        //TOTAL
        if (options.includes("totalizar")) {
          let total = 0;
          el.dependentes?.forEach((element) => {
            total = total + element[2];
          });

          addTableFooter(doc.lastAutoTable.finalY, null, [
            [
              {
                content: `Total: ${total.toFixed(2)}`,
                styles: { halign: "right", fillColor: [200, 200, 200] },
              },
            ],
          ]);
        }
      }
    });
  };

  // TABELA PARA DEFINIR INICIO DA CRIACAO DE TABELAS
  autoTable(doc, {
    startY: 116,
  });

  //VERIFICA SE TEM AGRUPAMENTO
  if (hasGroup) {
    const groupSections = [];
    selecteds.forEach((element) => {
      if (!groupSections.includes(element.cidade))
        groupSections.push(element.cidade);
    });

    groupSections.forEach((group) => {
      autoTable(doc, {
        body: [["Grupo: " + group]],
        startY: doc.lastAutoTable.finalY,
        pageBreak: "avoid",
      });
      const dataGroup = [];
      selecteds.forEach((element) => {
        if (element.cidade === group) dataGroup.push(element);
      });
      addUsuario(dataGroup);
    });
  } else {
    addUsuario(selecteds);
  }

  //HEADER
  var pageCount = doc.internal.getNumberOfPages();
  for (let i = 0; i < pageCount; i++) {
    doc.setLineWidth(1);
    doc.setPage(i);
    doc.line(20, 30, 580, 30);
    doc.setFontSize(9);
    doc.text(
      534,
      39,
      "Página " + doc.internal.getCurrentPageInfo().pageNumber + "/" + pageCount
    );
    doc.setFontSize(18);
    doc.text(180, 45, "Relatório analítico de usuários");

    doc.setFontSize(12);
    doc.text(230, 63, "Ativos até 29/12/2022");
    doc.text(184, 78, "Data de inclusão: 01/01/2022 a 29/12/2022");

    doc.line(20, 95, 580, 95);

    doc.setFontSize(9);
    var today = new Date();
    doc.text(493, 92, today.toLocaleString());

    // TABELA
    autoTable(doc, {
      startY: 96,
      pageBreak: "avoid",
      body: [["Cod. Titular", "Titular", "Mensalidade"]],
      columnStyles: {
        0: {
          cellWidth: 100,
          ...mainHeaderStyle,
        },
        1: {
          cellWidth: 240,
          ...mainHeaderStyle,
        },
        2: {
          cellWidth: "100%",
          ...mainHeaderStyle,
        },
      },
    });
  }

  doc.save("Test.pdf");
};
