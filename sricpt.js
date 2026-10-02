//array principal
const perguntas = [
    {
    pergunta: "Qual linguagem é usada para estruturar páginas web?",
    alternativas: ["CSS", "HTML", "Python", "Java Script"],
    correta: 1
    }
];  
const premio = [1000, 10000, 20000, 30000, 40000];
let perguntaAtual = 0;
let premioAtual = 0;
let respondeu = false;

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
    const botoes = documento.querySelector(".alternativa");
    botoes.forEach
    botoes.forEach(botao => botao.disabled = true);
    if (indiceEscolhido === item.correta){
        botaoEscolhido.classList.add("correta");
        premioAtual = premioAtual[perguntaAtual];
        mensagemE.textContent = "Resposta correta! Você avançou!";

    }
    else{
        botaoEscolhido.classList.add("errada");
    }
    premioE.textContent = `Prêmio:  R$ ${premioAtual.toLocaleString("pt-BR")}`
    proximaBtnE.disable = false;
}

proximaBtnE.addEvenListener("click", () => {
    perguntaAtual++;
   if (perguntaAtual<pergunta.length){
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
carregarPergunta()
