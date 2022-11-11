import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export const handleLoading = (text, isLoading) => {
  return isLoading ? <CircularProgress /> : text
}
export const isNullValue = (value) => {
  return ((value === undefined) || (value === null) || (value === ""))
}