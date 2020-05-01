function changeProductQuantity(product, actionType) {
  var isToIncrement = actionType === 'increment'

  var chartProductsJson = localStorage.getItem('CHART')
  var chartProducts = JSON.parse(chartProductsJson) || []

  var productClone = null
  var productFoundIndex = -1

  chartProducts.forEach((prod, index) => {
    if (prod.id === product.id) {
      productClone = Object.assign({}, prod)
      productFoundIndex = index
    }
  })

  if (!productClone) return false

  if (isToIncrement) {
    productClone.quantity = productClone.quantity + 1
  } else if (productClone.quantity > 0) {
    productClone.quantity = productClone.quantity - 1
  }

  chartProducts[productFoundIndex] = productClone

  localStorage.setItem('CHART', JSON.stringify(chartProducts))

  return true
}
