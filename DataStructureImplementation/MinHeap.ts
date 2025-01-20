export default class MinHeap {
    public length: number;
    public arr: number[];

    constructor() {
        this.length=0;
        this.arr=[];
    }

    insert(value: number): void {
        this.arr[this.length]=value;
        let index=this.length++;
        while(index >0){
            let parent=this.arr[Math.floor((index-1)/2)];
            let child=this.arr[index];
            if(child < parent){
                [this.arr[index], this.arr[Math.floor((index - 1) / 2)]] = [this.arr[Math.floor((index - 1) / 2)], this.arr[index]];
            }else break;
            index=Math.floor((index-1)/2);
        }
}
    delete(): number {
        if (this.length === 0) {
            throw new Error("Heap is empty");
        }

        const returnValue = this.arr[0];
        this.arr[0] = this.arr[--this.length];
        let index = 0;

        while (index < this.length) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let smallest = index;

            if (leftChild < this.length && this.arr[leftChild] < this.arr[smallest]) {
                smallest = leftChild;
            }

            if (rightChild < this.length && this.arr[rightChild] < this.arr[smallest]) {
                smallest = rightChild;
            }

            if (smallest === index) break;

            // Swap parent with smallest child
            [this.arr[index], this.arr[smallest]] = 
            [this.arr[smallest], this.arr[index]];

            index = smallest;
        }

        return returnValue;
}
}