function addProductToChart(product) {
  var chartProductsJson = localStorage.getItem('CHART')
  var chartProducts = JSON.parse(chartProductsJson) || []

  var productFound = false
  chartProducts.forEach((prod) => {
    if (prod && prod.id === product.id) {
      productFound = true
    }
  })

  if (productFound) return false

  chartProducts.push(product)
  localStorage.setItem('CHART', JSON.stringify(chartProducts))

  return true
}
