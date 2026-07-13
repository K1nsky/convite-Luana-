```javascript id="4w9l9x"
let telaAtual = 1;


// Troca de telas
function proximaTela(numero) {

    document
        .getElementById(`tela${telaAtual}`)
        .classList.remove("ativa");


    document
        .getElementById(`tela${numero}`)
        .classList.add("ativa");


    telaAtual = numero;

}


// Botão SIM
function aceitou() {

    proximaTela(5);

}


// Botão NÃO fugindo
const botaoNao = document.getElementById("nao");

botaoNao.addEventListener("mouseover", function(){

    const largura =
        window.innerWidth - 120;

    const altura =
        window.innerHeight - 80;


    botaoNao.style.position = "fixed";

    botaoNao.style.left =
        Math.random() * largura + "px";


    botaoNao.style.top =
        Math.random() * altura + "px";


    document.getElementById("mensagem").innerHTML =
        "Tem certeza? 😅";


});


// Confirmar encontro
function confirmar(){

    const data =
        document.getElementById("data").value;


    const hora =
        document.getElementById("hora").value;


    if(!data || !hora){

        alert("Escolha uma data e horário ❤️");
        return;

    }


    document.getElementById("resumo").innerHTML =

        `Nosso encontro está marcado para:
        <br><br>
        📅 ${data}
        <br>
        ⏰ ${hora}
        <br><br>
        Mal posso esperar, Luana ❤️`;


    proximaTela(6);

    iniciarConfetes();

}



// Confetes
function iniciarConfetes(){

    const canvas =
        document.getElementById("confetes");


    const ctx =
        canvas.getContext("2d");


    canvas.width =
        window.innerWidth;


    canvas.height =
        window.innerHeight;


    let pecas = [];


    for(let i = 0; i < 150; i++){

        pecas.push({

            x: Math.random()*canvas.width,

            y: Math.random()*canvas.height
                - canvas.height,

            tamanho:
                Math.random()*8+4,

            velocidade:
                Math.random()*4+2,

            cor:
                `hsl(${Math.random()*360},100%,70%)`

        });

    }


    function animar(){

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        pecas.forEach(p=>{

            ctx.fillStyle = p.cor;

            ctx.fillRect(
                p.x,
                p.y,
                p.tamanho,
                p.tamanho
            );


            p.y += p.velocidade;


            if(p.y > canvas.height){

                p.y = -10;

            }

        });


        requestAnimationFrame(animar);

    }


    animar();

}


// Corações flutuando no fundo
function criarCoracao(){

    const coracao =
        document.createElement("div");


    coracao.innerHTML = "❤️";


    coracao.style.position = "fixed";

    coracao.style.left =
        Math.random()*100 + "vw";


    coracao.style.bottom = "-20px";


    coracao.style.fontSize =
        Math.random()*20+15+"px";


    coracao.style.animation =
        "subir 5s linear";


    document.body.appendChild(coracao);


    setTimeout(()=>{

        coracao.remove();

    },5000);

}


setInterval(criarCoracao,500);
```
