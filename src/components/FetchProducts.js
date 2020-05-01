AFRAME.registerComponent('fetch-products', {
  init: function () {
    var data = {
      afehaoiueaefh: {
        id: 'afehaoiueaefh',
        name: 'Tenis 1',
        description: 'Um produto legal',
        price: 500,
        'gltf-model': '#tennis',
        position: '-1.5 1.45 -3',
        scale: '0.01 0.01 0.01',
        animation: {
          property: 'rotation',
          to: '0 360 0',
          dir: 'alternate',
          dur: '5000',
          loop: 'true',
          easing: 'linear'
        }
      },
      feuaefubfaiobn: {
        id: 'feuaefubfaiobn',
        name: 'Tenis 1',
        description: 'Um produto legal',
        price: 500,
        'gltf-model': '#tennis',
        position: '0 1.45 -3',
        scale: '0.01 0.01 0.01',
        animation: {
          property: 'rotation',
          to: '0 360 0',
          dir: 'alternate',
          dur: '5000',
          loop: 'true',
          easing: 'linear'
        }
      },
      asdofihaoifha: {
        id: 'asdofihaoifha',
        name: 'Tenis 1',
        description: 'Um produto legal',
        price: 500,
        'gltf-model': '#tennis',
        position: '1.5 1.45 -3',
        scale: '0.01 0.01 0.01',
        animation: {
          property: 'rotation',
          to: '0 360 0',
          dir: 'alternate',
          dur: '5000',
          loop: 'true',
          easing: 'linear'
        }
      }
    }

    localStorage.setItem('PRODUCTS', JSON.stringify(data))
    renderProducts(data)
  }
})
