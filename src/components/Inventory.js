AFRAME.registerComponent('inventory', {
  schema: {},
  init: function () {
    for (var i = 0; i < 10; i++) {
      addChildElement(this.el, 'a-plane', {
        color: 'black',
        transparent: 'true',
        opacity: '0.6',
        position: [-0.44 + i * 0.0977, 0.015, 0.02],
        width: '0.08',
        height: '0.08'
      })
    }

    var componentReference = this
    document.addEventListener('keydown', function (e) {
      if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return

      if (
        (e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 96 && e.keyCode <= 105)
      ) {
        componentReference.selectSlot(Number(e.key))
      }
    })

    this.selectSlot(1)
    this.updateInventory()
  },
  updateInventory: function () {
    var chart = localStorage.getItem('CHART')
    chart = chart ? JSON.parse(chart) : []

    var inventorySlots = document.querySelectorAll('#inventory a-plane')

    chart.forEach(function (product, index) {
      var inventarySlot = inventorySlots[index]
      addChildElement(inventarySlot, 'a-entity', {
        scale: '0.0006 0.0006 0.0006',
        rotation: '0 90 0',
        position: '0.007 0 0.02',
        'gltf-model': product['gltf-model']
      })
    })
  },
  selectSlot(slotIndex) {
    if (slotIndex) {
      this.selectedSlot = slotIndex
      var inventorySlots = document.querySelectorAll('#inventory a-plane')

      inventorySlots.forEach(function (inventarySlot) {
        inventarySlot.setAttribute('color', 'black')
      })

      var inventarySlot = inventorySlots[slotIndex - 1]
      inventarySlot.setAttribute('color', '#7300e6')
    }
  }
})
