document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("formContato");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

         // Validação simples
        if (nome === "") {
            alert("Por favor, preencha o campo Nome.");
            return;
        }

        if (email === "" || !email.includes("@")) {
            alert("Digite um e-mail válido.");
            return;
        }

        if (mensagem === "") {
            alert("Por favor, escreva sua mensagem.");
            return;
        }

        // Se tudo estiver ok
        alert("Formulário enviado com sucesso!");
        form.reset(); // limpa os campos
        
    })
})