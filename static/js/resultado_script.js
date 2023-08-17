let promise_resultado = new Promise((resolve, reject)=>{

        setTimeout(()=>{

            resolve("resultado terminado")

        }, 3000)

})

$(document).ready(()=>{

    let resultado =  document.querySelector(".load_resultado")

    resultado.innerHTML = "loading result ...."

    promise_resultado.then(resolve =>{

        resultado.innerHTML = resolve
    })
})

