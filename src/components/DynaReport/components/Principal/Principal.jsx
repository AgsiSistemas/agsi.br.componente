import React from "react";
import FieldsChecklist from "../FieldsChecklist/FieldsChecklist";
import ButtonList from "../ButtonsList/ButtonsList";
import DynaGrade from "../DynaGrade/DynaGrade";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const availableFields = [
  "nome",
  "telefone",
  "endereco",
  // "hasDependentes",
  "dependentes",
  // "qtdDependentes",
  "cidade",
];

const reportOptions = ["totalizar", "agrupar", "datahora"];

export const Principal = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={3}>
          <Item sx={{ marginBottom: "8px" }}>
            <FieldsChecklist
              title="Campos disponiveis"
              listOptions={availableFields}
            />
          </Item>

          <Item sx={{ marginBottom: "8px" }}>
            <ButtonList
              availableFields={availableFields}
              listOptions={reportOptions}
            />
          </Item>
        </Grid>

        <Grid xs>
          <Item>
            <DynaGrade />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Principal;
