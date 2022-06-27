from Utils import Utils

class Champion:
    def __init__(self):
        self.utils = Utils()
        pass

    def get_champion_name_by_id(self, championId, _champ_file = 'C:/Users/enzo.haegel/projects/LeagueOfStats/LeagueOfStats/src/assets/champion.json'):
        """
        Get the name of a champion by its id.
        """
        champions = []
        file = _champ_file
        json_content = self.utils.get_json_file_content(file)
        for champion in json_content['data']:
            if json_content['data'][champion]['key'] == str(championId):
                champions.append(json_content['data'][champion]['name'])
        if len(champions) == 0:
            return 'Unknown'
        return champions[0]

    def get_champion_id_by_name(championName, _champ_file = 'C:/Users/enzo.haegel/projects/LeagueOfStats/LeagueOfStats/src/assets/champion.json'):
        """
        Get the id of a champion by its name.
        """
        champions = []
        file = _champ_file
        json_content = self.utils.get_json_file_content(file)
        for champion in json_content['data']:
            if json_content['data'][champion]['name'].lower() == championName.lower():
                champions.append(json_content['data'][champion]['key'])
        if len(champions) == 0:
            return 'Unknown'
        return champions[0]