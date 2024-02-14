document.addEventListener("DOMContentLoaded", function() {
    const listaContratos = document.getElementById("listaContratos");
    const eliminarButton = document.getElementById("eliminarButton");

    // Agregar eventos al botón de eliminar
    eliminarButton.addEventListener("click", () => {
        // Obtener todos los elementos de la lista
        const elementos = listaContratos.querySelectorAll("li");
        
        // Agregar clase de temblor a cada elemento de la lista
        elementos.forEach(elemento => {
            elemento.classList.add("shake");
        });

        // Esperar un tiempo para dar tiempo al efecto de temblor
        setTimeout(() => {
            // Eliminar todos los elementos de la lista
            elementos.forEach(elemento => {
                elemento.remove();
            });
        }, 600); // 600ms es la duración del efecto de temblor (0.6s)
    });

    // Agregar eventos a los elementos de la lista para eliminarlos individualmente
    listaContratos.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            event.target.parentElement.remove();
        }
    });
});
