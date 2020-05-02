function removeProductFromChart(index) {
  if (index || index === 0) {
    var chartProductsJson = localStorage.getItem('CHART')
    var chartProducts = JSON.parse(chartProductsJson) || []
    chartProducts.splice(index, 1)
    localStorage.setItem('CHART', JSON.stringify(chartProducts))
    return true
  }

  return false
}
