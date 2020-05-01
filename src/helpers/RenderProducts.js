function renderProducts(productsObject) {
  if (productsObject) {
    Object.keys(productsObject).forEach(function (prodId) {
      var product = productsObject[prodId]

      var productContainer = addElement('a-scene', 'a-entity', {
        id: prodId,
        position: product.position
      })

      addProductPopup(
        {
          id: prodId,
          name: product.name,
          description: product.description,
          price: product.price,
          buttonText: 'Adicionar ao Carrinho'
        },
        productContainer
      )

      addChildElement(productContainer, 'a-entity', {
        scale: product.scale,
        animation: product.animation,
        'gltf-model': product['gltf-model'],
        'pause-on-hover': null,
        'show-element-on-hover': 'element: #' + prodId + ' a-plane'
      })
    })
  }
}
