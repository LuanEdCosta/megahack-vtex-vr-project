AFRAME.registerComponent('checkout', {
  init: function () {
    document.addEventListener('keydown', function (e) {
      if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return
      if (e.keyCode === 67) {
        console.log('Checkout')
      }
    })
  }
})
