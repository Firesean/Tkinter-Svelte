from flask import Flask, request, jsonify
from flask_cors import CORS
import tkinter as tk
from tkinter import messagebox
import threading

app = Flask(__name__)
CORS(app)

def tkinter_function(data):
    def show_message():
        root = tk.Tk()
        root.withdraw()
        messagebox.showinfo("Message", f"Received data: {data}")
        root.destroy()
    
    if threading.current_thread() == threading.main_thread():
        show_message()
    else:
        threading.Thread(target=show_message).start()

@app.route('/process', methods=['POST'])
def process_data():
    data = request.json.get('data')
    tkinter_function(data)
    return jsonify({'message': 'Processing complete'})

if __name__ == '__main__':
    app.run(debug=True)
