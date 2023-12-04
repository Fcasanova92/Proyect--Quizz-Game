from data import cuestionarios

class Cuestionario:

    def __init__(self, num_cuestionario):

        self.data = cuestionarios[num_cuestionario]
    
    def question_Data(self):

        return self.data
    
    def answer_Correct(self):

        choice_correct=[]

        for i in range(len(self.data)):

            choice_correct.append(self.data[i]["correcta"])

        return choice_correct


    
        
    
    