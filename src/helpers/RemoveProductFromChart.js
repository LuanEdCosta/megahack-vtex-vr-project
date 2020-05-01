function removeProductFromChart(product) {
  var chartProductsJson = localStorage.getItem('CHART')
  var chartProducts = JSON.parse(chartProductsJson) || []

  var productFoundIndex = -1
  chartProducts.forEach((prod, index) => {
    if (prod && prod.id === product.id) {
      productFoundIndex = index
    }
  })

  if (productFoundIndex === -1) return false

  chartProducts.splice(productFoundIndex, 1)
  localStorage.setItem('CHART', JSON.stringify(chartProducts))

  return true
}
