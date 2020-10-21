// shopping chart code 
const openShoppingCartMenu = document.getElementById("shopping-cart-button")
const closeShoppingCartMenu = document.getElementById("close-menu")
const shoppingCartMenu = document.getElementById("menu-shopping-cart")
const overlay = document.getElementById("overlay")

    openShoppingCartMenu.onclick = () => {
        overlay.classList.remove("hidden")
        shoppingCartMenu.classList.remove("hidden")
    }

    closeShoppingCartMenu.onclick = () =>{
        overlay.classList.add("hidden")
        shoppingCartMenu.classList.add("hidden")
    }
    