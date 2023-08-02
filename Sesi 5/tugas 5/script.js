function loopText() {
    const inputText = document.getElementById("inputText").value;
    const loopCount = parseInt(document.getElementById("loopCount").value);
    let outputText = "";
  
    for (let i = 0; i < loopCount; i++) {
      outputText += (i + 1) + ". " + inputText + "<br>";
    }
  
    document.getElementById("outputText").innerHTML = outputText;
  }
  