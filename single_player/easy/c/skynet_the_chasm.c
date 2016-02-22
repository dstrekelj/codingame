#include <stdlib.h>
#include <stdio.h>
#include <string.h>

int main()
{
    int road; // the length of the road before the gap.
    scanf("%d", &road);
    int gap; // the length of the gap.
    scanf("%d", &gap);
    int platform; // the length of the landing platform.
    scanf("%d", &platform);

    // game loop
    while (1) {
        int speed; // the motorbike's speed.
        scanf("%d", &speed);
        int coordX; // the position on the road of the motorbike.
        scanf("%d", &coordX);

        if (coordX == road - 1) printf("JUMP\n");
        else if (coordX > road - 1) printf("SLOW\n");
        else if (speed == gap + 1) printf("WAIT\n");
        else if (speed > gap + 1) printf("SLOW\n");
        else printf("SPEED\n");
    }

    return 0;
}
