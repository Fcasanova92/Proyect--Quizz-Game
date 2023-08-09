from flask import Flask, render_template, redirect, url_for, request, jsonify
from model import data_Cuestionarios, answer_Correct



app = Flask(__name__)

@app.route("/")
def index():
    return render_template("quizz-game/index.html")


@app.route("/cuestionario/<int:id>'")
def cuestionario(id):
    dict = data_Cuestionarios(id)
    print(dict)
    return render_template("quizz-game/cuestionario.html", pregunta=dict, id=id)


@app.route("/resultado", methods=['POST'])
def resultado():

    options_choices = request.form
    options_choices = list(options_choices.lists())
    option_value = options_choices[0][1]
    id = int(options_choices[1][1][0])
    option_correct = answer_Correct(id)
    resultado = 0

    for i in range(len(option_value)):

        if int(option_value[i]) == option_correct[i]:

            resultado +=1
            
    return jsonify({"resultado": resultado})


if __name__ == "__main__":

    app.run(debug=True)


