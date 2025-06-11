function toggleBulb() {
    const bulb = document.getElementById("bulb");
    
    if (bulb.src.includes("bulboff")) {
      bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    } else {
      bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    }
  }
  




  function convertToUpper() {
    const text = document.getElementById("inputText").value;
    document.getElementById("outputText").innerText = text.toUpperCase();
  }
  
  function convertToLower() {
    const text = document.getElementById("inputText").value;
    document.getElementById("outputText").innerText = text.toLowerCase();
  }
  