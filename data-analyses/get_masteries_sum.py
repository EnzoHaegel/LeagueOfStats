import sys
import json
import glob

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
    with open(file_name, 'r', encoding="cp437") as file:
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

def get_masteries_sum(summonerId):
    """
    Get the sum of all masteries of a summoner.
    """
    masteries_sum = 0
    masterie_file = get_file_content('../back/responses/masteries/' + str(summonerId) + '.json')
    masteries_json = str_to_json(masterie_file)
    for masterie in masteries_json:
        masteries_sum += int(masterie['championPoints'])
    return masteries_sum

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
        summoners.append(get_file_content(file))
    # get the summoner with the given summonerId
    for summoner in summoners:
        summoner_json = str_to_json(summoner)
        if summoner_json['id'] == summonerId:
            return summoner_json['name']
    return 'Unknown'

def get_id_from_username(username):
    """
    Get the id of a summoner by its username.
    """
    summoners_files = []
    for file in glob.glob('../back/responses/summoner/*'):
        summoners_files.append(file)
    # create a list of all summoners
    summoners = []
    for file in summoners_files:
        summoners.append(get_file_content(file))
    # get the summoner with the given username
    for summoner in summoners:
        try:
            summoner_json = str_to_json(summoner)
            if summoner_json['name'].lower() == username.lower():
                return summoner_json['id']
        except:
            pass
    return 'Unknown'

def main():
    """
    Main function.
    """
    masteries_sum = 0
    objects = []
    for name in sys.argv[1:]:
        summonerId = get_id_from_username(name)
        if summonerId == 'Unknown':
            print('Unknown')
            return
        player_sum = get_masteries_sum(summonerId)
        print('{} has {} masteries points.'.format(get_username_from_summonerId(summonerId), player_sum))
        objects.append({'summonerId': summonerId, 'username': get_username_from_summonerId(summonerId), 'masteriesSum': player_sum})
        masteries_sum += player_sum
    print('The sum of all masteries points is {}.'.format(masteries_sum))
    return objects

if __name__ == '__main__':
    main()