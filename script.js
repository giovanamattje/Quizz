//array principal
const perguntas = [
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

    // 11. CSS
    {
        pergunta: "Qual propriedade CSS altera o tamanho do texto?",
        alternativas: [
            "font-style",
            "text-size",
            "font-size",
            "text-weight"
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

    // 16. JavaScript
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
        pergunta: "O que uma função pode receber para utilizar como dados de entrada?",
        alternativas: ["Parâmetros", "Seletores", "Estilos", "Tags"],
        correta: 0
    },

    // 24. Lógica de programação
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

    // 28. Git e GitHub
    {
        pergunta: "Qual comando cria um novo repositório Git no diretório atual?",
        alternativas: [
            "git start",
            "git create",
            "git init",
            "git new"
        ],
        correta: 2
    },
    {
        pergunta: "Qual comando registra alterações no histórico local do Git?",
        alternativas: [
            "git push",
            "git commit",
            "git pull",
            "git fetch"
        ],
        correta: 1
    },
    {
        pergunta: "Qual comando baixa e integra alterações de um repositório remoto?",
        alternativas: [
            "git clone",
            "git commit",
            "git pull",
            "git status"
        ],
        correta: 2
    },

    // 31. Backend e banco de dados
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
const premio = [1000, 10000, 20000, 30000, 40000];
let perguntaAtual = 0;
let premioAtual = 0;
let respondeu = false;
let jogoFinalizado = false;


const perguntaE = document.getElementById("pergunta");
const alternativasE = document.getElementById("alternativas");
const mensagemE = document.getElementById("mensagem");
const numeroPerguntaE = document.getElementById("numero-pergunta");
const premioE = document.getElementById("premio");
const proximaBtnE = document.getElementById("proxima");

function carregarPergunta(){
    respondeu = false;
    proximaBtnE.disabled = true;
    mensagemE.textContent ="";

    alternativasE.innerHTML = "";

    const item = perguntas[perguntaAtual];
    perguntaE.textContent = item.pergunta;
    numeroPerguntaE.textContent =
    `Pergunta: ${perguntaAtual + 1} de ${perguntas.length}`;
    premioE.textContent =
        `Prêmio: R${premioAtual} `;
        item.alternativas.forEach((texto,indice) => {
            const botao = document.createElement("button");
            botao.classList.add("alternativa");
            botao.textContent =
            `${String.fromCharCode(65 + indice)} ${texto}`;
            
            botao.addEventListener("click", () =>verificarResposta(indice, botao) );
            alternativasE.appendChild(botao);

        })



}

function verificarResposta(indiceEscolhido, botaoEscolhido){
    if (respondeu) return;
    respondeu = true;

    const item = perguntas[perguntaAtual];
    const botoes = alternativasE.querySelectorAll(".alternativa");
    
    botoes.forEach(botao => botao.disabled = true);
    if (indiceEscolhido === item.correta){
        botaoEscolhido.classList.add("correta");
        premioAtual = premio[perguntaAtual];
        mensagemE.textContent = "Resposta correta! Você avançou!";

    }
    else{
        botaoEscolhido.classList.add("errado");
    }
    premioE.textContent = `Prêmio:  R$ ${premioAtual.toLocaleString("pt-BR")}`
    proximaBtnE.disabled = false;
}

proximaBtnE.addEventListener("click", () => {
    perguntaAtual++;
   if (perguntaAtual<perguntas.length){
    carregarPergunta();
   }else{
   finalizarJogo();

}   
});
function finalizarJogo(){
    perguntaE.textContent = "Fim de Jogo!";
    alternativasE.innerHTML = "";
    numeroPerguntaE.textContent = "Quizz Concluído";
    mensagemE.textContent = 
    `Você terminou com R$ ${premioAtual}!`;

    proximaBtnE.textContent = "Jogar novamente";
    proximaBtnE.disabled = false;

    proximaBtnE.onclick = () => {
        perguntaAtual = 0;
        premioAtual = 0;
        proximaBtnE.textContent = "Próxima pergunta";
        proximaBtnE.onclick = null;
        carregarPergunta();
    };
}

carregarPergunta();
