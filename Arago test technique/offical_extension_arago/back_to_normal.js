function backToNormal() {
    // Parcourir tous les onglets ouverts
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        // Injecter le script dans chaque onglet
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: () => {
            let nodeList = document.querySelectorAll("*");
            for (let i = 0; i < nodeList.length; i++) {
              nodeList[i].style.backgroundColor = "";
              nodeList[i].style.color = "";
            }
          }
        });
      });
    });
  }
  
  document.getElementById("backToNormal").addEventListener("click", backToNormal);