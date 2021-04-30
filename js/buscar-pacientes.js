let buscarButton = document.querySelector("#buscar-pacientes");

buscarButton.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.om/pacientes");

    xhr.addEventListener("load", () =>{
        let resposta = xhr.responseText;
        let pacientes = JSON.parse(resposta);

        if(xhr.status == 200){            
        pacientes.forEach(paciente => {
            adicionaPacienteNaTabela(paciente);
        });
    }
        else{
            let erro = document.querySelector("#erro-ajax");
            erro.classList.remove("esconder");
        }

    });

    xhr.send();
});