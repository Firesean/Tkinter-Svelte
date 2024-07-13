#! Python 3.7
# Project Name : DotGame
# Author : Sean Morgan
# Date : September of 2019
# Description : Using a grid of dots you will connect between each dot until all dots are
# linked. Completing a square with the lines between the dots will allow you to gain a point
# Most Points win.
# Each turn you will place a line between dots if you manage to get a box out of your turn you can go one more time.


from src.games.dotgame import Interface
from src.games.dotgame import DotGame
import tkinter as tk

def run_game():
    try:
        print("Running the game!")
        GAME = DotGame.DotGame()
        UI = Interface.Interface(tk.Tk(), 650, GAME)
    except Exception as e:
        print("Error found : ", e)
    finally:
        UI.root.destroy()
