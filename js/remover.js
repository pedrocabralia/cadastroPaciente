var remover = document.querySelector("table");

remover.addEventListener("dblclick",function(){

    event.target.parentNode.classList.add("sumirElemento");

    var clicado = event.target;
    var paiDoClicado = clicado.parentNode;
   
    setTimeout(function(){
        paiDoClicado.remove();
    },500);
     


});