function coloredGreen() {
    // Parcourir tous les onglets ouverts
    chrome.tabs.query({active : true, currentWindow : true}, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: () => {
            let nodeList = document.querySelectorAll("*");
            for (let i = 0; i < nodeList.length; i++) {
              nodeList[i].style.backgroundColor = "#008F11";
              nodeList[i].style.color = "#008F11";
            }
          }
        });
      });
  }
  
  document.getElementById("coloredGreen").addEventListener("click", coloredGreen);