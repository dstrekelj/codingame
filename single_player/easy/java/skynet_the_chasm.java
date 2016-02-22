import java.util.*;
import java.io.*;
import java.math.*;

class Player {

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        int R = in.nextInt(),
            G = in.nextInt(),
            L = in.nextInt();

        while (true) {
            int S = in.nextInt(),
                X = in.nextInt();

            if (X == R - 1)         System.out.println("JUMP");
            else if (X > R - 1)     System.out.println("SLOW");
            else if (S == G + 1)    System.out.println("WAIT");
            else if (S > G + 1)     System.out.println("SLOW");
            else                    System.out.println("SPEED");
        }
    }
}
