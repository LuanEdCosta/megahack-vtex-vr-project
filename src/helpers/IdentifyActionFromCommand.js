function identifyActionFromCommand(command) {
  var lowerCaseCommand = command.toLowerCase()

  var viewList = [
    'mostra',
    'mostrar',
    'mostre',
    'olhar',
    'visualizar',
    'observar',
    'analisar',
    'inspecionar'
  ]

  var addList = [
    'compra',
    'comprar',
    'adiciona',
    'adicionar',
    'coloca',
    'colocar',
    'inclui',
    'incluir',
    'põe'
  ]

  var removeList = [
    'tira',
    'tirar',
    'remove',
    'remover',
    'cancela',
    'cancelar',
    'deleta',
    'deletar',
    'apaga',
    'apagar'
  ]

  var endList = [
    'encerra',
    'encerrar',
    'finaliza',
    'finalizar',
    'termina',
    'terminar',
    'fecha',
    'fechar',
  ]

  var cartList = [
    'carrinho',
  ]

  viewList.forEach(function (word) {
    if (lowerCaseCommand.indexOf(word) !== -1) {
      isToViewProductDetails = true
      console.log('SHOW_PRODUCT_DETAILS');
      return 'SHOW_PRODUCT_DETAILS'
    }
  })

  addList.forEach(function (word) {
    if (lowerCaseCommand.indexOf(word) !== -1) {
      isToAddToChart = true
      console.log('ADD_TO_CHART');
      return 'ADD_TO_CHART';
    }
  })

  removeList.forEach(function (word) {
    if (lowerCaseCommand.indexOf(word) !== -1) {
      isToRemoveFromChart = true
      console.log('REMOVE_FROM_CHART');
      return 'REMOVE_FROM_CHART'
    }
  })

  var isToEnd = false
  endList.forEach(function (word) {
    if (lowerCaseCommand.indexOf(word) !== -1) {
      isToEnd = true
      console.log('CHECKOUT');
      return 'CHECKOUT'
    }
  })

  var showCart = false
  cartList.forEach(function (word) {
    if (lowerCaseCommand.indexOf(word) !== -1) {
      showCart = true
      console.log('SHOW_CART');
      return 'SHOW_CART'
    }
  })

  return null
}
