
let promise_resultado = new Promise((resolve, reject)=>{

        setTimeout(()=>{

            resolve("resultado terminado")

        }, 3000)

})

$(document).ready(()=>{

    let resultado =  document.querySelector(".load_resultado")

    let rueda = document.querySelector(".rueda")

    let value_resultado = document.querySelector(".valor_resultado")

    resultado.innerHTML = "loading result ...."

    promise_resultado.then(resolve =>{

        resultado.innerHTML = resolve

        rueda.style.display = "none"

        value_resultado.style.display = "block"
    })
})

