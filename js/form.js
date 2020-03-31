var adicionarPaciente = document.querySelector("#adicionar-paciente");

  adicionarPaciente.addEventListener("click",function(event){

  event.preventDefault();

  var paciente = pegarDadosPaciente(form);

  
  var tabela = montaTr(paciente);

  var erros = validaPaciente(paciente);

   

  if(erros.length > 0){
    
    exibeMensagemDeErro(erros);
    return;
    

  }


  var tabelaPaciente =  document.querySelector("#tabela-pacientes")

  tabelaPaciente.appendChild(tabela)

  form.reset();
  var ul = document.querySelector("#mensagem-erro");
  ul.innerHTML = "";


})


function pegarDadosPaciente(form){

  
    var paciente = {

       
         nome : form.nome.value,
         peso : form.peso.value,
         altura : form.altura.value,
         gordura :  form.gordura.value,
         imc: calculaImc(form.peso.value, form.altura.value)

    }

  return paciente;
}



function montaTr(paciente){

    var tabela = document.createElement("tr");

    var tdnome = document.createElement("td");
    var tdpeso = document.createElement("td");
    var tdaltura = document.createElement("td");
    var tdgordura = document.createElement("td");
    var tdImc = document.createElement("td");
    var remover = document.createElement("td");


    tdnome.textContent =    paciente.nome;
    tdpeso.textContent =    paciente.peso;
    tdaltura.textContent =  paciente.altura;
    tdgordura.textContent = paciente.gordura;
    tdImc.textContent =     paciente.imc;
    remover.textContent = "Remover";
    
    remover.className ="remover";

    tabela.appendChild(tdnome);
    tabela.appendChild(tdpeso);
    tabela.appendChild(tdaltura);
    tabela.appendChild(tdgordura);
    tabela.appendChild(tdImc);
    tabela.appendChild(remover);

return tabela;
}

function exibeMensagemDeErro(erros){

  var ul = document.querySelector("#mensagem-erro");
  ul.innerHTML = "";
    
   erros.forEach(function(erro){
     var li = document.createElement("li");
     li.textContent = erro;
     ul.appendChild(li);


   })

}

function validaPaciente(paciente){

  var erros = [];

    if(validaPeso(paciente.peso) == false){
      
      erros.push("Peso inválido");
    }

    if(validaAltura(paciente.altura) == false){
      erros.push("Altura inválida");
    
    }

    if(paciente.nome.length == 0){
      erros.push("O nome não pode estar em branco");
    }
    if(paciente.gordura.length == 0 ){
      erros.push("Gordura inválida")
    }
  
    return erros;

}