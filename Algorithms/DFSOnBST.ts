function walk(curr:BinaryNode<number> |null |undefined,needle:number):boolean{
    if(!curr) return false;
    if(curr.value > needle) return walk(curr.left,needle);
    if(curr.value < needle)  return walk(curr.right,needle);
    if(curr.value === needle) return true;
   return false;
}
export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return walk(head,needle);
}