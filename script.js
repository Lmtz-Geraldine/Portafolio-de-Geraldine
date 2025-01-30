document.addEventListener("DOMContentLoaded", function () {
    
    function showSection(sectionId) {
        switch (sectionId) {
            case "inicio":
                window.location.href = "index.html";
                break;
            case "skills":
                window.location.href = "habilidades.html";
                break;
            case "experience":
                window.location.href = "experiencia.html";
                break;
            case "education":
                window.location.href = "educacion.html";
                break;
            case "recommendations":
                window.location.href = "recomendaciones.html";
                break;
            default:
                console.error("Sección no encontrada:", sectionId);
        }
    }

    // Agregar evento a los botones de navegación
    document.querySelectorAll(".nav-button").forEach(button => {
        button.addEventListener("click", function () {
            const sectionId = this.getAttribute("data-section");
            showSection(sectionId);
        });
    });

    // Agregar evento al botón de casita (🏠)
    document.querySelectorAll(".home-button").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Evita que recargue la página
            window.location.href = "index.html#inicio"; // Redirige y ancla correctamente
        });
    });

});
