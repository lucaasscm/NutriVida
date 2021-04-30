let campoFiltro = document.querySelector("#filtro-tabela");

campoFiltro.addEventListener("input", function(){
    let pacientes = document.querySelectorAll(".paciente")

    if(this.value.length > 0){
    for(let i = 0; i < pacientes.length; i++){
        let paciente = pacientes[i];
        let tdNome = paciente.querySelector(".info-nome");
        let nome = tdNome.textContent;

        let expression = new RegExp(this.value, "i")

        if (!expression.test(nome)) {
            paciente.classList.add("esconder");
        } else {
            paciente.classList.remove("esconder");
        }
    }
  }else{
      for(let i = 0; i < pacientes.length; i++){
          let paciente = pacientes[i];

          paciente.classList.remove("esconder");
      }
  } 
})