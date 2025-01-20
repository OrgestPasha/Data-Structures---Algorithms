class ValidPalindrome {
    public boolean isPalindrome(String s) {
        char[] chars = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase().toCharArray();
        for (int i = 0; i < (chars.length / 2); i++) {
            if (chars[i] != chars[chars.length - i - 1])
                return false;

        }
        return true;
    }
}
