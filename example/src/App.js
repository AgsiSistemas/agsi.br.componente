import React from 'react'

 import {  Conteiner, ConteinerItem } from './components/Conteiner/Conteiner';
 import HeaderAccordion from './components/CustomAccordion/HeaderAccordion'
 import CustomDataTable from './components/CustomDataTable/CustomDataTable';
 import OperationTable from './components/Content/OperationTable'
// import 'agsi.br.component/dist/index.css'

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

            <OperationTable                
                records={[
                  {id:'12343', description:'Teste', resp:'responsavel', text:'Texto'},
                  {id:'25454', description:'Teste 2', resp:'responsavel 2', text:'Texto 2'},
                  {id:'35656', description:'Teste 3', resp:'responsavel 3', text:'Texto 3'},
                  {id:'12343', description:'Teste', resp:'responsavel', text:'Texto'},
                  {id:'25454', description:'Teste 2', resp:'responsavel 2', text:'Texto 2'},
                  {id:'35656', description:'Teste 3', resp:'responsavel 3', text:'Texto 3'},
                  {id:'12343', description:'Teste', resp:'responsavel', text:'Texto'},
                  {id:'25454', description:'Teste 2', resp:'responsavel 2', text:'Texto 2'},
                  {id:'35656', description:'Teste 3', resp:'responsavel 3', text:'Texto 3'},
                  {id:'12343', description:'Teste', resp:'responsavel', text:'Texto'},
                  {id:'25454', description:'Teste 2', resp:'responsavel 2', text:'Texto 2'},
                  {id:'35656', description:'Teste 3', resp:'responsavel 3', text:'Texto 3'},
                  {id:'12343', description:'Teste', resp:'responsavel', text:'Texto'},
                  {id:'25454', description:'Teste 2', resp:'responsavel 2', text:'Texto 2'},
                  {id:'35656', description:'Teste 3', resp:'responsavel 3', text:'Texto 3'}
                ]}
                paginator
                paginatorButton={{ onClick: ()=>alert("teste") }}
                printIcon={false}                              
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
          {/* <CustomDataTable                   
            paginator
            paginatorButton={ { onClick: ()=>alert("teste") }  }
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
          />    */}
          {/* <ExampleComponent text="Create React Library Example 😄" />
          <Button label="teste"/> */}
        </HeaderAccordion>
      </ConteinerItem>
    </Conteiner>
  )
}

export default App
