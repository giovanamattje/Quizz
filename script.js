const perguntas = [
    // HTML
    {
        pergunta: "Qual tag HTML é usada para criar um link?",
        alternativas: ["<link>", "<a>", "<href>", "<url>"],
        correta: 1
    },
    {
        pergunta: "Qual tag HTML é usada para inserir uma imagem?",
        alternativas: ["<image>", "<picture-src>", "<img>", "<src>"],
        correta: 2
    },
    {
        pergunta: "Qual atributo define um texto alternativo para uma imagem?",
        alternativas: ["title", "src", "href", "alt"],
        correta: 3
    },
    {
        pergunta: "Qual tag HTML representa o maior título por padrão?",
        alternativas: ["<h6>", "<heading>", "<h1>", "<title>"],
        correta: 2
    },
    {
        pergunta: "Qual elemento HTML é usado para criar uma lista ordenada?",
        alternativas: ["<ul>", "<ol>", "<li>", "<list>"],
        correta: 1
    },

    // CSS
    {
        pergunta: "Qual propriedade CSS altera o tamanho do texto?",
        alternativas: [
            "font-style", "text-size", "font-size", "text-weight"
        ],
        correta: 2
    },
    {
        pergunta: "Qual seletor CSS seleciona um elemento pelo ID?",
        alternativas: [".menu", "#menu", "*menu", "@menu"],
        correta: 1
    },
    {
        pergunta: "Qual propriedade CSS controla o espaçamento interno?",
        alternativas: ["margin", "border", "padding", "outline"],
        correta: 2
    },
    {
        pergunta: "Qual valor de display permite usar o modelo Flexbox?",
        alternativas: [
            "display: block",
            "display: flex",
            "display: inline",
            "display: none"
        ],
        correta: 1
    },
    {
        pergunta: "Qual unidade CSS é relativa ao tamanho da fonte do elemento raiz?",
        alternativas: ["px", "%", "em", "rem"],
        correta: 3
    },

    // JavaScript
    {
        pergunta: "Qual palavra-chave declara uma variável que pode ser reatribuída?",
        alternativas: ["const", "let", "static", "define"],
        correta: 1
    },
    {
        pergunta: "Qual operador verifica igualdade de valor e tipo em JavaScript?",
        alternativas: ["=", "==", "===", "!="],
        correta: 2
    },
    {
        pergunta: "Qual método adiciona um elemento ao final de um array?",
        alternativas: ["push()", "pop()", "shift()", "join()"],
        correta: 0
    },
    {
        pergunta: "Qual comando é usado para exibir uma mensagem no console?",
        alternativas: [
            "print()",
            "console.log()",
            "document.writeLine()",
            "message()"
        ],
        correta: 1
    },
    {
        pergunta: "Qual estrutura permite executar código com base em uma condição?",
        alternativas: ["for", "function", "if", "import"],
        correta: 2
    },
    {
        pergunta: "Qual método transforma uma string JSON válida em um objeto JavaScript?",
        alternativas: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.convert()",
            "JSON.object()"
        ],
        correta: 1
    },
    {
        pergunta: "Qual método seleciona um elemento HTML pelo seu ID?",
        alternativas: [
            "document.getElementById()",
            "document.getClass()",
            "document.selectId()",
            "window.getElement()"
        ],
        correta: 0
    },
    {
        pergunta: "O que uma função pode receber como dados de entrada?",
        alternativas: ["Parâmetros", "Seletores", "Estilos", "Tags"],
        correta: 0
    },

    // Lógica de programação
    {
        pergunta: "Qual estrutura é normalmente usada para repetir um bloco de código?",
        alternativas: ["if", "for", "return", "import"],
        correta: 1
    },
    {
        pergunta: "Qual é o resultado de 10 % 3 em JavaScript?",
        alternativas: ["3", "1", "0", "3.33"],
        correta: 1
    },
    {
        pergunta: "Qual tipo de dado representa verdadeiro ou falso?",
        alternativas: ["String", "Number", "Boolean", "Array"],
        correta: 2
    },
    {
        pergunta: "Qual estrutura armazena vários valores em uma única variável?",
        alternativas: ["Array", "Boolean", "Condition", "Operator"],
        correta: 0
    },

    // Git e GitHub
    {
        pergunta: "Qual comando cria um novo repositório Git no diretório atual?",
        alternativas: ["git start", "git create", "git init", "git new"],
        correta: 2
    },
    {
        pergunta: "Qual comando registra alterações no histórico local do Git?",
        alternativas: ["git push", "git commit", "git pull", "git fetch"],
        correta: 1
    },
    {
        pergunta: "Qual comando baixa e integra alterações de um repositório remoto?",
        alternativas: ["git clone", "git commit", "git pull", "git status"],
        correta: 2
    },

    // Backend e banco de dados
    {
        pergunta: "Para que serve um banco de dados?",
        alternativas: [
            "Editar imagens",
            "Armazenar e organizar informações",
            "Criar estilos CSS",
            "Compilar HTML"
        ],
        correta: 1
    },
    {
        pergunta: "Qual linguagem é amplamente usada para consultar bancos de dados relacionais?",
        alternativas: ["HTML", "CSS", "SQL", "XML"],
        correta: 2
    },
    {
        pergunta: "O que significa a sigla API?",
        alternativas: [
            "Application Programming Interface",
            "Advanced Program Internet",
            "Automated Process Integration",
            "Application Personal Information"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método HTTP é normalmente usado para solicitar dados de um servidor?",
        alternativas: ["GET", "DELETE", "PATCH", "POST"],
        correta: 0
    },
    {
        pergunta: "Qual é uma boa prática para proteger senhas de usuários?",
        alternativas: [
            "Armazená-las em texto puro",
            "Enviá-las em URLs",
            "Armazená-las usando hash seguro e salt",
            "Compartilhá-las no código-fonte"
        ],
        correta: 2
    }
];

