from flask import Flask, render_template, redirect, url_for, request, jsonify
from model import data_Cuestionarios, answer_Correct



app = Flask(__name__)

@app.route("/")
def index():
    return render_template("quizz-game/index.html")


@app.route("/cuestionario/<int:id>")
def cuestionario(id):
    dict = data_Cuestionarios(id)
    return render_template("quizz-game/cuestionario.html", pregunta=dict, id=id)


@app.route("/cuestionario/<int:id>/resultado", methods=['POST'])
def resultado(id):
 
    options_choices =list(dict(request.form).values())  
    print(options_choices)
    option_correct = answer_Correct(id)
    print(option_correct)
    resultado = 0

    for i in range(len(options_choices)):

            if int(options_choices[i]) == option_correct[i]:

             resultado +=1
            
    return render_template("quizz-game/resultado.html", resultado = resultado)


if __name__ == "__main__":

    app.run(debug=True)


