import sys
import json
import glob


def get_file_content(file_name):
    """
    Get the content of a file.
    """
    content = ''
    with open(file_name, 'r') as file:
        try:
            content = file.read()
        except:
            pass
    return content


def str_to_json(_str):
    """
    Convert a string to JSON.
    """
    return json.loads(_str)


def get_champion_name_by_id(championId):
    """
    Get the name of a champion by its id.
    """
    champions = []
    content = get_file_content('../LeagueOfStats/src/assets/champion.json')
    json_content = str_to_json(content)
    for champion in json_content['data']:
        if json_content['data'][champion]['key'] == str(championId):
            champions.append(json_content['data'][champion]['name'])
    if len(champions) == 0:
        return 'Unknown'
    return champions[0]


def get_champion_key_by_id(championId):
    """
    Get the key of a champion by its id.
    """
    champions = []
    content = get_file_content('../LeagueOfStats/src/assets/champion.json')
    json_content = str_to_json(content)
    for champion in json_content['data']:
        if json_content['data'][champion]['key'] == str(championId):
            champions.append(champion)
    if len(champions) == 0:
        return 'Unknown'
    return champions[0]

def is_champion_in_match(championName, match):
    """
    Check if a champion is in a match.
    """
    for participant in match['info']['participants']:
        if participant['championName'] == get_champion_key_by_id(championId):
            return True
    return False



def main(args):
    """
    Main function.
    """
    get_top_masteries(int(args[1]))


if __name__ == "__main__":
    try:
        main(sys.argv)
    except KeyboardInterrupt:
        print('\nExiting...')
        sys.exit(0)
