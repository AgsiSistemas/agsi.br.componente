import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { generatePDF } from "../../utils/RelatorioPDF";
import OptionsChecklist from "../OptionsChecklist/OptionsChecklist";
import Agrupamento from "../Agrupamento/Agrupamento";
import Modal from "@mui/material/Modal";
import { useSelectedRegisters } from "../../context/context";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 580,
  minHeight: 340,
  bgcolor: "#fff",
  borderRadius: "5px",
  boxShadow: 24,
  p: 2,
};

function ButtonsList({ listOptions }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    state: { selecteds, fields, options },
  } = useSelectedRegisters();

  const generateObj = async () => {
    const filteredArr = [];

    selecteds?.forEach((element) => {
      const newObj = Object.keys(element)
        .filter((key) => fields.includes(key))
        .reduce((obj, key) => {
          obj[key] = element[key];
          return obj;
        }, {});

      filteredArr.push(newObj);
    });

    await generatePDF(filteredArr, fields, options);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h5" gutterBottom sx={{ color: "#455a64" }}>
        Opções
      </Typography>
      <Divider />
      <Grid container rowSpacing={1}>
        <Grid xs={6}>
          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            style={{ width: "100%" }}
            onClick={async () => generateObj()}
          >
            Visualizar
          </Button>
        </Grid>
        <Grid xs={6}>
          <Button
            variant="contained"
            startIcon={<DescriptionIcon />}
            style={{ width: "100%" }}
          >
            Resumir
          </Button>
        </Grid>
        <Grid xs={6}>
          <Button
            variant="outlined"
            startIcon={<FilterAltIcon />}
            style={{ width: "100%" }}
          >
            Filtrar
          </Button>
        </Grid>
        <Grid xs={6}>
          <Button
            variant="outlined"
            startIcon={<GroupWorkIcon />}
            style={{ width: "100%" }}
            onClick={handleOpen}
          >
            Agrupar
          </Button>
        </Grid>
        <Grid xs={12}>
          <OptionsChecklist
            title="Detalhes do relatório"
            listOptions={listOptions}
          />
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Agrupamento setOpen={setOpen} handleClose={handleClose} />
        </Box>
      </Modal>
    </Box>
  );
}

export default ButtonsList;
