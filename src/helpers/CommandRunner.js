function onRunCommand(command) {
  var willShowProduct = command.includes('mostrar produto')
  var willAddToChart = command.includes('comprar produto')

  var selectedProduct = ''
  var productsArray = ['1', '2']
  productsArray.forEach((productNumber) => {
    if (command.includes(productNumber)) {
      selectedProduct = productNumber
    }
  })

  // Show product info
  if (willShowProduct && selectedProduct) {
    var product = document.querySelector('#tenis' + selectedProduct + 'Info')
    var camera = document.querySelector('#camera')
    showElement(product, true)
    cloneRotation(product, camera)
  }

  // Add product to chart
  if (willAddToChart && selectedProduct) {
    console.log(command)
  }
}
