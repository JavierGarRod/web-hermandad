// Menú responsive
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");

    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    // Cerrar menú al hacer clic en un enlace (móvil)
    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("show");
      }
    });

    // Ejemplo de manejo de formulario (solo en el navegador)
    function enviarFormulario(event) {
      event.preventDefault();
      const datos = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value,
        motivo: document.getElementById("motivo").value,
        mensaje: document.getElementById("mensaje").value,
      };

      // Aquí podrías hacer un fetch() a tu backend o servicio de correo
      console.log("Datos del formulario:", datos);

      const mensajeExito = document.getElementById("mensajeExito");
      mensajeExito.style.display = "block";

      // Opcional: limpiar formulario
      event.target.reset();
    }