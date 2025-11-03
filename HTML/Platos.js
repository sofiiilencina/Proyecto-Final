var cart = []; // Array que guarda objetos {name: "Nombre", price: XXXXX}
var cartCountElement = document.getElementById("contador_carrito"); 
var cartIcon = document.getElementById("icon-carrito"); 
var cartModal = document.getElementById("resumen-carrito"); 
var closeCart = document.querySelector(".close-carrito"); 
var cartItemsList = document.getElementById("items-carrito"); 
var totalElement = document.getElementById("total"); 
var checkoutButton = document.getElementById("checkout"); 
var purchaseModal = document.getElementById("aviso-final"); 
var closePurchase = document.getElementById("cerrar-aviso"); 


// Busca todos los botones de la clase ".Agregar-al-carrito"
document.querySelectorAll(".Agregar-al-carrito").forEach(function (button) {

    button.addEventListener("click", function (event) {
    event.preventDefault(); // Evita que la página se recargue.
        // 1. Extraer la información del plato
    var productCard = button.closest(".plato");
    var productName = productCard.querySelector("h4").innerHTML;

        // Recupera el precio y lo convierte a número para poder sumar.
    var productPriceText = productCard.querySelector(".precio").innerHTML;
    var productPrice = parseFloat(productPriceText.replace("$", "").replace(",", "").trim());

        // 2. Crea el objeto y lo guarda en el array
    var product = { name: productName, price: productPrice };
    cart.push(product); 

        // 3. Actualiza la vista
    updateCartCount(); 
    updateTotal(); 
    alert("¡" + productName + " agregado al carrito!"); 
     });
});




function updateCartCount() {
// Actualiza el número de productos en el icono con la propiedad .length.
    cartCountElement.innerHTML = cart.length; 
}




function displayCart() {
    // Dibuja la lista de productos y sus precios dentro del modal.
    cartItemsList.innerHTML = '';  // Limpia la lista anterior.

    cart.forEach(function (item, index) { // Recibimos el 'index' para saber qué número de ítem es.
    // Para cada ítem en el carrito, crea un elemento de lista.
    var li = document.createElement("li"); 

        // Agregamos el botón 'X' usando un llamado directo a la nueva función deleteItem(index)
    li.innerHTML = item.name + " - $" + item.price + 
                       ' <button onclick="deleteItem(' + index + ')" style="margin-left: 10px; cursor: pointer; border: 1px solid #ccc; background: #eee; border-radius: 4px; padding: 2px 5px;">X</button>';
        // Muestra Nombre y Precio con el respectivo logo de x para eliminar el producto del carrito.
    cartItemsList.appendChild(li); // Agrega el ítem a la lista visible.
    });

    if (cart.length === 0) {
        cartItemsList.innerHTML = '<li>El carrito está vacío.</li>';
    }
}


function updateTotal() {
// Calcula el total de la compra sumando todos los precios.
    var total = 0; 
    
    for (var i = 0; i < cart.length; i++) {
        total += cart[i].price; // Suma los precios.
    }
    
    totalElement.innerHTML = "Total: $" + total; // Muestra el total en el elemento HTML.
}

function deleteItem(indexToDelete) {
// Usa un bucle for y una condición if para copiar solo los productos que no se quieren borrar.
    var newCart = []; // 1. Crea un carrito nuevo vacío.
    
    // 2. Recorre el carrito actual completo
    for (var i = 0; i < cart.length; i++) {
        
        // 3. Sentencia Condicional if 
        if (i !== indexToDelete) { // Si el índice actual NO es el que queremos borrar
            newCart.push(cart[i]); // Lo agregamos al nuevo carrito (Método .push()).
        }
    }
    
    cart = newCart; // 4. Reemplazamos el carrito viejo por el nuevo.
    
    // 5. Actualiza todo
    updateCartCount(); 
    updateTotal(); 
    displayCart(); 
    alert("Producto eliminado del carrito.");
}




// EVENTO: Abrir el modal del carrito
cartIcon.addEventListener("click", function(event) {
    event.preventDefault();
    cartModal.style.display = "block"; // Muestra la ventana.
    displayCart(); // Actualiza los productos en el modal.
    updateTotal(); // Calcula el total antes de mostrarlo.
});

// EVENTO: Cerrar el modal del carrito
closeCart.addEventListener("click", function() {
    cartModal.style.display = "none"; // Oculta la ventana.
});


// EVENTO: Finalizar Compra (Checkout)
checkoutButton.addEventListener("click", function() {
    
    if (cart.length === 0) {
        alert("Tu carrito está vacío. Agrega productos para finalizar la compra.");
         return;
     }

    // 1. Mostrar el modal de agradecimiento
    purchaseModal.style.display = "block"; 

    // 2. Limpiar y resetear el carrito
    cart = []; 
    updateCartCount(); 
    updateTotal(); // Esto pondrá el total en $0.

    // 3. Ocultar el modal de resumen del carrito
    cartModal.style.display = "none";
});

// EVENTO: Cerrar el aviso final
closePurchase.addEventListener("click", function() {
    purchaseModal.style.display = "none"; // Oculta la ventana de "Gracias por su compra".
});