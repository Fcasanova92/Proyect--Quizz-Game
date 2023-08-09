
def data_Cuestionarios(num_cuestionario):

    cuestionarios = (({"numero":1, "titulo": "¿Cuál país es africano?" , "respuestas":["Peru", "Chile", "Nigeria"] }  ,
               
               {"numero":2, "titulo": "¿Cuál país es europeo?" , "respuestas":["Peru", "Escocia", "Mozambique"] },
                
            {"numero":3, "titulo": "¿Cuál país es americano?" , "respuestas":["Peru", "Escocia", "Mozambique"] }, 
                ) ,
                
                ({"numero":1, "titulo": "¿Cuál país es africano?" , "respuestas":["Peru", "Chile", "Nigeria"] }  ,
               
               {"numero":2, "titulo": "¿Cuál país es europeo?" , "respuestas":["Peru", "Escocia", "Mozambique"] },
                
            {"numero":3, "titulo": "¿Cuál país es americano?" , "respuestas":["Peru", "Escocia", "Mozambique"] }, 
                ),
                
                ({"numero":1, "titulo": "¿Cuál país es africano?" , "respuestas":["Peru", "Chile", "Nigeria"] }  ,
               
               {"numero":2, "titulo": "¿Cuál país es europeo?" , "respuestas":["Peru", "Escocia", "Mozambique"] },
                
            {"numero":3, "titulo": "¿Cuál país es americano?" , "respuestas":["Peru", "Escocia", "Mozambique"] }, 
                ) ,
                
                ({"numero":1, "titulo": "¿Cuál país es africano?" , "respuestas":["Peru", "Chile", "Nigeria"] }  ,
               
               {"numero":2, "titulo": "¿Cuál país es europeo?" , "respuestas":["Peru", "Escocia", "Mozambique"] },
                
            {"numero":3, "titulo": "¿Cuál país es americano?" , "respuestas":["Peru", "Escocia", "Mozambique"] }, 
                ))

    return cuestionarios[num_cuestionario]

    
def answer_Correct(num_cuestionario):

    answer_correct = (([3,2,1]),([3,2,1]),([3,2,1]),([3,2,1]))

    return answer_correct[num_cuestionario]

    
        
    
    