// 2. CONFIGURAÇÕES DO JOGO

const premios = [
    1000, 2000, 3000, 5000, 10000,
    15000, 20000, 30000, 40000, 50000,
    75000, 100000, 125000, 150000, 200000,
    250000, 300000, 350000, 400000, 450000,
    500000, 550000, 600000, 650000, 700000,
    750000, 800000, 850000, 900000, 1000000
];

const TEMPO_LIMITE = 20;

// 3. ESTADO DO JOGO

let perguntaAtual = 0;
let premioAtual = 0;
let acertos = 0;
let respondeu = false;
let jogoFinalizado = false;
let tempoRestante = TEMPO_LIMITE;
let intervaloCronometro = null;

// 4. ELEMENTOS DO HTML

const perguntaE = document.getElementById("pergunta");
const alternativasE = document.getElementById("alternativas");
const mensagemE = document.getElementById("mensagem");
const numeroPerguntaE = document.getElementById("numero-pergunta");
const premioE = document.getElementById("premio");
const proximaBtnE = document.getElementById("proxima");

const cronometroE = document.getElementById("cronometro");
const pontuacaoE = document.getElementById("pontuacao");
const progressoE = document.getElementById("barra-progresso");
const progressoPreenchidoE =
    document.getElementById("progresso-preenchido");

const painelE = document.querySelector(".painel");
const resultadoE = document.getElementById("resultado");
const tituloResultadoE = document.getElementById("titulo-resultado");
const textoResultadoE = document.getElementById("texto-resultado");
const resultadoAcertosE = document.getElementById("resultado-acertos");
const resultadoErrosE = document.getElementById("resultado-erros");
const resultadoPercentualE =
    document.getElementById("resultado-percentual");
const premioFinalE = document.getElementById("premio-final");
const reiniciarBtnE = document.getElementById("reiniciar");

// 5. FUNÇÕES AUXILIARES

function formatarDinheiro(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 0
    });
}

function atualizarProgresso() {
    const total = perguntas.length;
    const percentual = total > 0
        ? (perguntaAtual / total) * 100
        : 0;

    progressoPreenchidoE.style.width = `${percentual}%`;

    progressoE.setAttribute("aria-valuemax", total);
    progressoE.setAttribute("aria-valuenow", perguntaAtual);
}

function atualizarPontuacao() {
    pontuacaoE.textContent = `Acertos: ${acertos}`;
    premioE.textContent = `Prêmio: ${formatarDinheiro(premioAtual)}`;
}

function pararCronometro() {
    if (intervaloCronometro !== null) {
        clearInterval(intervaloCronometro);
        intervaloCronometro = null;
    }
}

function desativarAlternativas() {
    alternativasE.querySelectorAll(".alternativa").forEach(botao => {
        botao.disabled = true;
    });
}

// 6. CRONÔMETRO

function atualizarCronometro() {
    cronometroE.textContent = `⏱️ ${tempoRestante} segundos`;

    cronometroE.classList.toggle(
        "urgente",
        tempoRestante <= 5
    );
}

function iniciarCronometro() {
    pararCronometro();

    tempoRestante = TEMPO_LIMITE;
    atualizarCronometro();

    intervaloCronometro = setInterval(() => {
        tempoRestante--;
        atualizarCronometro();

        if (tempoRestante <= 0) {
            pararCronometro();

            if (!respondeu && !jogoFinalizado) {
                respondeu = true;
                desativarAlternativas();

                mensagemE.textContent = "⏰ Tempo esgotado!";
                mensagemE.className = "mensagem erro";

                finalizarJogo("tempo");
            }
        }
    }, 1000);
}

