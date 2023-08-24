 $(document).ready(function(){
    
 $(".cuestionario").on("submit", function(){

     $.ajax({

         type:"POST",
         url:"cuestionario/resultado",
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





let promise_resultado = new Promise((resolve, reject)=>{

        setTimeout(()=>{

            resolve("resultado terminado")

        }, 3000)

})

$(document).ready(()=>{

    let resultado =  document.querySelector(".load_resultado")

    let rueda = document.querySelector(".rueda")

    resultado.innerHTML = "loading result ...."

    promise_resultado.then(resolve =>{

        resultado.innerHTML = resolve

        rueda.style.display = "none"
    })
})

