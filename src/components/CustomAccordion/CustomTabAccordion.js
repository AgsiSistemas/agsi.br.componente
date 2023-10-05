import React, { Fragment } from "react";

import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './CustomTabAccordion.scss'

const CustomTabAccordion = ({ itens, value, onChange, className }) => {

  const handleChange = (value) => {
    onChange(value)
  }

  return (

    <div className="custom-tab-accordion-conteiner">
      {itens?.map((item) => {
        return (


          <Accordion
            expanded={value && value == item.tag}
            onChange={onChange ? () => handleChange(item.tag) : false}
            className={className}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`aria-${item.title}`}
              id={`painel-${item.title}`}
              className="custom-tab-accordion-title-content"
            >
              <Typography className="custom-tab-accordion-title">{item.title}</Typography>
              {item.subTitle &&
                <Typography className="custom-tab-accordion-subtitle">{item.subTitle}</Typography>
              }
            </AccordionSummary>
            <AccordionDetails>

              {
                item.content
              }
            </AccordionDetails>
          </Accordion>
        )
      })}

    </div>
  )
}

export default CustomTabAccordion