let listen = new SpeechSynthesisUtterance();
let textbox = document.querySelector("textarea");
let btn = document.querySelector("#listen");
let del = document.querySelector("#delete");
let arr = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    arr = window.speechSynthesis.getVoices();
    listen.voice = arr[0];

    arr.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
})

btn.addEventListener("click",()=>{
    listen.text = textbox.value;
    window.speechSynthesis.speak(listen);
})

del.addEventListener("click",()=>{
    textbox.value = "";
})