export default function bubble_sort(arr: number[]): void {
   let x=arr.length;
   let swapped;
   do{
    swapped=false;
    for(let y=0; y<x-1; y++){
        if(arr[y]>arr[y+1]) [arr[y],arr[y+1]]=[arr[y+1],arr[y]];
        swapped=true;
    }
    x--;
   }while(swapped);
   }    
