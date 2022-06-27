import json

class Utils:
    def __init__(self):
        pass

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
    
    def get_json_file_content(file_name):
        """
        Get the content of a file in JSON.
        """
        try:
            with open(file_name, encoding="utf8") as json_file:
                return json.load(json_file)
        except:
            return ''

    def str_to_json(_str):
        """
        Convert a string to JSON.
        """
        return json.loads(_str)