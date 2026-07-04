const botoes = document.querySelectorAll(".btn-ver-mais");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        const projeto = botao.closest(".projeto");

        projeto.classList.toggle("ativo");

        if(projeto.classList.contains("ativo")){
            botao.textContent = "Ver menos";
        }else{
            botao.textContent = "Ver mais";
        }

    });

});