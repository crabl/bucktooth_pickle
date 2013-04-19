#!/usr/bin/env python

from __future__ import print_function

def main():
    answer1 = raw_input("Are you ready for the bucktooth pickle? ")
    if answer1 == "Yes" or answer1 == "yes":
        pass
    else:
        print("Well damn! You're missing out!")
        exit()
    answer2 = raw_input("Are you *REALLY* ready for the bucktooth pickle? ") 
    if answer2 == "Yes" or answer2 == "yes":
        pass
    else:
        print("Well damn! You're missing out!")
        exit()
    f = open("pickles.dat");
    for line in f:
        print(line, end='')
    print("")



if __name__ == "__main__":
    main()
