AFRAME.registerComponent('show-element-on-hover', {
  schema: {
    element: { default: null, type: 'selector' },
    showOnInit: { default: false, type: 'boolean' }
  },
  init: function () {
    var element = this.data.element
    var showOnInit = this.data.showOnInit

    element.object3D.visible = showOnInit

    this.el.addEventListener('mouseenter', (e) => {
      if (element) {
        element.object3D.visible = true
      }
    })

    this.el.addEventListener('mouseleave', () => {
      if (element) {
        element.object3D.visible = false
      }
    })
  }
})
