function isPalindrome(x: number): boolean {
    if(x<0) return false;
    let x1=0;
    let temp=x;
    while(temp >0){
        const quotient = Math.floor(temp /10);
        const reminder = temp-quotient *10;
        temp=quotient;
        x1=x1*10 + reminder;
    }
    return x1===x;
};