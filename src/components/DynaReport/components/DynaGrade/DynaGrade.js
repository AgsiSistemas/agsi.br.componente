import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "./index.css";

import React, { useState, useMemo } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { DataService } from "./service/DataService";
import { useSelectedRegisters } from "../../context/context";

export const DynaGrade = () => {
  const [registers, setRegisters] = useState([]);

  const configColumns = {
    nome: { field: "nome", header: "Nome", width: 230, type: "string" },
    endereco: {
      field: "endereco",
      header: "Endereço",
      width: 330,
      type: "string",
    },
    telefone: {
      field: "telefone",
      header: "Telefone",
      width: 160,
      type: "string",
    },
    dependentes: {
      field: "hasDependentes",
      header: "Possui dependentes",
      width: 160,
      type: "string",
    },
    cidade: {
      field: "cidade",
      header: "Cidade",
      width: 160,
      type: "string",
    },
  };
  const {
    state: { selecteds, fields },
    dispatch,
  } = useSelectedRegisters();

  useMemo(() => {
    const dataService = new DataService();
    dataService.getData().then((data) => setRegisters(data));
  }, []);

  const onSelectRegister = (e) => {
    dispatch({ value: e, type: "selecteds" });
  };

  const onColReorder = (e) => {
    const temp = [];
    e.columns.forEach((e) => {
      temp.push(e.props.field);
    });
    dispatch({ value: temp, type: "columnsOrder" });
  };

  const dynamicColumns = fields.map((col, i) => {
    return (
      <Column
        key={configColumns[col].field}
        columnKey={configColumns[col].field}
        field={configColumns[col].field}
        header={configColumns[col].header}
        filter
        filterPlaceholder={`Filtrar por ${configColumns[col].header}`}
      />
    );
  });

  return (
    <div>
      <div className="card">
        <DataTable
          value={registers}
          reorderableColumns
          onColReorder={(e) => onColReorder(e)}
          responsiveLayout="scroll"
          selection={selecteds}
          onSelectionChange={(e) => onSelectRegister(e.value)}
          dataKey="id"
          selectionPageOnly
          paginator
          rows={30}
          size="small"
          showGridlines
          stripedRows
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "3em" }}
          ></Column>
          {dynamicColumns}
        </DataTable>
      </div>
    </div>
  );
};

export default DynaGrade;
