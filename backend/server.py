from crypt import methods
from json import load
from flask import Flask, request
import pickle

app = Flask(__name__)

def getModel(model_name: str):
    # Load the model back
    with open(model_name, 'rb') as file:
        loaded_model = pickle.load(file)
    if (loaded_model):
        return loaded_model
    else:
        return "There's no model chosen"

@app.route('/result', methods = ['GET', 'POST'])
def result():
    if request.method == 'GET':
        pass
    

# Run the app
if __name__ == '__main__':
    app.run(debug=True)