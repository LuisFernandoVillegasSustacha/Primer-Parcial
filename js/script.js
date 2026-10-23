
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    let cantidad = Number(document.getElementById("cantidad").value);
    let precio = Number(document.getElementById("precio").value);

    if (cantidad <= 0 || precio <= 0) {
        document.getElementById("resultado").innerHTML =
            "<p>Ingrese datos válidos.</p>";
    } else {
        let subtotal = cantidad * precio;
        let descuento = 0;
        let total = subtotal;

        if (subtotal > 200) {
            descuento = subtotal * 0.10;
            total = subtotal - descuento;
        } else {
            descuento = 0;
            total = subtotal;
        }

        document.getElementById("resultado").innerHTML =
            "<h2>Resultado del pedido</h2>" +
            "<p>Subtotal: " + subtotal + "</p>" +
            "<p>Descuento: " + descuento + "</p>" +
            "<p>Total a pagar: " + total + "</p>";
    }
});
