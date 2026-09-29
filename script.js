// ===== MENU =====
const menu = document.querySelector("nav ul");
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("ativo");
    });
});


// ===== ANIMAÇÃO AO ROLAR A PÁGINA =====
const elementos = document.querySelectorAll(
    ".card, .plano, .sobre, .galeria img"
);

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("aparecer");
        }
    });
}, {
    threshold: 0.2
});

elementos.forEach(elemento => {
    observer.observe(elemento);
});


// ===== FORMULÁRIO =====
const formulario = document.querySelector(".formulario");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Mensagem enviada com sucesso! 💙");

        formulario.reset();
    });
}