// 7. CARREGAR PERGUNTA

function carregarPergunta() {
    if (perguntaAtual >= perguntas.length) {
        finalizarJogo("concluido");
        return;
    }

    respondeu = false;

    proximaBtnE.disabled = true;
    proximaBtnE.textContent = "Próxima pergunta";

    mensagemE.textContent = "";
    mensagemE.className = "mensagem";
    alternativasE.innerHTML = "";

    const item = perguntas[perguntaAtual];

    perguntaE.textContent = item.pergunta;

    numeroPerguntaE.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    atualizarPontuacao();
    atualizarProgresso();

    item.alternativas.forEach((texto, indice) => {
        const botao = document.createElement("button");

        botao.type = "button";
        botao.classList.add("alternativa");
        botao.textContent =
            `${String.fromCharCode(65 + indice)}) ${texto}`;

        botao.addEventListener("click", () => {
            verificarResposta(indice, botao);
        });

        alternativasE.appendChild(botao);
    });

    iniciarCronometro();
}

// 8. VERIFICAR RESPOSTA

function verificarResposta(indiceEscolhido, botaoEscolhido) {
    if (respondeu || jogoFinalizado) return;

    respondeu = true;
    pararCronometro();

    const item = perguntas[perguntaAtual];
    const botoes = alternativasE.querySelectorAll(".alternativa");

    desativarAlternativas();

    if (indiceEscolhido === item.correta) {
        botaoEscolhido.classList.add("correta");

        acertos++;
        premioAtual = premios[perguntaAtual] ?? premioAtual;

        mensagemE.textContent =
            `🎉 Resposta correta! Você ganhou ${formatarDinheiro(premioAtual)}!`;

        mensagemE.className = "mensagem sucesso";

        atualizarPontuacao();

        proximaBtnE.disabled = false;

        proximaBtnE.textContent =
            perguntaAtual === perguntas.length - 1
                ? "Ver resultado"
                : "Próxima pergunta";

    } else {
        botaoEscolhido.classList.add("errado");

        if (botoes[item.correta]) {
            botoes[item.correta].classList.add("correta");
        }

        mensagemE.textContent =
            `❌ Resposta errada! A resposta correta era: ${
                item.alternativas[item.correta]
            }.`;

        mensagemE.className = "mensagem erro";

        atualizarPontuacao();

        proximaBtnE.disabled = true;

        setTimeout(() => {
            finalizarJogo("erro");
        }, 1400);
    }
}

// 9. TELA FINAL

function finalizarJogo(motivo) {
    if (jogoFinalizado) return;

    jogoFinalizado = true;
    pararCronometro();

    painelE.hidden = true;
    resultadoE.hidden = false;

    const total = perguntas.length;
    const erros = total - acertos;

    const percentual = total > 0
        ? Math.round((acertos / total) * 100)
        : 0;

    resultadoAcertosE.textContent = acertos;
    resultadoErrosE.textContent = erros;
    resultadoPercentualE.textContent = `${percentual}%`;

    premioFinalE.textContent =
        `Prêmio conquistado: ${formatarDinheiro(premioAtual)}`;

    if (motivo === "concluido") {
        tituloResultadoE.textContent = "🏆 Parabéns, milionário!";

        textoResultadoE.textContent =
            "Você respondeu todas as perguntas e concluiu o desafio!";

    } else if (motivo === "tempo") {
        tituloResultadoE.textContent = "⏰ O tempo acabou!";

        textoResultadoE.textContent =
            "Não foi dessa vez! Confira seu resultado e tente novamente.";

    } else {
        tituloResultadoE.textContent = "💔 Fim de jogo!";

        textoResultadoE.textContent =
            "Você errou uma pergunta. Que tal tentar novamente?";
    }

    atualizarProgresso();
}

// 10. REINICIAR JOGO

function reiniciarJogo() {
    pararCronometro();

    perguntaAtual = 0;
    premioAtual = 0;
    acertos = 0;
    respondeu = false;
    jogoFinalizado = false;
    tempoRestante = TEMPO_LIMITE;

    resultadoE.hidden = true;
    painelE.hidden = false;

    embaralharPerguntas();
    carregarPergunta();
}

// 11. EMBARALHAR PERGUNTAS

function embaralharPerguntas() {
    for (let i = perguntas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [perguntas[i], perguntas[j]] =
            [perguntas[j], perguntas[i]];
    }
}

// 12. EVENTOS DOS BOTÕES

proximaBtnE.addEventListener("click", () => {
    if (!respondeu || jogoFinalizado) return;

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        finalizarJogo("concluido");
    }
});

reiniciarBtnE.addEventListener("click", reiniciarJogo);

// 13. INICIAR O JOGO

embaralharPerguntas();
carregarPergunta();