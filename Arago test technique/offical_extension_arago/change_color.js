function colorSelected(color) {
  // Parcourir tous les onglets ouverts
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: (color) => {
          // Appliquer la couleur sélectionnée à tous les éléments
          let nodeList = document.querySelectorAll("*");
          for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.backgroundColor = color;
            nodeList[i].style.color = color;
          }
        },
        args: [color] // Passer la couleur comme argument
      });
    }
  });
}

// Ajouter un écouteur d'événement pour l'input de couleur
document.getElementById("colorPicker").addEventListener("change", (event) => {
  const color = event.target.value;
  colorSelected(color);
});