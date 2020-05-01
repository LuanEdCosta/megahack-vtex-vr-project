function onRunCommand(command) {
  var willShowProduct = command.includes('mostrar produto')
  var willAddToChart = command.includes('comprar produto')

  var products = localStorage.getItem('PRODUCTS')
  products = products ? JSON.parse(products) : {}

  var productsIdArray = Object.keys(products)
  var productId = ''

  productsIdArray.forEach(function (id, index) {
    if (command.includes('' + (index + 1))) {
      productId = id
    }
  })

  // Show product info
  if (willShowProduct && productId) {
    var product = document.querySelector('#' + productId + ' a-plane')
    var camera = document.querySelector('#camera')
    showElement(product, true)
    cloneRotation(product, camera)
  }

  // Add product to chart
  if (willAddToChart && productId) {
    console.log(command)
  }
}
