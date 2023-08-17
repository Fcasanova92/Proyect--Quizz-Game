
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

// Sacar el script y reformular el backend realizado, hay que renderizar los resultados en una nueva pagina, 
// de manera que podamos agregar animaciones

// $(document).ready(function(){
    
// $(".cuestionario").on("submit", function(event){

//     event.preventDefault();

//     let option_selected = option_Selected();

//     let resultado = document.querySelector(".resultado");

//     let id = $(".cuestionario")[0].id

//     alert(id)

//     $.ajax({

//         type:"POST",
//         url:"/resultado",
//         data:{
    
//             data: option_selected,
//             id: id
//         },
//         success:function(response){
         
//            resultado.innerHTML= `Tu resultado es: ${response.resultado}`
//         },
//         error:function(response){
//             alert("error")
//         }
//     })
// })

// })


$(document).ready( ()=>{

    const time = $(".time");

    let time_width = time.width();

    let timer_p = document.querySelector(".timer")

    btn_form = document.querySelector("button")

    const time_interval = setTimeout(() => {

        setInterval(() => {

            if (time_width >=0){
           
                 time_width = time_width - 1;
        
                 time.width(time_width);
           
                }else{

                    timer_p.innerHTML = "TIEMPO FINALIZADO"

                    body_load_form(true)

                    clearInterval(time_interval)

                   // armar funcion ajax, enviar un valor booleano a cuestionario y realizar el rederizado para volver a jugar
                   }
                }, 50)
        
    }, 4000); 
                
                }) 

$(document).ready(()=>{

    let timer_value = 3
    let timer_p = document.querySelector(".timer")
    body_load_form(true)
    let timer = setInterval(()=>{

        if(timer_value >0 ){
            timer_p.innerHTML = timer_value
            timer_value = timer_value - 1

        }else{

            timer_p.innerHTML = "READY"
            body_load_form(false)
            clearInterval(timer)
        }
       

    }, 1000)

    

        
})


function body_load_form(bool){

    let btn_form = document.querySelector("button")

    let answer_div = document.querySelectorAll(".answer_option")

    btn_form.disabled = bool

    answer_div.forEach((answer)=>{answer.disabled =bool})

}
