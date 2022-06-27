# Player league of legend class
import Masteries
class Player:
    def __init__(self, username):
        self.username = username
        self.masteries = Masteries.Masteries(username)
        self.masteries.get_masteries()