function onRunCommand(command) {
  var productId = identifyProductFromComand(command)
  var action = identifyActionFromCommand(command)

  if (action && productId) {
    if (action === 'SHOW_PRODUCT_DETAILS') {
      var product = document.querySelector('#' + productId + ' a-plane')
      var camera = document.querySelector('#camera')
      showElement(product, true)
      cloneRotation(product, camera)
    }

    if (action === 'ADD_TO_CHART') {
      var productButtonSelector = '#' + productId + ' [add-to-chart-on-click]'
      var addToChartButton = document.querySelector(productButtonSelector)
      addToChartButton.click()
    }

    if (action === 'REMOVE_FROM_CHART') {
      var chart = localStorage.getItem('CHART')
      chart = chart ? JSON.parse(chart) : []
      var indexToRemove = -1

      chart.forEach(function (product, index) {
        if (product && product.id === productId) {
          indexToRemove = index
        }
      })

      if (indexToRemove !== -1) {
        removeProductFromChart(indexToRemove)
        document
          .querySelector('#inventory')
          .components.inventory.updateInventory()
      }
    }
  }

  if (action === 'CHECKOUT') {
    var checkoutPanel = document.querySelector('#checkout')
    localStorage.clear()
    checkoutPanel.object3D.visible = false
  }

  console.log(command)

  if (action === 'SHOW_CART') {
    document.querySelector('[checkout]').components.checkout.openCheckoutPanel()
  }
}
