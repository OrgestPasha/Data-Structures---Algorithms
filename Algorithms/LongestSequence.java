import java.util.Arrays;

public class LongestSequence {
    public int longestConsecutive(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }

        Arrays.sort(nums);

        int validCount = 1;
        int currentCount = 1;

        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] == (nums[i + 1] - 1)) {
                currentCount++;
            } else if (nums[i] != nums[i + 1]) {
                currentCount = 1;
            }

            validCount = Math.max(validCount, currentCount);

        }
        return validCount;
    }
}
