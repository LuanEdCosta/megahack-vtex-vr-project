// recognition.stop() Stop recording audio

AFRAME.registerComponent('speech-recognition', {
  init: function () {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition

    var recognition = new SpeechRecognition()
    var grammar = '#JSGF V1.0;'

    var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
    recognition.continuous = true
    recognition.start()
    setInterval(function () {
      try {
        recognition.start()
      } catch (e) {}
    }, 3000)

    var speechRecognitionList = new SpeechGrammarList()
    speechRecognitionList.addFromString(grammar, 1)

    recognition.grammars = speechRecognitionList
    recognition.interimResults = true
    recognition.lang = 'pt-BR'

    recognition.onresult = function (event) {
      var last = event.results.length - 1
      var command = event.results[last][0].transcript
      onRunCommand(command)
    }

    recognition.onerror = function (event) {
      throw new Error('Error in Spech Recognition')
    }
  }
})
