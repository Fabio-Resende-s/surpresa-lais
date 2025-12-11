document.addEventListener("DOMContentLoaded", function () {
  // Elementos DOM
  const loginBox = document.getElementById("loginBox");
  const content = document.getElementById("content");
  const senhaInput = document.getElementById("senha");
  const entrarBtn = document.getElementById("entrarBtn");
  const erroMsg = document.getElementById("erro");
  const revealBtn = document.getElementById("revealBtn");
  const revealDiv = document.getElementById("reveal");
  const closeMsg = document.getElementById("closeMsg");
  const mensagemEspecial = document.getElementById("mensagemEspecial");
  const countElement = document.getElementById("count");
  const opniaoInput = document.getElementById("opniaoInput");
  const enviarOpniaoBtn = document.getElementById("enviarOpniao");
  const diasConhecidos = document.getElementById("diasConhecidos");
  const sorrisos = document.getElementById("sorrisos");
  const bgMusic = document.getElementById("bgMusic");
  const heartsContainer = document.getElementById("heartsContainer");

  // Variável para controlar se a música já foi tocada
  let musicaTocada = false;
  let musicaAtiva = false;

  // Senha correta (dia do aniversário dela - 11)
  const SENHA_CORRETA = "11";

  // Configurar data do aniversário (11 de abril)
  //const hoje = new Date();
  //const aniversario = new Date(hoje.getFullYear(), 3, 11); // Abril é mês 3 (0-indexed)

  // Se o aniversário já passou este ano, considerar próximo ano
  //if (hoje > aniversario) {
   // aniversario.setFullYear(aniversario.getFullYear() + 1);
  //}

  // Calcular dias faltantes para o aniversário
  //const diffTime = aniversario.getTime() - hoje.getTime();
 // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  

 
  // Criar corações flutuantes
  function criarCoracoes() {
    for (let i = 0; i < 50; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "❤";
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDelay = `${Math.random() * 15}s`;
      heart.style.fontSize = `${Math.random() * 15 + 10}px`;
      heartsContainer.appendChild(heart);
    }
  }

  criarCoracoes();

  // Função para tocar música
  function tocarMusica() {
    if (musicaAtiva) return; // Se já está tocando, não fazer nada
    
    bgMusic.volume = 0.3;
    bgMusic.play().then(() => {
      musicaTocada = true;
      musicaAtiva = true;
      console.log("Música iniciada ao abrir a mensagem especial!");
    }).catch((e) => {
      console.log(
        "Reprodução automática bloqueada. Tente clicar novamente."
      );
    });
  }

  // Função para parar música
  function pararMusica() {
    if (musicaAtiva) {
      bgMusic.pause();
      bgMusic.currentTime = 0; // Volta para o início
      musicaAtiva = false;
      console.log("Música pausada ao fechar a mensagem especial!");
    }
  }

  // Login
  entrarBtn.addEventListener("click", function () {
    const senha = senhaInput.value.trim();

    if (senha === SENHA_CORRETA) {
      // Login bem-sucedido
      loginBox.style.opacity = "0";

      setTimeout(() => {
        loginBox.style.display = "none";
        content.style.display = "block";

        // Mostrar mensagem de boas-vindas
        setTimeout(() => {
          alert(
            "🎉 Bem-vinda ao seu presente especial, Laís! 🎂\n\nEspero que goste desta surpresa feita com todo carinho para você. 💖"
          );
        }, 500);
      }, 500);
    } else {
      // Senha incorreta
      erroMsg.textContent = "Senha incorreta. Tente novamente!";
      senhaInput.style.borderColor = "#ff4757";

      // Limpar erro após 3 segundos
      setTimeout(() => {
        erroMsg.textContent = "";
        senhaInput.style.borderColor = "#e0c8f1";
      }, 3000);
    }
  });

  // Permitir login com Enter
  senhaInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      entrarBtn.click();
    }
  });

  // SUA NOVA MENSAGEM ESPECIAL
  const mensagem = `
    <p style="margin-bottom: 15px; font-size: 1.1em;">Laís… hoje não é apenas mais um dia.</p>
    <p style="margin-bottom: 15px; font-size: 1.1em;">É o dia em que o mundo ganhou alguém especial, alguém que ilumina o caminho dos outros só por existir.</p>
    
    <p style="margin-bottom: 15px; font-size: 1.1em;">Quero te desejar um feliz aniversário cheio de paz, alegria e momentos que façam o seu coração sorrir. Que Deus te abençoe com muita saúde, sabedoria e muitos sonhos realizados.</p>
    
    <p style="margin-bottom: 15px; font-size: 1.1em;">Você é uma pessoa única, admirável e muito especial — pra mim e para todos ao seu redor. Mesmo à distância, admiro demais a pessoa incrível que você é, com essa vibe boa que só você tem.</p>
    
    <p style="margin-bottom: 15px; font-size: 1.1em;">Espero que seu novo ano de vida seja leve, cheio de bênçãos e repleto de tudo aquilo que te faz bem. Que seu dia seja tão especial quanto você.</p>
    
    <p style="margin-bottom: 20px; font-size: 1.1em;">E, quem sabe, que um dia a gente possa se conhecer pessoalmente e compartilhar bons momentos.</p>
    
    <p style="margin-top: 25px; text-align: center; color: #d63384; font-weight: bold; font-size: 1.2em;">
      Parabéns, Laís!<br>
      Com carinho,<br>
      Fábio Resende 💖
    </p>
  `;

  // Revelar mensagem especial
  revealBtn.addEventListener("click", function () {
    mensagemEspecial.innerHTML = mensagem;
    revealDiv.style.display = "flex";
    revealBtn.style.display = "none";

    // AGORA A MÚSICA COMEÇA AQUI - quando ela clica para ver a mensagem especial
    tocarMusica();

    // Efeito de confete simulado
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("heart");
      confetti.innerHTML = "🎉";
      confetti.style.position = "fixed";
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.top = `${Math.random() * 100}%`;
      confetti.style.zIndex = "1002";
      confetti.style.fontSize = "25px";
      confetti.style.animation = "floatHeart 5s linear forwards";
      document.body.appendChild(confetti);

      // Remover após animação
      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }
  });

  // Fechar mensagem especial
  closeMsg.addEventListener("click", function () {
    revealDiv.style.display = "none";
    revealBtn.style.display = "block";
    
    // PARAR MÚSICA quando fechar a mensagem
    pararMusica();
  });

  // Enviar opinião
  enviarOpniaoBtn.addEventListener("click", function () {
    const mensagem = opniaoInput.value.trim();

    if (mensagem) {
      alert(
        "Obrigado por compartilhar sua mensagem, Laís! 💖\n\nSua opinião é muito importante para mim. Espero que tenha gostado da surpresa!"
      );
      opniaoInput.value = "";

      // Simular envio (em um caso real, aqui iria para um servidor)
      console.log("Música está ativa?", musicaAtiva);
      console.log("Música já foi tocada?", musicaTocada);
      console.log("Mensagem enviada:", mensagem);
    } else {
      alert("Por favor, escreva uma mensagem antes de enviar. 😊");
    }
  });

  // Lightbox para imagens do carrossel
  const slides = document.querySelectorAll(".slide img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");

  slides.forEach((img) => {
    img.addEventListener("click", function () {
      lightboxImg.src = this.src;
      lightbox.style.display = "flex";
    });
  });

  // Fechar lightbox
  lightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
  });

  // Efeito de digitação na mensagem especial (opcional)
  function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = "";

    function typing() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    }

    typing();
  }

  // Ativar efeito de digitação se a mensagem for revelada
  revealBtn.addEventListener("click", function () {
    // Aguardar um pouco antes de iniciar a animação de digitação
    setTimeout(() => {
      mensagemEspecial.innerHTML = "";
      typeWriter(
        mensagemEspecial,
        `Laís… hoje não é apenas mais um dia.

É o dia em que o mundo ganhou alguém especial, alguém que ilumina o caminho dos outros só por existir.

Quero te desejar um feliz aniversário cheio de paz, alegria e momentos que façam o seu coração sorrir. Que Deus te abençoe com muita saúde, sabedoria e muitos sonhos realizados.

Você é uma pessoa única, admirável e muito especial — pra mim e para todos ao seu redor. Mesmo à distância, admiro demais a pessoa incrível que você é, com essa vibe boa que só você tem.

Espero que seu novo ano de vida seja leve, cheio de bênçãos e repleto de tudo aquilo que te faz bem. Que seu dia seja tão especial quanto você.

E, quem sabe, que um dia a gente possa se conhecer pessoalmente e compartilhar bons momentos.

Parabéns, Laís!
Com carinho,
Fábio Resende 💖`,
        30
      );
    }, 300);
  });
});

// CAIXINHA DE MÚSICA
const audioPlayer = document.getElementById("audioPlayer");
const musicSelect = document.getElementById("musicSelect");
const playBtn = document.getElementById("playBtn");
const musicName = document.getElementById("musicName");

let isPlaying = false;

playBtn.onclick = () => {
  if (!isPlaying) {
    audioPlayer.src = "./musicas/" + musicSelect.value;
    audioPlayer.play();
    playBtn.textContent = "⏸ Pausar";
    musicName.textContent = "Tocando: " + musicSelect.options[musicSelect.selectedIndex].text;
    isPlaying = true;
  } else {
    audioPlayer.pause();
    playBtn.textContent = "▶ Tocar";
    musicName.textContent = "Pausada";
    isPlaying = false;
  }
};

