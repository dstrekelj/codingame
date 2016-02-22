#include <stdlib.h>
#include <stdio.h>
#include <string.h>

/**
 * The idea is to fire at the tallest of the scanned mountains
 * when the ships reaches it.
 */
int main()
{
    while (1) {
        // Ship position
        int spaceX;
        int spaceY;
        scanf("%d%d", &spaceX, &spaceY);

        // Mountain data
        int mountains[8] = {0};
        int tallestMountainLocation = 0;
        int tallestMountainHeight = 0;

        for (int i = 0; i < 8; i++) {
            // This mountain's height
            int mountainH;
            scanf("%d", &mountainH);

            // Check if it's the tallest known mountain
            if (mountainH > tallestMountainHeight)
            {
                tallestMountainHeight = mountainH;
                tallestMountainLocation = i;
            }
        }

        // Fire only when at tallest mountain's X position
        printf((spaceX == tallestMountainLocation) ? "FIRE\n" : "HOLD\n");
    }

    return 0;
}
