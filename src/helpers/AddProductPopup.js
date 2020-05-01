function addProductPopup(options, productContainer) {
  if (options && productContainer) {
    var productName = options.name
    var productDescription = options.description
    var productPrice = options.price
    var addToChartButtonText = options.buttonText

    var productPlane = addChildElement(productContainer, 'a-plane', {
      position: '0 1.55 0',
      width: '2',
      height: '2',
      color: 'white',
      rotation: '0 0 0'
    })

    addChildElement(productPlane, 'a-text', {
      color: '#7300e6',
      position: '-0.84 0.76 0.01',
      width: '3',
      value: productName
    })

    addChildElement(productPlane, 'a-text', {
      color: '#555555',
      position: '-0.84 0.32 0.01',
      width: '1.5',
      value: productDescription,
      'wrap-count': '25'
    })

    addChildElement(productPlane, 'a-text', {
      color: '#00b300',
      position: '-0.84 -0.25 0.01',
      width: '3',
      value: 'R$ ' + productPrice,
      'wrap-count': '18'
    })

    var addTopChartPlane = addChildElement(productPlane, 'a-plane', {
      position: '0 -0.76 0.01',
      width: '2',
      height: '0.5',
      color: '#7300e6',
      rotation: '0 0 0'
    })

    addChildElement(addTopChartPlane, 'a-text', {
      color: 'white',
      position: '-0.65 0 0',
      width: '3',
      value: addToChartButtonText
    })

    return productPlane
  }

  return null
}
