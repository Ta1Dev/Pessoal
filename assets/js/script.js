document.addEventListener("DOMContentLoaded", function(){        //essa função faz o script rodar so depois que todo o html e carregado
    
    if( window.innerWidth >=768 ){               //garante q dispositivos moveis não tenha tantos efeitos

        //parte rerferente ao menu de interação das paginas
        const itensMenu = document.querySelectorAll("header nav ul li a");      //pega todos os elementos <a> dentro do <header>
        itensMenu.forEach(element => {
            element.addEventListener("mouseover", () =>{        //interação que faz o menu entrar em contraste quando passa o mouse encima
                element.style.color = "#FFf";
                element.style.backgroundColor = "#A83254"
                element.style.transform = "scale(1.1)";         //aumenta a escala da fonte
                element.style.transition = "0.2s";              //suavisa as transições
            });
            element.addEventListener("mouseout", () =>{
                element.style.color = "";                   //reseta as cores padrão definido no css
                element.style.backgroundColor = ""
                element.style.transform = "scale(1)";
            });
        });

        //parte referente a interatividade dos cards
        const cards = document.querySelectorAll(".card")

        cards.forEach(card =>{                             //como cards se trata de varios cards o for each aplica a todos eles
            cards.addEventListener("mouseover", () =>{
                    cards.style.backgroundColor = "#A83254 "
                    cards.style.color = "#f9f9f9"
                    cards.style.transform = "scale(1.1)";
                    cards.style.transition = "0.5s";
                })

                cards.addEventListener("mouseout", () =>{
                    cards.style.backgroundColor = "";
                    cards.style.color = "";
                    cards.style.transform = "scale(1)";
                })
        })
    }
})



