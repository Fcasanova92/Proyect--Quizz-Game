
// ARMAR UNA FUNCION QUE CONTROLE MEDIANTE UN VALOR BOOLEANO EL PRE LOAD, EN TERMINOS DE LOS BOTONES Y OPACIDAD
// EN LA MISMA FUNCION DEBE DE GENERARSE UN CREATE HTML EL CUAL PERMITA VOLVER A LA SECCION DE CATEGORIA, SI EL 
// TIEMPO FINALIZO, CONTROLANDO LA OPACIDAD


// FUNCION QUE MANEJA EL COLOR EN LA SELECCION DE LAS OPCIONES DE LAS PREGUNTAS


function respuesta(num_pregunta, seleccionada){

    div_answer = document.querySelector(`#cuestionario${num_pregunta}`).childNodes;

    div_answer[3].style.backgroundColor = " #ffffff";

    div_answer[5].style.backgroundColor = " #ffffff";

    div_answer[7].style.backgroundColor = " #ffffff";

    div_answer[9].style.backgroundColor = " #ffffff";

    seleccionada.parentNode.style.backgroundColor="rgb(166, 228, 240)";

}


 let promise_resultado = new Promise((resolve, reject)=>{

     setTimeout(()=>{

        resolve(true)

     }, 3000)

 })

$(document).ready(()=>{

     let timer_p =  document.querySelector(".timer")
     
     body_load_form(true)

     timer_p.innerHTML = "loading query form ...."

     promise_resultado.then(resolve =>{

        if(resolve === true){

            timer(timer_p)
            resultado.style.display="none"
     }
    })
    })


// QUERY QUE CONTROLA LA BARRA DE TIEMPO

function timer_bar(timer_p){

    const time = $(".time_bar");

    let time_width = time.width();

    let time_interval = setInterval(()=>{

            if (time_width >=0){
           
                 time_width = time_width - 1;
        
                 time.width(time_width);
           
                }else{
                    
                    // agregar un aref con url_for a index nuevamente
                    clearInterval(time_interval)
                    body_load_form(true)
                    timer_p.innerHTML = '<p>Tiempo finalizado </p><p> Volver a categorias</p> '
                   
                   }
                }, 50)}
        

// pre load y tiempo finalizado

function body_load_form(bool){

    let form = $(".flex")

    let timer_load = document.querySelector(".timer_load")

    if(bool===true){

        timer_load.style.display = "flex"

        form.css('display', 'none');

    }else{

        timer_load.style.display = "none"

        form.css('display', 'flex');

    }

}

// QUERY QUE CONTROLA EL CONTADOR

function timer(timer_p){

    let timer_value = 3
    let timer = setInterval(()=>{

        if(timer_value >0 ){
            timer_p.innerHTML = timer_value
            timer_value = timer_value - 1

        }else{
    
            clearInterval(timer)
            body_load_form(false)
            timer_bar(timer_p)  
        }
    }, 1000)
        
}


