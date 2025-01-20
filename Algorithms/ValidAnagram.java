import java.util.Arrays;

public class ValidAnagram {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        char[] array1 = s.toCharArray();
        char[] array2 = t.toCharArray();

        // Sort the character array
        Arrays.sort(array2);
        Arrays.sort(array1);

        return Arrays.equals(array1, array2);
    }
}
