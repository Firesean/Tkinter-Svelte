from flask import Flask, request, jsonify
from flask_cors import CORS
import threading
from src.games.dotgame import Main

app = Flask(__name__)
CORS(app)

def tkinter_function(data):
    def run_app():
        Main.run_game()
    
    if threading.current_thread() == threading.main_thread():
        run_app()
    else:
        threading.Thread(target=run_app).start()

@app.route('/process', methods=['POST'])
def process_data():
    data = request.json.get('data')
    tkinter_function(data)
    return jsonify({'message': 'Processing complete'})

if __name__ == '__main__':
    app.run(debug=True)
