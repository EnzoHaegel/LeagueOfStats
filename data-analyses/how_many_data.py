#!/usr/bin/env python

import sys
import glob
import os

path = "../back/responses/"

def count_number_of_file(directory):
    """
    Count the number of files in a directory.
    """
    new_path = path + directory
    # check if path exist
    if not os.path.exists(new_path):
        print("Path " + new_path + " does not exist")
        return 0
    files = glob.glob(new_path + "/*")
    return len(files)

def main(argv):
    """
    Main function.
    """
    if (len(argv) <= 1):
        for directory in os.listdir(path):
            print("Number of " + directory + " files : \t" + str(count_number_of_file(directory)))
    else:
        print("number of " + argv[1] + ":", count_number_of_file(argv[1]))

if __name__ == "__main__":
    main(sys.argv)
