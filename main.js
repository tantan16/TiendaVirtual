//  Start overlay and  shopping chart code 
const openShoppingCartMenu = document.getElementById("shopping-cart-button")
const closeShoppingCartMenu = document.getElementById("close-menu")
const shoppingCartMenu = document.getElementById("mainbox-shopping-cart")
const overlay = document.getElementById("overlay")
const plantManualSearch = document.querySelector("#input-manual-searching")
const productCards = document.querySelectorAll(".product-card")
const plantScoreFilter = document.querySelectorAll(".plant-score")
const plantClassFilter = document.querySelectorAll(".plant-type-filter")



    openShoppingCartMenu.onclick = () => {
        overlay.classList.remove("hidden")
        shoppingCartMenu.classList.add("show")
    }
 

    closeShoppingCartMenu.onclick = () =>{
        overlay.classList.add("hidden")
        shoppingCartMenu.classList.remove("show")
    }
// Ends shopping cart code 

//Starts the code for the filter section

//input filter plant manual searching 

plantManualSearch.oninput = () => {
    for (let card of productCards) {

        if (card.dataset.name.toLowerCase().includes(plantManualSearch.value.toLowerCase())) {
            card.classList.remove("hidden")
        } else {
            card.classList.add("hidden")
        }

    }
}


// stars-score plant filter 
for (let checkbox of plantScoreFilter) {
    checkbox.oninput = () => {
      for (let card of productCards) {
        card.classList.add('hidden');
        for (let checkbox2 of plantScoreFilter) {
          if (checkbox2.checked) {
            if (checkbox2.value === card.dataset.score) {
              card.classList.remove('hidden');
            }
          }
        } 
      }
    };
  }

// plant-type filter 

for (let checkbox of plantClassFilter) {
    checkbox.oninput = () => {
      for (let card of productCards) {
        card.classList.add('hidden');
        for (let checkbox2 of plantClassFilter) {
          if (checkbox2.checked) {
            if (checkbox2.value === card.dataset.type) {
              card.classList.remove('hidden');
            }
          }
        } 
      }
    };
  }
