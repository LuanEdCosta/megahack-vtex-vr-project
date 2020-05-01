AFRAME.registerComponent('add-to-chart-on-click', {
  init: function () {
    this.el.addEventListener('click', function (e) {
      addProductToChart({
        id: 0,
        name: 'Nike Shoes'
      })
    })
  }
})
