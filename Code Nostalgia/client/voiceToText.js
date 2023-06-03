export function startVoiceRecognition(promptTextArea) {
    // Create a new SpeechRecognition object
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  
    // Set the recognition language
    recognition.lang = 'en-US';
  
    // Set interim results to improve responsiveness
    recognition.interimResults = true;
  
    // Define the event handlers for the recognition events
    recognition.onstart = function() {
      console.log('Speech recognition started...');
    };
  
    recognition.onresult = function(event) {
      var result = event.results[event.results.length - 1];
      var transcript = result[0].transcript;
      var confidence = result[0].confidence;
  
      // Set the transcript as the value of the prompt textarea
      promptTextArea.value = transcript;
  
      // Display the result
      var resultDiv = document.getElementById('result');
      resultDiv.innerHTML = '<p>Transcript: ' + transcript + '</p><p>Confidence: ' + confidence + '</p>';
    };
  
    recognition.onerror = function(event) {
      console.error('Speech recognition error:', event.error);
    };
  
    recognition.onend = function() {
      console.log('Speech recognition ended.');
    };
  
    // Start the recognition
    recognition.start();
  }
  