import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import { DndProvider } from 'react-dnd'
import { NativeTypes } from 'react-dnd-html5-backend'
import {
  MultiBackend,
  getBackendOptions,
  Tree
} from '@minoru/react-dnd-treeview'
import { ExternalNode } from './ExternalNode'
import { CustomNode } from './CustomNode'
import { CustomDragPreview } from './CustomDragPreview'
import styles from './App.module.css'
import { useSelectedRegisters } from '../../context/context'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import Stack from '@mui/material/Stack'

const formatExternalNodes = (nodes, group) => {
  const newExternalNodes = []
  nodes.forEach((element, i) => {
    if (
      !group
        .map(function (a) {
          return a.id
        })
        .includes(element)
    ) {
      newExternalNodes.push({
        id: element,
        parent: 0,
        droppable: false,
        text: element
      })
    }
  })
  return newExternalNodes
}

export const Agrupamento = ({ handleClose }) => {
  const {
    state: { checkedFields, savedTree },
    dispatch
  } = useSelectedRegisters()

  const [tree, setTree] = useState(savedTree)
  const [secondLevel, setSecondLevel] = useState(
    savedTree.some((obj) => obj.id === 11)
  )

  const [externalNodes, setExternalNodes] = useState(
    formatExternalNodes(checkedFields, savedTree)
  )

  useEffect(
    () => setExternalNodes(formatExternalNodes(checkedFields, savedTree)),
    [checkedFields, savedTree]
  )

  useEffect(() => setTree(savedTree), [savedTree])

  const handleDrop = (newTree, options) => {
    const { dropTargetId, monitor } = options
    const itemType = monitor.getItemType()

    if (itemType === NativeTypes.TEXT) {
      const nodeJson = monitor.getItem().text
      const node = JSON.parse(nodeJson)

      node.parent = dropTargetId
      setTree([...newTree, node])
      setExternalNodes(externalNodes.filter((exnode) => exnode.id !== node.id))
      return
    }

    setTree(newTree)
  }

  const handleSalvar = () => {
    const grupo1 = []
    const grupo2 = []
    tree.forEach((el) => {
      if (el.parent === 1) {
        grupo1.push(el.id)
      } else if (el.parent === 11) {
        grupo2.push(el.id)
      }
    })
    if (grupo2.length > 0) {
      dispatch({ value: [grupo1, grupo2], type: 'agrupamento' })
    } else {
      dispatch({ value: [grupo1], type: 'agrupamento' })
    }

    dispatch({ value: tree, type: 'savedTree' })
    handleClose()
  }

  const handleLimpar = () => {
    setSecondLevel(false)
    setTree([
      {
        id: 1,
        parent: 0,
        droppable: true,
        text: 'Grupo 01'
      }
    ])
    setExternalNodes(
      formatExternalNodes(checkedFields, [
        {
          id: 1,
          parent: 0,
          droppable: true,
          text: 'Grupo 01'
        }
      ])
    )
  }

  const handleNewGroup = () => {
    setSecondLevel(true)
    setTree([
      ...tree,
      {
        id: 11,
        parent: 0,
        droppable: true,
        text: 'Grupo 02'
      }
    ])
  }

  return (
    <React.Fragment>
      <Stack
        direction='column'
        justifyContent='space-between'
        alignItems='stretch'
        spacing={0}
        style={{ height: '100%' }}
      >
        <div>
          <Typography variant='h5' gutterBottom sx={{ padding: '8px 12px' }}>
            Opções de Agrupamento
          </Typography>
          <Divider />
        </div>
        <Grid container direction='row' xs={12} className={styles.rootGrid}>
          <div className={styles.externalContainer}>
            <div>
              {externalNodes?.map((node) => (
                <ExternalNode key={node.id} node={node} />
              ))}
            </div>
          </div>
          <Grid>
            <DndProvider
              backend={MultiBackend}
              options={getBackendOptions()}
              debugMode
            >
              <Tree
                rootId={0}
                tree={tree}
                extraAcceptTypes={[NativeTypes.TEXT]}
                initialOpen
                classes={{
                  root: styles.treeRoot,
                  draggingSource: styles.draggingSource,
                  dropTarget: styles.dropTarget
                }}
                render={(node, options) => (
                  <CustomNode node={node} {...options} />
                )}
                dragPreviewRender={(monitorProps) => (
                  <CustomDragPreview monitorProps={monitorProps} />
                )}
                onDrop={handleDrop}
              />
            </DndProvider>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent='space-between'
          alignItems='flex-end'
          flexDirection={{ xs: 'column', sm: 'row' }}
          spacing={2}
        >
          <Grid
            container
            xs={6}
            justifyContent='flex-start'
            style={{ padding: '8px' }}
          >
            <Grid item>
              <Button
                variant='outlined'
                disabled={secondLevel}
                onClick={handleNewGroup}
              >
                Novo grupo
              </Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' onClick={handleLimpar}>
                Limpar
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            xs={6}
            justifyContent='flex-end'
            style={{ padding: '8px' }}
          >
            <Grid item>
              <Button
                variant='contained'
                onClick={handleClose}
                color='error'
                startIcon={<CancelOutlinedIcon />}
              >
                Cancelar
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                onClick={handleSalvar}
                startIcon={<SaveOutlinedIcon />}
              >
                Salvar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </React.Fragment>
  )
}

export default Agrupamento
