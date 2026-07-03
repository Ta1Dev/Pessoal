document.addEventListener("DOMContentLoaded", function(){     //essa função faz o script rodar so depois que todo o html e carregado
    const form = document.getElementById("formContato");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        
        document.getElementById("erroNome").textContent = "";
        document.getElementById("erroEmail").textContent = "";
        document.getElementById("erroMensagem").textContent = "";
        document.getElementById("sucessoForm").textContent = "";

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        let valido = true;

         // Validação simples
        if (nome === "") {
            document.getElementById("erroNome").textContent = "Preencha o campo Nome";
            valido = false
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "" || !emailRegex.test(email)) {
            document.getElementById("erroEmail").textContent = "Digite um e-mail válido.";
            valido = false;
        }

        if (mensagem === "") {
            document.getElementById("erroMensagem").textContent = "Escreva sua mensagem.";
            valido = false;
        }

        if( valido ){
            document.getElementById("sucessoForm").textContent = "Formulário enviado com sucesso!";
            form.reset();
        }
    })
})