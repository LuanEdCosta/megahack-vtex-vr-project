AFRAME.registerComponent('add-to-chart-on-click', {
  schema: {
    productId: { default: '', type: 'string' }
  },
  init: function () {
    var productId = this.data.productId
    var products = localStorage.getItem('PRODUCTS')
    products = products ? JSON.parse(products) : null

    this.el.addEventListener('click', function (e) {
      if (products && productId) {
        addProductToChart(products[productId])

        document
          .querySelector('#inventory')
          .components.inventory.updateInventory()
      }
    })
  }
})
