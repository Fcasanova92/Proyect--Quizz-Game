
// ARMAR UNA FUNCION QUE CONTROLE MEDIANTE UN VALOR BOOLEANO EL PRE LOAD, EN TERMINOS DE LOS BOTONES Y OPACIDAD
// EN LA MISMA FUNCION DEBE DE GENERARSE UN CREATE HTML EL CUAL PERMITA VOLVER A LA SECCION DE CATEGORIA, SI EL 
// TIEMPO FINALIZO, CONTROLANDO LA OPACIDAD


// FUNCION QUE MANEJA EL COLOR EN LA SELECCION DE LAS OPCIONES DE LAS PREGUNTAS
function respuesta(num_pregunta, seleccionada){

    div_answer = document.querySelector(`#cuestionario${num_pregunta}`).childNodes;

    div_answer[3].style.backgroundColor = "antiquewhite";

    div_answer[5].style.backgroundColor = "antiquewhite";

    div_answer[7].style.backgroundColor = "antiquewhite";

    seleccionada.parentNode.style.backgroundColor="pink";

}

// QUERY QUE CONTROLA LA BARRA DE TIEMPO

$(document).ready( ()=>{

    const time = $(".time");

    let time_width = time.width();

    let timer_p = document.querySelector(".timer")

    let timer_load = document.querySelector(".timer_load")

    let time_interval = setTimeout(() => {

        setInterval(() => {

            if (time_width >=0){
           
                 time_width = time_width - 1;
        
                 time.width(time_width);
           
                }else{

                    timer_load.style.display = "flex"

                    // agregar un aref con url_for a index nuevamente

                    timer_p.innerHTML = '<p>Tiempo finalizado </p><p> Volver a categorias</p> '

                    body_load_form(true)

                    clearInterval(time_interval)
                   }
                }, 50)
        
    }, 4000); 
                
                }) 

// QUERY QUE CONTROLA EL CONTADOR

$(document).ready(()=>{

    let timer_value = 3
    let timer_p = document.querySelector(".timer")
    let timer_load = document.querySelector(".timer_load")
    body_load_form(true)
    
    let timer = setInterval(()=>{

        if(timer_value >0 ){
            timer_p.innerHTML = timer_value
            timer_value = timer_value - 1

        }else{

            timer_load.style.display = "none"
            body_load_form(false)
            clearInterval(timer)
        }
       
    }, 1000)
        
})

// pre load y tiempo finalizado, anulacion del formulario

function body_load_form(bool){

    let form = $(".flex")

    if(bool===true){

        form.css('display', 'none');

    }else{

        form.css('display', 'flex');

    }

}
