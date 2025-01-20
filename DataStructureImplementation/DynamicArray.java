class DynamicArray {
    private int[] arr;
    private int length;
    private int capacity;

    public DynamicArray(int capacity) {
        this.capacity = capacity;
        this.arr = new int[this.capacity];
        this.length = 0;
    }

    public int get(int i) {
        return arr[i];
    }

    public void set(int i, int n) {
        arr[i] = n;
    }

    public void pushback(int n) {
        if (length == capacity)
            resize();
        arr[length] = n;
        length++;
    }

    public int popback() {
        if (length > 0) {
            length--;
        }
        return arr[length];
    }

    private void resize() {
        capacity *= 2;
        int tempArray[] = new int[capacity];
        for (int i = 0; i < length; i++) {
            tempArray[i] = arr[i];
        }
        arr = tempArray;

    }

    public int getSize() {
        return length;
    }

    public int getCapacity() {
        return capacity;
    }
}
