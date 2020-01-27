// Recorremos el array de alimentos para enviar cada alimento a la función de impresión
availableFoodsArray.forEach(eachFood = insertFoodOnCataloguePanel)



// Función que imprime un alimento en el HTML del panel 'Catálogo', recibe el nuevo alimento como argumento 
function insertFoodOnCataloguePanel(oneFood) {

    availableFoodsList.innerHTML += `<li>
                    <img src="${oneFood.img}" alt="${oneFood.name}">
                    <h3>${oneFood.name}</h3>
                    <p>${oneFood.description}</p>
                    <p>Precio: ${oneFood.price}€</p>
                    <button data-food="${oneFood.id}">Añadir</button>
                </li>`
}


// Asociamos a cada botón un evento .onclick para invocar la función que imprime un alimento en el HTML del panel 'Lista de Compra'
let buttons = document.querySelectorAll('#availableFoodsList button')
buttons.forEach(eachButton => {
    eachButton.onclick = insertFoodOnBuyingPanel
})

// Función que imprime un alimento en el HTML del panel 'Lista de Compra'
function insertFoodOnBuyingPanel() {
    let foodID = this.dataset.food
    let selectedFood = availableFoodsArray.find(eachFood => eachFood.id == foodID)
    buyingFoodsList.innerHTML += `<li>
                        <img src="${selectedFood.img}" alt="${selectedFood.name}">
                        <h3>${selectedFood.name}</h3>
                        <p>${selectedFood.description}</p>
                        <p>Energía: ${selectedFood.kcal} kcal. | Proteínas: ${selectedFood.protein} gr. | Grasa: ${selectedFood.fat} gr. | Precio: ${selectedFood.price}€</p>
                    </li>  `

    updateResults(selectedFood)
}


// Inicializamos tanto el total de alimentos como el sumatorio de costes a 0
let totalItems = 0
let totalPrice = 0

// Función que actualiza tanto el total de alimentos como el sumatorio de costes de los mismos, recibe el nuevo alimento como argumento
function updateResults(food) {
    totalPrice += food.price
    totalItems++
    result.innerHTML = `Precio total para ${totalItems} artículo(s): ${totalPrice}€`

    updateCounter(totalItems)
}


// Función que actualiza el contador superior con una pequeña animación, recibe el nuevo valor del contador como argumento
function updateCounter(value) {

    counter.style.opacity = 0

    setTimeout(() => {
        counter.innerHTML = value
        counter.style.opacity = 1
    }, 200)

}