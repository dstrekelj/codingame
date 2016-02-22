import java.util.*;
import java.io.*;
import java.math.*;

class Player {

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        while (true) {
            int SX = in.nextInt(),
                SY = in.nextInt(),
                MH = 0,
                MHmax = 0;

            int[] M = new int[8];

            for (int i = 0; i < 8; i++) {
                MH = in.nextInt();
                if (MHmax < MH) MHmax = MH;
                M[i] = MH;
            }

            System.out.println((MHmax == M[SX]) ? "FIRE" : "HOLD");
        }
    }
}
