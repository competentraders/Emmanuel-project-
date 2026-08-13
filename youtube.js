const micBtn = document.getElementById('micBtn');
const searchInput = document.getElementById('searchInput');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US'; // change to 'en-NG' for Nigerian English
  recognition.continuous = false;
  recognition.interimResults = false;

  micBtn.addEventListener('click', () => {
    recognition.start();
    micBtn.style.opacity = "0.5"; // faint effect while listening
  });

  recognition.onresult = (event) => {
    const speechText = event.results[0][0].transcript;
    searchInput.value = speechText; // put speech into search box
    micBtn.style.opacity = "1";
  };

  recognition.onerror = () => {
    micBtn.style.opacity = "1";
    alert("Couldn't hear you. Try again");
  };

  recognition.onend = () => {
    micBtn.style.opacity = "1";
  };
} else {
  alert("Speech Recognition not supported in this browser. Try Chrome or Edge.");
}