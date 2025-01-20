import java.util.Stack;

public class ValidParenthesis {

    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<Character>();

        for (char bracket : s.toCharArray()) {
            switch (bracket) {
                case '{', '(', '[' -> stack.push(bracket);
                case '}' -> {
                    if (stack.isEmpty() || !stack.pop().equals('{'))
                        return false;
                }
                case ']' -> {
                    if (stack.isEmpty() || !stack.pop().equals('['))
                        return false;
                }
                case ')' -> {
                    if (stack.isEmpty() || !stack.pop().equals('('))
                        return false;
                }
            }
        }
        return stack.isEmpty();
    }

    public static void main(String[] args) {
        String test = "{([]{}";
        System.out.println(isValid(test));
    }
}
