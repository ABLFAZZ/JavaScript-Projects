let speech = new SpeechSynthesisUtterance();



let voices = [];

let selectVoices = document.querySelector("select")

window.speechSynthesis.onvoiceschanged =( )=>{
       voices =  window.speechSynthesis.getVoices()
         speech.voice = voices[0];

         voices.forEach((voice, i) => (selectVoices .options[i] = new Option(voice.name,i)))
}

selectVoices.addEventListener("change",()=>{
      speech.voice = voices[selectVoices.value]
})







let converterButton = document.querySelector(".coverter-btn").addEventListener("click",()=>{
      speech.text = document.querySelector("#text-area").value;
      window.speechSynthesis.speak(speech);
})