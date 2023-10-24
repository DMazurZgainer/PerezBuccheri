document.addEventListener("DOMContentLoaded", function () {

    var slider = document.querySelector(".slider");
    var slides = document.querySelectorAll(".slide");
    var slideIndex = 0;
    var slideWidth = slides[0].offsetWidth + 14; // Sumamos 14px para incluir el margen
    var slidesVisible = 3; // Cantidad de imágenes visibles a la vez

    var leftButton = document.querySelector(".slider-button.left");
    var rightButton = document.querySelector(".slider-button.right");

    var lastSlide = document.querySelector(".last-slide");
    var seeMoreButton = lastSlide.querySelector(".see-more-button");

    leftButton.addEventListener("click", function () {
        if (slideIndex > 0) {
            slideIndex--;
            updateSlider();
        }
    });

    rightButton.addEventListener("click", function () {
        if (slideIndex < slides.length - slidesVisible) {
            slideIndex++;
            updateSlider();
        }
    });

    lastSlide.addEventListener("mouseover", function () {
        seeMoreButton.style.display = "inline-block"; // Mostrar el botón al hacer hover en la última imagen
    });

    lastSlide.addEventListener("mouseout", function () {
        seeMoreButton.style.display = "none"; // Ocultar el botón al salir del hover
    });

    // Aplicar margen izquierdo solo a la primera imagen
    slides[0].style.marginLeft = "7px"; // Ajusta el valor del margen izquierdo

    function updateSlider() {
        var offsetX = -slideIndex * slideWidth;
        slider.style.transform = "translateX(" + offsetX + "px)";
    }

    // Inicializar el slider
    updateSlider();

    var rightText = document.querySelector(".right-text");
    rightText.classList.remove("hidden");
    rightText.style.opacity = 1; // Hacer visible con la transición

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Obtén el elemento <section>
    var section = document.querySelector("section");

    // Función para manejar el evento scroll
    function handleScroll() {
        if (isElementInViewport(section)) {
            section.style.animation = "sectionFadeIn 0.5s ease-in-out forwards";
            // Elimina el evento de desplazamiento después de mostrar la animación
            window.removeEventListener("scroll", handleScroll);
        }
    }

    // Agrega el evento de desplazamiento para activar la animación
    window.addEventListener("scroll", handleScroll);

    // Agrega un evento clic al enlace "Proyectos"
    var proyectosLink = document.querySelector(".menu-item a[href='#proyectos']");

    proyectosLink.addEventListener("click", function (e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace

        // Obtén la sección de proyectos por su ID
        var proyectosSection = document.getElementById("proyectos");

        // Desplázate suavemente hacia la sección de proyectos
        proyectosSection.scrollIntoView({
            behavior: "smooth",
        });
    });

    // Agrega un evento clic al enlace "Trayectoria"
    var trayectoriaLink = document.querySelector(".menu-item a[href='#trayectoria']");

    trayectoriaLink.addEventListener("click", function (e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace

        // Obtén la sección de Trayectoria por su ID
        var trayectoriaSection = document.getElementById("trayectoria");

        // Desplázate suavemente hacia la sección de Trayectoria
        trayectoriaSection.scrollIntoView({
            behavior: "smooth",
        });
    });
});