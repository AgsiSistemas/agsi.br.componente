import React from 'react'

import { ExampleComponent, Conteiner, ConteinerItem , Button, HeaderAccordion} from 'agsi.br.component';
import CustomDataTable from './CustomDataTable/CustomDataTable';
import 'agsi.br.component/dist/index.css'

const App = () => {
  return(
    <Conteiner>
      <ConteinerItem>
        <HeaderAccordion  
          disableAttachButton={ false }
          disableExpandedButton={ false } 
          titleTooltip="Fixar" 
          header={ "Cabeçalho" }           
        >
          <CustomDataTable                   
            records={[
              {id:'12343', description:'Teste', resp:'responsavel', text:'Texto'},
              {id:'25454', description:'Teste 2', resp:'responsavel 2', text:'Texto 2'},
              {id:'35656', description:'Teste 3', resp:'responsavel 3', text:'Texto 3'}
            ]}
            columnList={[            
              {  
                style:{ width:'150px' },
                sortable: true, 
                field:"id", 
                header:"Código" 
              },
              {  
                style:{ minWidth:'600px' },
                sortable: true, 
                field:"description", 
                header:"Descrição" 
              },
              {  
                style:{ minWidth:'600px' },
                sortable: true, 
                field:"text", 
                header:"Texto" 
              },
            ]}
          />   
          {/* <ExampleComponent text="Create React Library Example 😄" />
          <Button label="teste"/> */}
        </HeaderAccordion>
      </ConteinerItem>
    </Conteiner>
  )
}

export default App
