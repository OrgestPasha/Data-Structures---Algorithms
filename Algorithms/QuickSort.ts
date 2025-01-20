function qs(arr:number[],hi:number,lo:number){
    if(lo>=hi){
        return;
    }
    const pivotIdx=partition(arr,hi,lo);

    qs(arr,hi,pivotIdx+1);
    qs(arr, pivotIdx-1,lo);
}
function partition(arr:number[],hi:number,lo:number):number{
    const pivot=arr[hi];
    let idx=lo;
    for(let i=lo; i<hi; i++){
        if(arr[i]<=pivot){
            [arr[idx],arr[i]]=[arr[i],arr[idx]];
            idx++;
        }
    }
    arr[hi]=arr[idx];
    arr[idx]=pivot;
    return idx;
}
export default function quick_sort(arr: number[]): void {
    qs(arr,arr.length-1,0);
}