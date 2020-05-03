

AFRAME.registerComponent('fetch-products', {
  init: function () {

    axios.get('https://api-hackaton.herokuapp.com/products')
    .then(function (response) {

      console.log(response.data);
      localStorage.setItem('PRODUCTS', JSON.stringify(response.data))
      renderProducts(response.data)

    })
    .catch(function (error) {
      return error;
    });




  }
})
