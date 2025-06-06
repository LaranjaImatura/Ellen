window.onload = function () {
  // Textos
  document.getElementById("titulo").textContent = "OI Ellen !";
  document.getElementById("btn1").textContent = "OI !";
  document.getElementById("btn2").textContent = "Chuva de coração";
  document.getElementById("btn3").textContent = "👀👀👀";
  document.getElementById("btn4").textContent = "Tenho uma pergunta pra te fazer..."
  // Texto do popup
  document.getElementById("mensagemPopup").textContent = 
    "Você é uma pessoa incrível, e este site é só uma pequena forma de te mostrar o quanto você é especial, e eu quero muito te conhecer melhor !";

  // Funções dos botões
  document.getElementById("btn1").onclick = mostrarPopup;
  document.getElementById("btn2").onclick = button2;
  document.getElementById("btn3").onclick = button3;
  document.getElementById("btn4").onclick = irParaPergunta;
};

function mostrarPopup() {
  document.getElementById("popup").style.display = "block";
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}

function button2() {
   // Duração total da chuva (em milissegundos)
  const duracao = 3000;

  // Começa a criar corações a cada 100ms
  const intervalo = setInterval(() => {
    criarCoracao();
  }, 100);

  // Para de criar corações após a duração definida
  setTimeout(() => {
    clearInterval(intervalo);
  }, duracao);

}


function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("coraçao");
  coracao.textContent = "💖";

  // Posição horizontal aleatória
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.fontSize = Math.random() * 20 + 20 + "px";

  document.getElementById("chuvaCoracoes").appendChild(coracao);

  // Remover após a animação
  setTimeout(() => {
    coracao.remove();
  }, 3000);
}

function button3() {
  window.open("coracao.html", "_blank");
}

function irParaPergunta(){
  window.location.href = "pergunta.html";
}

function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("coracao"); // sem acento aqui também!
  coracao.textContent = "💖";

  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.fontSize = Math.random() * 20 + 20 + "px";

  document.getElementById("chuvaCoracoes").appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 3000);
}

// Ativa a chuva infinita ao carregar a página
setInterval(criarCoracao, 350);
