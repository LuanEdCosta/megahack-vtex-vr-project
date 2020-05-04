function identifyActionFromCommand(command) {
  var lowerCaseCommand = command.toLowerCase()
  var action = null

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
    'fechar'
  ]

  var cartList = ['carrinho']

  viewList.forEach(function (word) {
    if (lowerCaseCommand.indexOf(word) !== -1) {
      action = 'SHOW_PRODUCT_DETAILS'
    }
  })

  addList.forEach(function (word) {
    if (lowerCaseCommand.indexOf(word) !== -1) {
      isToAddToChart = true
      action = 'ADD_TO_CHART'
    }
  })

  removeList.forEach(function (word) {
    if (lowerCaseCommand.indexOf(word) !== -1) {
      isToRemoveFromChart = true
      action = 'REMOVE_FROM_CHART'
    }
  })

  var isToEnd = false
  endList.forEach(function (word) {
    if (lowerCaseCommand.indexOf(word) !== -1) {
      isToEnd = true
      action = 'CHECKOUT'
    }
  })

  var showCart = false
  cartList.forEach(function (word) {
    if (lowerCaseCommand.indexOf(word) !== -1) {
      showCart = true
      action = 'SHOW_CART'
    }
  })

  return action
}
