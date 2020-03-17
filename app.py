from flask import Flask
from flask import render_template
from flask import jsonify

app = Flask(__name__)

i=4
j=4
player=0
state=[
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
]

@app.route('/')
def index(i=i, j=j):
    return render_template('index.html', i=i, j=j)

@app.route('/api/globals')
def globals(): 
    return jsonify(currentPlayer = player, currentState = state)

@app.route('/api/next/<int:col>')
def next(col): 
    global player
    player = 1-player
    return jsonify(currentPlayer = player, lastCol = col, currentState = state)
