//  Start overlay and  shopping chart code 
const openShoppingCartMenu = document.getElementById("shopping-cart-button")
const closeShoppingCartMenu = document.getElementById("close-menu")
const shoppingCartMenu = document.getElementById("mainbox-shopping-cart")
const overlay = document.getElementById("overlay")
const plantManualSearch = document.querySelector("#input-manual-searching")
const productCards = document.querySelectorAll(".product-card")


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

//input filter 

plantManualSearch.oninput = () => {
    for (let card of productCards) {

        console.log("nombre de la planta", card.dataset.nombre)
        console.log("busqueda del usuario en minusculas", plantManualSearch.value.toLowerCase())

        if (card.dataset.nombre.toLowerCase().includes(plantManualSearch.value.toLowerCase())) {
            card.classList.remove("hidden")
        } else {
            card.classList.add("hidden")
        }

    }
}

