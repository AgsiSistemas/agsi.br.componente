import { isNullValue } from '../../Utils/Utils.js'

export const maskText = (v) => {
  let value = v
  if (value.length > 150) value.preventDefault()

  value = value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ \s]/gi, '').toUpperCase()
  return value
}

export const maskNumber = (v) => {
  let value = v
  if (value.length > 150) value.preventDefault()

  value = value.replace(/\D/g, '')
  return value
}

export const maskWallet = (v) => {
  // 0006.03.00357.01-8
  if (isNullValue(v)) return ''
  let value = v
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{4})(\d{2})/, '$1.$2')
  value = value.replace(/(\d{2})(\d{5})/, '$1.$2')
  value = value.replace(/(\d{5})(\d{2})(\d{1})/, '$1.$2-$3')
  return value
}

export const maskTel = (value) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d{1})/, '($1)$2')
    .replace(/(\d{4,5})(\d{4})/, '$1-$2')
}

export const maskCPF = (value) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export const maskAccount = (value) => {
  return value.replace(/\D/g, '').replace(/(\d{5,8})(\d{1})+?$/, '$1-$2')
}

export const maskAgency = (value) => {
  return value.replace(/\D/g, '').replace(/(\d{3,6})(\d{1})+?$/, '$1-$2')
}

export const maskCpfCnpj = (v) => {
  if (isNullValue(v)) return
  v = v.replace(/\D/g, '')
  if (v.length <= 11) {
    v = v.replace(/(\d{3})(\d)/, '$1.$2')
    v = v.replace(/(\d{3})(\d)/, '$1.$2')
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  } else {
    v = v.replace(/^(\d{2})(\d)/, '$1.$2')
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    v = v.replace(/\.(\d{3})(\d)/, '.$1/$2')
    v = v.replace(/(\d{4})(\d)/, '$1-$2')
  }
  return v
}

const nomeSobrenome = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú]{1,19}\b/gi
