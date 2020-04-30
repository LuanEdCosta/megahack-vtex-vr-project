AFRAME.registerComponent('show-element-on-hover', {
  schema: {
    element: { default: null, type: 'selector' },
    showOnInit: { default: false, type: 'boolean' },
    useCameraRotation: { default: true, type: 'boolean' }
  },
  init: function () {
    var element = this.data.element
    var showOnInit = this.data.showOnInit
    var useCameraRotation = this.data.useCameraRotation

    var camera = document.querySelector('#camera')
    element.object3D.visible = showOnInit

    this.el.addEventListener('mouseenter', (e) => {
      if (element) {
        showElement(element, true)
        if (useCameraRotation) cloneRotation(element, camera)
      }
    })

    this.el.addEventListener('mouseleave', () => {
      if (element) showElement(element, false)
    })
  },
  tick: function () {
    var element = this.data.element
    if (element.object3D.visible) {
      var useCameraRotation = this.data.useCameraRotation
      var camera = document.querySelector('#camera')
      if (useCameraRotation) cloneRotation(element, camera)
    }
  }
})
