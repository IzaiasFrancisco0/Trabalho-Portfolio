

function mostrarSecao(sectionId) {
    
    let sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    let ativarSection = document.getElementById(sectionId);
    ativarSection.classList.add('active');

    document.addEventListener('DOMContentLoaded', function () {
        mostrarSecao('sobre-min');
    });

}

const enviar = document.getElementById("enviar");

enviar.addEventListener('click', (event) => {

   event.preventDefault()

    const nome = document.getElementById('nome').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if(nome !== '' && senha !== '' && mensagem !== ''){
          alert("Dados enviados com sucesso!!")
          
    } else{
       alert("Digite alguma coisa")
    }

})