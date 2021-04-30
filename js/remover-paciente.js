//Selecionar tabela para que o evento seja escutado mesmo quando um novo paciente for adicionado (todos os elementos filhos da tabela podem ser removidos pois "passamos o click" de filho para pai, até chegar no elemento que realmente foi selecionado para receber o evento, nesse caso a table)
let tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

    //seleciono o pai(tr) do elemento clicado(td)
    event.target.parentNode.classList.add("fadeOut");

    //espera meio segundo para remover a linha
    setTimeout(() =>{
        event.target.parentNode.remove()
    }, 500)
});
