
const questoes = [
    {
      pergunta: "1. O que significa HTML?",
      alternativas: [
        "HyperText Markup Language",
        "HighText Machine Language",
        "HyperTool Multi Language",
        "HomeText Markup Link"
      ],
      correta: 0,
      dica: "É a linguagem de marcação usada para estruturar páginas web.",
      dificuldade: "🌸 Fácil"
    },
    {
      pergunta: "2. Qual símbolo é usado para comentários de uma linha em JavaScript?",
      alternativas: ["<!-- -->", "//", "**", "##"],
      correta: 1,
      dica: "São duas barras inclinadas.",
      dificuldade: "🌸 Fácil"
    },
    {
      pergunta: "3. Qual destas declarações cria uma variável que pode ser reatribuída em JavaScript?",
      alternativas: ["const idade = 18;", "let idade = 18;", "fixed idade = 18;", "define idade = 18;"],
      correta: 1,
      dica: "Essa palavra-chave tem quatro letras e começa com L.",
      dificuldade: "🌸 Fácil"
    },
    {
      pergunta: "4. Qual tag HTML cria um link para outra página?",
      alternativas: ["<p>", "<img>", "<a>", "<h1>"],
      correta: 2,
      dica: "É a tag de âncora.",
      dificuldade: "🌸 Fácil"
    },
    {
      pergunta: "5. Qual será o resultado de 3 + 2 * 4 em JavaScript?",
      alternativas: ["20", "14", "24", "11"],
      correta: 1,
      dica: "Multiplicação tem prioridade sobre adição.",
      dificuldade: "🌷 Média"
    },
    {
      pergunta: "6. Qual método adiciona um elemento ao final de um array em JavaScript?",
      alternativas: ["push()", "pop()", "shift()", "join()"],
      correta: 0,
      dica: "Pense no método que empurra um novo elemento para dentro do array.",
      dificuldade: "🌷 Média"
    },
    {
      pergunta: "7. Qual estrutura é usada para repetir um bloco de código enquanto uma condição for verdadeira?",
      alternativas: ["if", "switch", "while", "return"],
      correta: 2,
      dica: "O nome em inglês significa 'enquanto'.",
      dificuldade: "🌷 Média"
    },
    {
      pergunta: "8. O que o operador === verifica em JavaScript?",
      alternativas: [
        "Somente se dois valores são iguais após conversão",
        "Igualdade de valor e de tipo, sem conversão implícita",
        "Se um valor é maior que outro",
        "Se duas variáveis têm nomes iguais"
      ],
      correta: 1,
      dica: "Ele é mais rigoroso que o operador ==.",
      dificuldade: "🌺 Difícil"
    },
    {
      pergunta: "9. O que será impresso por console.log([1, 2, 3].length)?",
      alternativas: ["2", "4", "3", "123"],
      correta: 2,
      dica: "A propriedade length conta quantos elementos existem no array.",
      dificuldade: "🌺 Difícil"
    },
    {
      pergunta: "10. Qual método transforma uma string JSON válida em um objeto JavaScript?",
      alternativas: [
        "JSON.stringify()",
        "JSON.parse()",
        "JSON.object()",
        "JSON.convert()"
      ],
      correta: 1,
      dica: "O método faz o processo inverso de stringify.",
      dificuldade: "👑 Expert"
    }
  ];
  
  const premios = [
    100, 200, 300, 500, 1000,
    2000, 5000, 10000, 50000, 1000000
  ];
  
  const inicio = document.getElementById("inicio");
  const jogo = document.getElementById("jogo");
  const resultado = document.getElementById("resultado");
  
  const perguntaEl = document.getElementById("pergunta");
  const alternativasEl = document.getElementById("alternativas");
  const feedbackEl = document.getElementById("feedback");
  const progressoEl = document.getElementById("progresso");
  const numeroEl = document.getElementById("numeroQuestao");
  const dificuldadeEl = document.getElementById("dificuldade");
  const premioEl = document.getElementById("premio");
  
  const btnIniciar = document.getElementById("btnIniciar");
  const btnProxima = document.getElementById("btnProxima");
  const btnEliminar = document.getElementById("btnEliminar");
  const btnDica = document.getElementById("btnDica");
  const btnPular = document.getElementById("btnPular");
  const btnNovamente = document.getElementById("btnNovamente");
  const btnMusica = document.getElementById("btnMusica");
  
  const musica = document.getElementById("musica");
  
  let indice = 0;
  let acertos = 0;
  let erros = 0;
  let premioAtual = 0;
  let respondida = false;
  let eliminacoesUsadas = 0;
  let dicasUsadas = 0;
  let pulosUsados = 0;
  let audioContext = null;
  
  function tocarSom(tipo) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
  
      audioContext ||= new AudioCtx();
  
      if (audioContext.state === "suspended") {
        audioContext.resume();
      }
  
      const agora = audioContext.currentTime;
      const notas = tipo === "certo"
        ? [660, 880]
        : [220, 165];
  
      notas.forEach((frequencia, i) => {
        const oscilador = audioContext.createOscillator();
        const volume = audioContext.createGain();
  
        oscilador.type = "sine";
        oscilador.frequency.value = frequencia;
  
        volume.gain.setValueAtTime(0.0001, agora + i * 0.13);
        volume.gain.exponentialRampToValueAtTime(
          0.12,
          agora + i * 0.13 + 0.02
        );
        volume.gain.exponentialRampToValueAtTime(
          0.0001,
          agora + i * 0.13 + 0.18
        );
  
        oscilador.connect(volume);
        volume.connect(audioContext.destination);
  
        oscilador.start(agora + i * 0.13);
        oscilador.stop(agora + i * 0.13 + 0.2);
      });
    } catch (erro) {
      console.warn("Não foi possível reproduzir o som.", erro);
    }
  }
  
  function mostrarTela(telaAtiva) {
    [inicio, jogo, resultado].forEach(tela => {
      tela.classList.toggle("escondido", tela !== telaAtiva);
    });
  }
  
  function iniciarJogo() {
    indice = 0;
    acertos = 0;
    erros = 0;
    premioAtual = 0;
    eliminacoesUsadas = 0;
    dicasUsadas = 0;
    pulosUsados = 0;
  
    btnEliminar.disabled = false;
    btnDica.disabled = false;
    btnPular.disabled = false;
  
    mostrarTela(jogo);
    renderizarQuestao();
  }
  
  function renderizarQuestao() {
    respondida = false;
  
    const q = questoes[indice];
  
    numeroEl.textContent = `Questão ${indice + 1}/10`;
    dificuldadeEl.textContent = q.dificuldade;
    progressoEl.style.width = `${((indice + 1) / questoes.length) * 100}%`;
    perguntaEl.textContent = q.pergunta;
    premioEl.textContent = formatarPremio(premioAtual);
  
    feedbackEl.textContent = "";
    alternativasEl.replaceChildren();
    btnProxima.classList.add("escondido");
    btnProxima.textContent =
      indice === questoes.length - 1
        ? "Ver resultado final 💗"
        : "Próxima questão ➜";
  
    q.alternativas.forEach((texto, i) => {
      const botao = document.createElement("button");
      botao.className = "alternativa";
      botao.textContent = `${String.fromCharCode(65 + i)}) ${texto}`;
      botao.dataset.indice = i;
      botao.addEventListener("click", () => selecionarResposta(i));
      alternativasEl.appendChild(botao);
    });
  }
  
  function selecionarResposta(escolha) {
    if (respondida) return;
  
    respondida = true;
  
    const q = questoes[indice];
    const botoes = [...alternativasEl.querySelectorAll(".alternativa")];
    const acertou = escolha === q.correta;
  
    botoes.forEach((botao, i) => {
      botao.disabled = true;
  
      if (i === q.correta) {
        botao.classList.add("correta");
      } else if (i === escolha) {
        botao.classList.add("errada");
      }
    });
  
    if (acertou) {
      acertos++;
      premioAtual += premios[indice];
      feedbackEl.textContent = `✨ Acertou! Você ganhou ${formatarPremio(premios[indice])}!`;
      tocarSom("certo");
      
      // Configura o botão para avançar normalmente
      btnProxima.textContent =
        indice === questoes.length - 1
          ? "Ver resultado final 💗"
          : "Próxima questão ➜";
    } else {
      erros++;
      feedbackEl.textContent = `💗 Não foi dessa vez! Você errou e o jogo acabou. A resposta correta era ${String.fromCharCode(65 + q.correta)}.`;
      tocarSom("errado");
  
      // Força o fim do jogo: muda o texto do botão e altera o índice para o final
      indice = questoes.length - 1; 
      btnProxima.textContent = "Ver resultado final 💗";
    }
  
    premioEl.textContent = formatarPremio(premioAtual);
    btnProxima.classList.remove("escondido");
  }
  
  
  function eliminarAlternativas() {
    if (respondida || eliminacoesUsadas >= 1) return;
  
    eliminacoesUsadas++;
    btnEliminar.disabled = true;
  
    const correta = questoes[indice].correta;
    const incorretas = [...alternativasEl.querySelectorAll(".alternativa")]
      .filter(botao => Number(botao.dataset.indice) !== correta);
  
    // Elimina duas alternativas incorretas.
    incorretas.slice(0, 2).forEach(botao => {
      botao.disabled = true;
      botao.classList.add("escondido");
    });
  
    feedbackEl.textContent = "✂️ Duas alternativas foram eliminadas!";
  }
  
  function mostrarDica() {
    if (respondida || dicasUsadas >= 1) return;
  
    dicasUsadas++;
    btnDica.disabled = true;
    feedbackEl.textContent = `💡 Dica: ${questoes[indice].dica}`;
  }
  
  function pularQuestao() {
    if (respondida || pulosUsados >= 1) return;
  
    pulosUsados++;
    btnPular.disabled = true;
    respondida = true;
    erros++;
  
    feedbackEl.textContent = "⏭️ Questão pulada! Ela conta como erro.";
    [...alternativasEl.querySelectorAll(".alternativa")].forEach(botao => {
      botao.disabled = true;
    });
  
    btnProxima.classList.remove("escondido");
  }
  
  function proximaQuestao() {
    if (!respondida) return;
  
    if (indice < questoes.length - 1) {
      indice++;
      renderizarQuestao();
    } else {
      finalizarJogo();
    }
  }
  
  function finalizarJogo() {
    mostrarTela(resultado);
  
    document.getElementById("acertos").textContent = acertos;
    document.getElementById("erros").textContent = erros;
    document.getElementById("pontos").textContent = `${acertos}/10`;
    document.getElementById("premioFinal").textContent =
      formatarPremio(premioAtual);
  
    let gif;
    let mensagem;
  
    if (acertos <= 4) {
      gif = "gifs/foca1.gif";
      mensagem = "Não desanime! 🩷 Cada erro é uma oportunidade de aprender. Continue estudando!";
    } else if (acertos <= 7) {
      gif = "gifs/foca5.gif";
      mensagem = "Muito bem! 🌸 Você já está pegando o jeito da programação. Continue assim!";
    } else if (acertos === 8 || acertos === 9) {
      gif = "gifs/foca8.gif";
      mensagem = "Incrível! ✨ Você arrasou e mostrou que entende bastante de programação!";
    } else {
      gif = "gifs/foca10.gif";
      mensagem = "PERFEITA! 👑 Você acertou tudo! Uma verdadeira diva da programação!";
    }
  
    document.getElementById("tituloResultado").textContent =
      acertos === 10 ? "Você é a Rainha do Código! 👑" : "Fim de jogo! 🎀";
  
    const areaGif = document.getElementById("gifResultado");
    areaGif.replaceChildren();
  
    const imagem = document.createElement("img");
    imagem.src = gif;
    imagem.alt = "Foca correspondente ao seu resultado";
    imagem.onerror = () => {
      areaGif.textContent = "🦭💗";
    };
  
    areaGif.appendChild(imagem);
    document.getElementById("mensagemResultado").textContent = mensagem;
  }
  
  async function alternarMusica() {
    if (musica.paused) {
      try {
        await musica.play();
        btnMusica.textContent = "🔇 Desligar música";
      } catch (erro) {
        btnMusica.textContent = "🎵 Tentar ligar música";
        console.warn("Não foi possível iniciar a música.", erro);
      }
    } else {
      musica.pause();
      btnMusica.textContent = "🎵 Ligar música";
    }
  }
  
  btnIniciar.addEventListener("click", iniciarJogo);
  btnProxima.addEventListener("click", proximaQuestao);
  btnEliminar.addEventListener("click", eliminarAlternativas);
  btnDica.addEventListener("click", mostrarDica);
  btnPular.addEventListener("click", pularQuestao);
  btnNovamente.addEventListener("click", iniciarJogo);
  btnMusica.addEventListener("click", alternarMusica);
  
  
