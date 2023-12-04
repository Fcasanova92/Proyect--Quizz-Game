from flask import Flask, render_template, redirect, url_for, request, jsonify
from model import Cuestionario



app = Flask(__name__)

@app.route("/")
def index():
    return render_template("quizz-game/index.html")

@app.route("/cuestionario/<int:id>")
def cuestionario(id):
    questionario = Cuestionario(id).question_Data()
    return render_template("quizz-game/cuestionario.html", pregunta=questionario, id=id)


@app.route("/cuestionario/<int:id>/resultado", methods=['POST'])
def resultado(id):
    options_choices =list(dict(request.form).values())  
    answer_Correct = Cuestionario(id).answer_Correct()
    resultado = 0

    for i in range(len(options_choices)):

            if int(options_choices[i]) == answer_Correct[i]:
             
             resultado +=1
             
    return render_template("quizz-game/resultado.html", resultado = resultado)


if __name__ == "__main__":

    app.run(debug=True)


