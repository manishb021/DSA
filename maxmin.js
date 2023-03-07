//4. Max and min element in an array

//Constructor function which will be used to create object

function MinMax(min, max){
    this.min = min;
    this.max = max;
}

// Function to find min and max in an array

function findMinAndMax(arr){
    let minMaxObj = new MinMax(arr[0], arr[0])

    //Logic to find min and max
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < minMaxObj.min){
    minMaxObj.min = arr[i]
    }

    if (arr[i] > minMaxObj.max){
        minMaxObj.max = arr[i]
    }
}
return minMaxObj;
}

//Invoke

let arr = [5, 7, -2, 9 , 11, 4 ]
let ans = findMinAndMax(arr)
console.log(`Minimum number is ${ans.min} and maximum number is ${ans.max}`)