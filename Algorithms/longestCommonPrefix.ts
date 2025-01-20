function longestCommonPrefix(strs: string[]): string {
    let returnValue = "";
    let index = 0;
    for (let j = 0; j < strs[0].length; j++) {
        let flag = true;
        for (let i = 0; i < strs.length; i++) {
            if (strs[i][j] !== strs[0][j]) {
                return returnValue;
            }
        }
        returnValue += strs[0][j];
    }
    return returnValue;

};