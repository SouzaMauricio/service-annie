const formatPtBrCurrency = data => data.toLocaleString('pt-Br', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2
})

export {
  formatPtBrCurrency
}
