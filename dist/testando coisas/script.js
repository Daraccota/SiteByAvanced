document.addEventListener("DOMContentLoaded", function () {
  const elemento = document.querySelector(".parte4-texto");

  const observador = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          elemento.classList.add("aparecendo");
        }
      });
    },
    { threshold: 0.5 } // Define que 50% do elemento deve estar visível para ativar o efeito
  );

  observador.observe(elemento);
});

/**
 * test
 */
document.addEventListener("DOMContentLoaded", function () {
  const text = "Bem-Vindo À ByAvanced";
  const spanElement = document.getElementById("typing-text");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      spanElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100); // Velocidade da digitação
    } else {
      setTimeout(() => {
        spanElement.innerHTML = ""; // Limpa o texto
        index = 0;
        typeWriter(); // Reinicia a animação
      }, 2000); // Tempo de espera antes de reiniciar (2s)
    }
  }

  typeWriter(); // Inicia a animação ao carregar
});
