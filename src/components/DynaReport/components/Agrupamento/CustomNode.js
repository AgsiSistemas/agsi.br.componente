import React from 'react'
import Typography from '@mui/material/Typography'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { TypeIcon } from './TypeIcon'
import styles from './CustomNode.module.css'

export const CustomNode = (props) => {
  const { droppable } = props.node
  const indent = props.depth * 24

  const handleToggle = (e) => {
    e.stopPropagation()
    props.onToggle(props.node.id)
  }

  return (
    <div
      className={`tree-node ${styles.root}`}
      style={{ paddingInlineStart: indent }}
    >
      <div
        className={`${styles.expandIconWrapper} ${
          props.isOpen ? styles.isOpen : ''
        }`}
      >
        {props.node.droppable && (
          <div onClick={handleToggle}>
            <ArrowRightIcon />
          </div>
        )}
      </div>
      <TypeIcon droppable={droppable || false} />
      <div className={styles.labelGridItem}>
        <Typography variant='body2'>{props.node.text}</Typography>
      </div>
    </div>
  )
}
