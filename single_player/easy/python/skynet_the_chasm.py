import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

road = int(raw_input()) # the length of the road before the gap.
gap = int(raw_input()) # the length of the gap.
platform = int(raw_input()) # the length of the landing platform.

# game loop
while 1:
    speed = int(raw_input()) # the motorbike's speed.
    coordX = int(raw_input()) # the position on the road of the motorbike.

    if (coordX == road - 1):
        print "JUMP"
    elif (coordX > road - 1):
        print "SLOW"
    elif (speed == gap + 1):
        print "WAIT"
    elif (speed > gap + 1):
        print "SLOW"
    else:
        print "SPEED"
