function search(haystack:number[], needle:number,high:number,low:number):boolean{
    if(low >high){
        return false;
    }
    const mid = Math.floor((low + high) / 2);
    
    if(haystack[mid]===needle){
        return true;
    }
    if(haystack[mid]<needle){
       return search(haystack, needle, high, mid+1);
    }
    
    return search(haystack, needle, mid-1, low,);
    
}

export default function bs_list(haystack: number[], needle: number): boolean {
    return search(haystack, needle, haystack.length - 1, 0);  
}