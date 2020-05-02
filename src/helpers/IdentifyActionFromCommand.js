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

  var isToViewProductDetails = false
  viewList.forEach(function (word) {
    if (lowerCaseCommand.indexOf(word) !== -1) {
      isToViewProductDetails = true
    }
  })
  if (isToViewProductDetails) return 'SHOW_PRODUCT_DETAILS'

  var isToAddToChart = false
  addList.forEach(function (word) {
    if (lowerCaseCommand.indexOf(word) !== -1) {
      isToAddToChart = true
    }
  })
  if (isToAddToChart) return 'ADD_TO_CHART'

  var isToRemoveFromChart = false
  removeList.forEach(function (word) {
    if (lowerCaseCommand.indexOf(word) !== -1) {
      isToRemoveFromChart = true
    }
  })
  if (isToRemoveFromChart) return 'REMOVE_FROM_CHART'

  return null
}
