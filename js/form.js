let button = document.querySelector("#cadastrar-paciente");

button.addEventListener("click", (event) =>{

    event.preventDefault();

    let form = document.querySelector("#myForm");

    let paciente = getInfoForm(form);    

    let erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibirMensagemErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente)

    form.reset();
    let mensagemErros = document.querySelector("#mensagens-erro");
    mensagemErros.innerHTML = ""
});

function adicionaPacienteNaTabela(paciente){
    let pacienteTr = criarTr(paciente);
    let tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
}

function exibirMensagemErro(erros){
    let ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = ""
    erros.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element;
        ul.appendChild(li);
    });
}

function getInfoForm(form){
    let Paciente = {
        nome: form.name.value,
        peso: form.weight.value,
        altura: form.height.value,
        gordura: form.fat.value,
        imc: calculaImc(form.weight.value, form.height.value)
    }

    return Paciente;
}

function criarTr(paciente){

    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(criarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criarTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function criarTd(dado, classe){

    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;

}

function validaPaciente(paciente){
    let erros = [];

    if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida");
    }
    
    if(paciente.nome.length == 0){
        erros.push("Preencha o campo nome");
    }
    if(paciente.peso.length == 0){
        erros.push("Preencha o campo peso");
    }
    if(paciente.altura.length == 0){
        erros.push("Preencha o campo altura");
    }
    if(paciente.gordura.length == 0){
        erros.push("Preencha o campo gordura");
    }

    return erros;
}






