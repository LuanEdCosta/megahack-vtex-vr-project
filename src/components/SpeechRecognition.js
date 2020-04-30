// recognition.stop() Stop recording audio

AFRAME.registerComponent('speech-recognition', {
  init: function () {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition

    var recognition = new SpeechRecognition()
    var grammar = '#JSGF V1.0;'

    var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
    recognition.continuous = true
    recognition.start()

    var speechRecognitionList = new SpeechGrammarList()
    speechRecognitionList.addFromString(grammar, 1)

    recognition.grammars = speechRecognitionList
    recognition.interimResults = false
    recognition.lang = 'pt-BR'

    recognition.onresult = function (event) {
      var last = event.results.length - 1
      var command = event.results[last][0].transcript
      console.log(command)

      if (command.includes('mostrar produto')) {
        var product = document.querySelector('#tenis1Info')
        var camera = document.querySelector('#camera')

        showElement(product, true)
        cloneRotation(product, camera)
      }
    }

    recognition.onerror = function (event) {
      console.log(event.message)

      throw new Error('Error in Spech Recognition')
    }
  }
})
