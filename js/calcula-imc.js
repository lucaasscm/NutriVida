function calculaImc(peso, altura){
  let total =  peso/(altura * altura);
  return total.toFixed(2)
}


let pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){

let paciente = pacientes[i];

let pesoPaciente = paciente.querySelector(".info-peso").textContent;
let alturaPaciente = paciente.querySelector(".info-altura").textContent;
let imcPaciente = paciente.querySelector(".info-imc");




let pesoValido = validaPeso(pesoPaciente);
let alturaValida = validaAltura(alturaPaciente);

if(!pesoValido){
    console.log("Peso inválido");
    imcPaciente.textContent = "Peso inválido";
    pesoValido = false;
    paciente.classList.add("paciente-invalido");
}

if(!alturaValida){
    console.log("Altura inválida");
    imcPaciente.textContent = "Altura inválida";
    alturaValida = false;
    paciente.classList.add("paciente-invalido");
}

if(pesoValido && alturaValida){
    imcPaciente.textContent = calculaImc(pesoPaciente, alturaPaciente);
 }
}

function validaPeso(peso){
    if(peso <= 0 || peso >=300){
        return false;
    }
    else{
        return true;
    }
}

function validaAltura(altura){
    if(altura <= 0 || altura >=4){
        return false;
    }else{
        return true;
    }
}