const nomeJogador = document.getElementById("nomeJogador");
const btnSalvarRanking = document.getElementById("btnSalvarRanking");
const listaRanking = document.getElementById("listaRanking");
const mensagemRanking = document.getElementById("mensagemRanking");

function obterRanking() {
  try {
    return JSON.parse(localStorage.getItem("rankingQuiz") || "[]");
  } catch {
    return [];
  }
}

function mostrarRanking() {
  const ranking = obterRanking()
    .sort((a, b) => b.acertos - a.acertos || b.premio - a.premio)
    .slice(0, 10);

  listaRanking.replaceChildren();

  ranking.forEach((jogador, indice) => {
    const item = document.createElement("li");

    const medalhas = ["🥇", "🥈", "🥉"];
    const medalha = medalhas[indice] || "🎀";

    item.textContent =
      `${medalha} ${jogador.nome} — ${jogador.acertos}/10 acertos — ` +
      formatarPremio(jogador.premio);

    listaRanking.appendChild(item);
  });

  if (ranking.length === 0) {
    const item = document.createElement("li");
    item.textContent = "Ainda não há pontuações. Seja a primeira! 💗";
    listaRanking.appendChild(item);
  }
}

btnSalvarRanking.addEventListener("click", () => {
  const nome = nomeJogador.value.trim();

  if (!nome) {
    mensagemRanking.textContent = "Digite seu nome primeiro! 🌸";
    nomeJogador.focus();
    return;
  }

  const ranking = obterRanking();

  ranking.push({
    nome: nome,
    acertos: acertos,
    premio: premioAtual
  });

  try {
    localStorage.setItem("rankingQuiz", JSON.stringify(ranking));

    mensagemRanking.textContent = "Pontuação salva com sucesso! 💖";
    nomeJogador.value = "";
    mostrarRanking();
  } catch {
    mensagemRanking.textContent =
      "Não foi possível salvar. Verifique as configurações do navegador.";
  }
});

mostrarRanking();
