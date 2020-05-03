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
        scale: '0.4 0.4 0.4',
        animation: {
          property: 'rotation',
          to: '0 360 0',
          dir: 'alternate',
          dur: '5000',
          loop: 'true',
          easing: 'linear'
        },
        'gltf-model': product['gltf_model'],
        'pause-on-hover': null,
        'show-element-on-hover': 'element: #' + prodId + ' a-plane'
      })
    })
  }
}
