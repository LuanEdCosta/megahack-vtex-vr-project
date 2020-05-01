AFRAME.registerComponent('show-element-on-hover', {
  schema: {
    element: { default: null, type: 'selector' },
    showOnInit: { default: false, type: 'boolean' },
    useCameraRotation: { default: true, type: 'boolean' },
    delayToHide: { default: 500, type: 'number' }
  },
  init: function () {
    var element = this.data.element
    var showOnInit = this.data.showOnInit
    var useCameraRotation = this.data.useCameraRotation
    var delayToHide = this.data.delayToHide

    var isWatchingElement = false
    var camera = document.querySelector('#camera')
    element.object3D.visible = showOnInit

    function onHideElement() {
      setTimeout(function () {
        if (element && !isWatchingElement) {
          showElement(element, false)
        }
      }, delayToHide)
    }

    this.el.addEventListener('mouseenter', function (e) {
      if (element) {
        isWatchingElement = true
        showElement(element, true)
        if (useCameraRotation) cloneRotation(element, camera)
      }
    })

    this.el.addEventListener('mouseleave', function (e) {
      isWatchingElement = false
      onHideElement()
    })

    element.addEventListener('mouseenter', function (e) {
      isWatchingElement = true
    })

    element.addEventListener('mouseleave', function (e) {
      isWatchingElement = false
      onHideElement()
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
