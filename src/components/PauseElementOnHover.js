AFRAME.registerComponent('pause-on-hover', {
  init: function () {
    this.el.addEventListener('mouseenter', function (e) {
      e.target.pause()
    })

    this.el.addEventListener('mouseleave', function (e) {
      e.target.play()
    })
  }
})
