import java.util.Random;

public class sorting {
    public static void InsertionSort(int[] Array) {
        for (int i = 0; i < Array.length; i++) {
            for (int j = i; j > 0; j--) {
                if (Array[j] < Array[j - 1]) {
                    int temp = Array[j - 1];
                    Array[j - 1] = Array[j];
                    Array[j] = temp;
                } else {
                    break;
                }
            }
        }
    }

    public static void SelectionSort(int[] Array) {
        for (int i = 0; i < Array.length; i++) {
            for (int j = i; j < Array.length; j++) {
                if (Array[i] > Array[j]) {
                    int temp = Array[i];
                    Array[i] = Array[j];
                    Array[j] = temp;
                }
            }
        }
    }

    public static void print(int[] Array) {
        for (int value : Array) {
            System.out.println(value);
        }
    }

    public static void main(String[] args) {
        Random rand = new Random();
        int Vlerat[] = new int[20];
        for (int i = 0; i < Vlerat.length; i++) {
            Vlerat[i] = rand.nextInt(1000);
        }

        print(Vlerat);
        InsertionSort(Vlerat);

        System.out.println("Sorted -------------------------");
        print(Vlerat);
    }
}