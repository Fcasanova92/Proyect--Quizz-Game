
function respuesta(num_pregunta, seleccionada){

    div_answer = document.querySelector(`#cuestionario${num_pregunta}`).childNodes;

    div_answer[3].style.backgroundColor = "antiquewhite";

    div_answer[5].style.backgroundColor = "antiquewhite";

    div_answer[7].style.backgroundColor = "antiquewhite";

    seleccionada.parentNode.style.backgroundColor="pink";

}


function option_Selected(){

    let num_preguntas = $(".cuestionario").find('.answer').length 

    let opciones_elegidas = []

    for(i=1; i<=num_preguntas; i++){

        opciones_elegidas.push($(`input[type=radio][name=answer${i}]:checked`).val())

            }

    return opciones_elegidas

}


$(document).ready(function(){
    
$(".cuestionario").on("submit", function(event){

    event.preventDefault();

    let option_selected = option_Selected();

    let resultado = document.querySelector(".resultado");

    let id = $(".cuestionario")[0].id

    alert(id)

    $.ajax({

        type:"POST",
        url:"/resultado",
        data:{
    
            data: option_selected,
            id: id
        },
        success:function(response){
         
           resultado.innerHTML= `Tu resultado es: ${response.resultado}`
        },
        error:function(response){
            alert("error")
        }
    })
})

})


$(document).ready( ()=>{

    const time = $(".time");

    let time_width = time.width();

    

    const time_interval =  setInterval(() => {

             if (time_width >=0){
            
                  time_width = time_width - 1;
         
                  time.width(time_width);
            
                 }else{
                    clearInterval(time_interval)
                    // armar funcion ajax, enviar un valor booleano a cuestionario y realizar el rederizado para volver a jugar
                    }
                 }, 50)}) 




