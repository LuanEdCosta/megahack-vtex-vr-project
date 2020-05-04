function addProductPopup(options, productContainer) {
  if (options && productContainer) {
    var productId = options.id
    var productName = options.name
    var productDescription = options.description
    var productPrice = options.price
    var addToChartButtonText = options.buttonText

    var productPlane = addChildElement(productContainer, 'a-plane', {
      position: '0 1.55 0',
      width: '2',
      height: '2',
      color: 'white',
      rotation: '0 0 0',
      shader: 'flat'
    })

    addChildElement(productPlane, 'a-text', {
      color: '#7300e6',
      position: '-0.84 0.76 0.02',
      width: '3',
      value: productName,
      shader: 'flat'
    })

    addChildElement(productPlane, 'a-text', {
      color: '#555555',
      position: '-0.84 0.32 0.02',
      width: '1.5',
      value: productDescription,
      'wrap-count': '25',
      shader: 'flat'
    })

    addChildElement(productPlane, 'a-text', {
      color: '#00b300',
      position: '-0.84 -0.25 0.02',
      width: '3',
      value: 'R$ ' + productPrice,
      'wrap-count': '18',
      shader: 'flat'
    })

    var addTopChartPlane = addChildElement(productPlane, 'a-plane', {
      position: '0 -0.76 0.02',
      width: '2',
      height: '0.5',
      color: '#7300e6',
      rotation: '0 0 0',
      shader: 'flat',
      'add-to-chart-on-click': {
        productId: productId
      }
    })

    addChildElement(addTopChartPlane, 'a-text', {
      color: 'white',
      position: '-0.65 0 0.02',
      width: '3',
      value: addToChartButtonText,
      shader: 'flat'
    })

    return productPlane
  }

  return null
}
