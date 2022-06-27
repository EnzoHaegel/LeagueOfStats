import glob

from Utils import Utils

class Masteries:
    def __init__(self, username):
        self.username = username
        self.masteries = self.get_masteries()
        self.utils = Utils()

    def get_masteries(self, masteries_path = '../../back/responses/masteries/*'):
        """
        Get the masteries of a player.
        """
        # get all contents from /masteries/ every files in the folder
        masteries_files = []
        for file in glob.glob(masteries_path):
            masteries_files.append(file)
        # create a list of all masteries of a player
        for file in masteries_files:
            content = self.utils.get_file_content(file)
            if '"status_code":40' in content or content == '':
                continue
            json_content = self.utils.str_to_json(content)
            if json_content['id'] == self.username:
                self.masteries.append(json_content)
        if len(self.masteries) == 0:
            return 'Unknown'
        return self.masteries[0]
