var elementoduvidas = document.querySelectorAll(".duvida");

elementoduvidas.forEach(function(duvida) {
    duvida.addEventListener('click', function() {
        duvida.classList.toggle('ativa');
    });
});