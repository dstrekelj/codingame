#include <stdlib.h>
#include <stdio.h>
#include <string.h>

int main()
{
    while (1) {
        char enemy1[256]; // name of enemy 1
        scanf("%s", enemy1);
        int dist1; // distance to enemy 1
        scanf("%d", &dist1);
        char enemy2[256]; // name of enemy 2
        scanf("%s", enemy2);
        int dist2; // distance to enemy 2
        scanf("%d", &dist2);

        printf("%s\n", (dist1 < dist2) ? enemy1 : enemy2);
    }
}