let arr= [6,2, 9, 3, 8, 1, 10, 5, 4, 7]//--arr.length = 10

const bubbleSort = (arr)=>{
    let cont = 0;
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length; ++j) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
            ++cont;
        }
    }

    console.log("N: " + cont);
}

bubbleSort(arr);
console.log(arr)