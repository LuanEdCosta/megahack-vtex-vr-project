AFRAME.registerComponent('checkout', {
  init: function () {
    var componentReference = this

    var checkoutContainer = addElement('a-cursor', 'a-plane', {
      id: 'checkout',
      color: 'white',
      position: '0 0 0.02',
      width: '2',
      height: '1.05',
      shader: 'flat'
    })

    checkoutContainer.object3D.visible = false

    document.addEventListener('keydown', function (e) {
      if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return
      if (e.keyCode === 67) {
        componentReference.openCheckoutPanel()
      }
    })
  },
  createProductItems: function () {
    var chart = localStorage.getItem('CHART')
    chart = chart ? JSON.parse(chart) : []
    chart = chart.reverse()

    var checkoutPanel = document.querySelector('#checkout')
    var checkoutProductsContainer = checkoutPanel.querySelector(
      '#checkoutProducts'
    )

    if (checkoutProductsContainer) {
      checkoutProductsContainer.remove()
    }

    checkoutProductsContainer = addChildElement(checkoutPanel, 'a-entity', {
      id: 'checkoutProducts'
    })

    if (checkoutProductsContainer.hasChildNodes()) {
      checkoutProductsContainer.removeChild()
    }

    chart.forEach(function (product, index) {
      var yPosition = 0.3 + index * 0.05
      var valueText =
        product.quantity + 'x    ' + product.name + '    R$ ' + product.price

      addChildElement(checkoutProductsContainer, 'a-text', {
        color: 'black',
        position: '-0.9 ' + yPosition + ' 0.04',
        value: valueText,
        width: '1',
        shader: 'flat'
      })
    })
  },
  createTotalValuePanel: function () {
    var checkoutPanel = document.querySelector('#checkout')
    var chart = localStorage.getItem('CHART')
    chart = chart ? JSON.parse(chart) : []

    var totalValue = 0
    chart.forEach(function (product) {
      try {
        totalValue += Number(product.quantity) * Number(product.price)
      } catch (e) {
        totalValue += 0
      }
    })

    var totalValuePanel = document.querySelector('#totalValuePanel')
    if (totalValuePanel) totalValuePanel.remove()

    totalValuePanel = addChildElement(checkoutPanel, 'a-plane', {
      id: 'totalValuePanel',
      color: '#7300e6',
      height: '1',
      width: '1',
      position: '0.465 0 0.02',
      shader: 'flat'
    })

    addChildElement(totalValuePanel, 'a-text', {
      color: '#eeeeee',
      width: '1.5',
      position: '-0.42 0.3 0.02',
      value: 'Valor Total',
      shader: 'flat'
    })

    addChildElement(totalValuePanel, 'a-text', {
      color: 'white',
      width: '2',
      position: '-0.42 0.2 0.02',
      value: 'R$ ' + Number(totalValue).toFixed(2),
      shader: 'flat'
    })

    var buyButton = addChildElement(totalValuePanel, 'a-plane', {
      color: 'white',
      height: '0.2',
      width: '0.9',
      position: '-0.008 -0.355 0.02',
      shader: 'flat'
    })

    addChildElement(buyButton, 'a-text', {
      color: '#7300e6',
      width: '1',
      position: '-0.16 0 0.02',
      value: 'Finalizar Compra',
      shader: 'flat'
    })
  },
  openCheckoutPanel: function () {
    var checkoutPanel = document.querySelector('#checkout')
    var inventory = document.querySelector('#inventory')

    this.createProductItems()
    this.createTotalValuePanel()

    checkoutPanel.object3D.visible = !checkoutPanel.object3D.visible
    inventory.object3D.visible = !inventory.object3D.visible
  }
})
