export default function linear_search(haystack: number[], needle: number): boolean {
    for(let x=0; x<haystack.length; x++){
        if(haystack[x]==needle){
            return true;
        }
    }
    return false;
}