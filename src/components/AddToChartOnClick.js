AFRAME.registerComponent('add-to-chart-on-click', {
  schema: {
    productId: { default: '', type: 'string' }
  },
  init: function () {
    var productId = this.data.productId
    var products = localStorage.getItem('PRODUCTS')
    products = products ? JSON.parse(products) : null

    this.el.addEventListener('click', function (e) {
      var productInfoElement = document.querySelector(
        '#' + productId + ' a-plane'
      )

      var isOriginatedFromATrueClick = e instanceof CustomEvent

      var isAClickInAHiddenElement =
        isOriginatedFromATrueClick && !productInfoElement.object3D.visible

      var checkoutElement = document.querySelector('#checkout')
      var isCheckoutVisible = checkoutElement.object3D.visible

      if (
        products &&
        productId &&
        !isAClickInAHiddenElement &&
        !isCheckoutVisible
      ) {
        var newProduct = products[productId]
        newProduct.quantity = 1

        addProductToChart(newProduct)

        document
          .querySelector('#inventory')
          .components.inventory.updateInventory()
      }
    })
  }
})
