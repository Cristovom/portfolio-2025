// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new SpeechRecognition();
// recognition.lang = "pt-br";
// recognition.start();

// recognition.addEventListener("result", function(e) {
//   console.log(e.results[0][0].transcript);
// })

const SpeechSynthesis = window.SpeechSynthesis || window.webkitSpeechSynthesis;

const synthesis = new speechSynthesis();
synthesis.lang = "pt-br";
synthesis.start();

synthesis.addEventListener("result", function(e) {
  console.log(e);
})