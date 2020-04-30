AFRAME.registerComponent('pause-on-hover', {
  init: function () {
    this.el.addEventListener('mouseenter', (e) => {
      e.target.pause()
    })

    this.el.addEventListener('mouseleave', (e) => {
      e.target.play()
    })
  }
})
