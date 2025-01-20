export default function two_crystal_balls(breaks: boolean[]): number {
   const jmpAmount=Math.floor(Math.sqrt(breaks.length)); 
   let i=jmpAmount;
   for(; i<breaks.length; i+=jmpAmount){
    if(breaks[i]){
        break;
    }
   }
   let j=i-jmpAmount;
   

   while(j<=i && j<breaks.length){
    if(breaks[j]){
        return j;
    }else{
        j++;
    }
   }
   return -1;
}