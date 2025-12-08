// LOGIN
// LOGIN
const SENHA = "amor"; // Coloque sua senha aqui
const loginBox = document.getElementById("loginBox");
const content = document.getElementById("content");
const entrarBtn = document.getElementById("entrarBtn");
const erro = document.getElementById("erro");
const music = document.getElementById("bgMusic");
const senhaInput = document.getElementById("senha");

// Função de login
function validarLogin() {
  const valor = senhaInput.value;
  if(valor === SENHA){
    loginBox.style.display="none";
    content.style.display="block";
  } else {
    erro.textContent="Senha incorreta ❌";
  }
}

// Clique no botão
entrarBtn.onclick = validarLogin;

// Pressionar Enter no teclado
senhaInput.addEventListener("keydown", function(event){
  if(event.key === "Enter") {  // Verifica se a tecla pressionada é Enter
    validarLogin();
  }
});


// CONTAGEM REGRESSIVA
const year = new Date().getFullYear();
const goal = new Date(year, 11-1, 11);
const countEl = document.getElementById("count");

function atualizarDias() {
  const diff = goal - new Date();
  if(diff<=0){countEl.textContent="Hoje! 🎉"; return;}
  countEl.textContent = Math.floor(diff/86400000) + " dias";
}
atualizarDias();
setInterval(atualizarDias,60000);

// MENSAGEM DE ANIVERSÁRIO
const mensagem = `Laiz… hoje não é apenas mais um dia. 
É o dia em que o mundo ganhou alguém especial, alguém que ilumina o caminho dos outros só por existir.

Eu quero te desejar um feliz aniversário, cheio de paz, alegria e momentos que façam o seu coração sorrir. 
Que Deus te abençoe com muita saúde, sabedoria e sonhos realizados.

Você é uma pessoa única, admirável e muito especial pra mim e para todos. 
Espero que seu novo ano de vida seja leve, cheio de bênçãos e repleto de tudo aquilo que te faz bem.

Que seu dia seja tão especial quanto você. 
(E que tu continue sendo essa pessoa que tem uma vibe boa de verdade ✨)

Parabéns, Laiz! 
Com carinho, Fábio Resende 💖`;

const revealBox = document.getElementById("reveal");
const revealBtn = document.getElementById("revealBtn");
const closeBtn = document.getElementById("closeMsg");

const enviarBtn = document.getElementById("enviarOpniao");
enviarBtn.onclick = () => {
  const textarea = document.getElementById("opniaoInput");
  const mensagem = textarea.value.trim();

  if(mensagem === "") {
    alert("Por favor, escreva sua opinião antes de enviar!");
    return;
  }

  // Seu número do WhatsApp
  const numero = "5592986021680"; // 55 = Brasil, DDD + número
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  // Abre o WhatsApp
  window.open(url, "_blank");

  // Limpa o campo após enviar
  textarea.value = "";
};


// Função para digitar mensagem
function digitar(texto, elem, velocidade = 25) {
  elem.textContent = "";
  elem.style.display = "block";
  let i = 0;
  function escrever() {
    if (i < texto.length) {
      elem.textContent += texto.charAt(i);
      i++;
      setTimeout(escrever, velocidade);
    }
  }
  escrever();
}

// ABRIR / FECHAR MENSAGEM
revealBtn.onclick = () => {
  if(revealBox.style.display === "block"){
    revealBox.style.display = "none";
    music.pause();
  } else {
    // Música começa do início
    music.currentTime = 0;
    music.play();

    // Mostra mensagem
    digitar(mensagem, revealBox);

    // Confetes
    for(let i=0;i<50;i++){
      const c = document.createElement("div");
      c.className="confete";
      c.style.left=Math.random()*100+"vw";
      c.style.background=`hsl(${Math.random()*360},70%,60%)`;
      c.style.animationDelay=(Math.random()*2)+"s";
      document.body.appendChild(c);
      setTimeout(()=>c.remove(),3000);
    }
  }
};

closeBtn.onclick = () => {
  revealBox.style.display="none";
  music.pause();
};

// CORAÇÕES
function criarCoracao(){
  const heart = document.createElement("div");
  heart.className="heart";
  heart.textContent="❤";
  heart.style.left=Math.random()*100+"vw";
  heart.style.fontSize=(16+Math.random()*18)+"px";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
}
setInterval(criarCoracao,700);

// CARROSSEL AUTOMÁTICO
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.slide');
let index = 0;

function moveCarousel() {
  index++;
  if(index >= slides.length){ index=0; }
  track.style.transform = `translateX(-${index*100}%)`;
}
setInterval(moveCarousel,3000);

// LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
document.querySelectorAll('.slide img').forEach(img=>{
  img.onclick = () => {
    lightbox.style.display="flex";
    lightboxImg.src = img.src;
  }
});
document.getElementById("lightbox").onclick = () => { lightbox.style.display="none"; }
document.getElementById("perfilFoto").onclick = () => {
  lightbox.style.display="flex";
  lightboxImg.src = document.getElementById("perfilFoto").src;
};
