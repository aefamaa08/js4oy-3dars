function speakText() {
    let text = document.getElementById("text").value;
    let voiceSelect = document.getElementById("voiceSelect").value;
    let speech = new SpeechSynthesisUtterance(text);
    let voices = speechSynthesis.getVoices();
    
    let selectedVoice = voices.find(voice => voice.lang.includes(voiceSelect));
    if (selectedVoice) {
        speech.voice = selectedVoice;
    }
    
    speechSynthesis.speak(speech);
}

window.speechSynthesis.onvoiceschanged = function() {
    let voices = speechSynthesis.getVoices();
    let voiceSelect = document.getElementById("voiceSelect");
    voiceSelect.innerHTML = "";
    voices.forEach(voice => {
        let option = document.createElement("option");
        option.value = voice.lang;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
};