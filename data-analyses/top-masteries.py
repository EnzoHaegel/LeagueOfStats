import sys
import json
import glob

# create an interface for JSON data

def get_champion_name_by_id(championId):
    """
    Get the name of a champion by its id.
    """
    champions = []
    file = 'C:/Users/enzo.haegel/projects/LeagueOfStats/LeagueOfStats/src/assets/champion.json'
    json_content = get_json_file_content(file)
    for champion in json_content['data']:
        if json_content['data'][champion]['key'] == str(championId):
            champions.append(json_content['data'][champion]['name'])
    if len(champions) == 0:
        return 'Unknown'
    return champions[0]


def get_json_file_content(file_name):
    """
    Get the content of a file.
    """
    with open(file_name, encoding="utf8") as json_file:
        return json.load(json_file)
    return ''


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


def get_username_from_summonerId(summonerId):
    """
    Get the username from a summonerId.
    """
    summoners_files = []
    for file in glob.glob('../back/responses/summoner/*'):
        summoners_files.append(file)
    # create a list of all summoners
    summoners = []
    for file in summoners_files:
        content = get_file_content(file)
        if '"status_code":40' in content or content == '':
            continue
        json_content = str_to_json(content)
        if json_content['id'] == summonerId:
            summoners.append(json_content)
    if len(summoners) == 0 or not summoners[0]['name']:
        return 'Unknown'
    return summoners[0]['name']

def get_champion_id_by_name(championName):
    """
    Get the id of a champion by its name.
    """
    champions = []
    file = 'C:/Users/enzo.haegel/projects/LeagueOfStats/LeagueOfStats/src/assets/champion.json'
    json_content = get_json_file_content(file)
    for champion in json_content['data']:
        if json_content['data'][champion]['name'].lower() == championName.lower():
            champions.append(json_content['data'][champion]['key'])
    if len(champions) == 0:
        return 'Unknown'
    return champions[0]


def get_top_masteries(championId):
    """
    Get the top masteries of a champion.
    """
    try:
        int(championId)
    except:
        try:
            championId = int(get_champion_id_by_name(championId))
        except:
            print('Unknown champion')
            return
    print('Getting top masteries of champion {}'.format(get_champion_name_by_id(championId)))
    # get all contents from ../back/responses/masteries/ every files in the folder
    masteries_files = []
    for file in glob.glob('../back/responses/masteries/*'):
        masteries_files.append(file)
    # create a list of all masteries of a champion
    champion_masteries = []
    for file in masteries_files:
        content = get_file_content(file)
        if '"status_code":40' in content or content == '':
            continue
        json_content = str_to_json(content)
        for mastery in json_content:
            if mastery['championId'] == championId:
                champion_masteries.append(mastery)
    # sort masteries by championPoints higher to lower
    champion_masteries.sort(key=lambda x: x['championPoints'], reverse=True)
    # print the top masteries
    for mastery in champion_masteries[:5]:
        print('{}: {} {}'.format(get_username_from_summonerId(mastery['summonerId']), mastery['championPoints'], mastery['championLevel']))


def main(args):
    """
    Main function.
    """
    get_top_masteries(args[1])

if __name__ == "__main__":
    try:
        main(sys.argv)
    except KeyboardInterrupt:
        print("\n\nExecution interrupted by user.")
        sys.exit(0)
