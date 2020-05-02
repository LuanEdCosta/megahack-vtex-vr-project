function identifyProductFromComand(command) {
  var products = localStorage.getItem('PRODUCTS')
  products = products ? JSON.parse(products) : {}

  var productsIdArray = Object.keys(products)
  var productId = null

  productsIdArray.forEach(function (id, index) {
    const product = products[id]
    var productIndex = index + 1

    var isSelectingFirstProduct = command.indexOf(' um') !== -1
    var isSelectingFirstProduct = command.indexOf('' + productIndex) !== -1
    var isSelectingProductByName = command.indexOf(product.name) !== -1

    if (
      isSelectingFirstProduct ||
      isSelectingProductByName ||
      isSelectingFirstProduct
    )
      productId = id
  })

  return productId
}
