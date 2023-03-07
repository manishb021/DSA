//2. Cheak if reversinng a subarray makes the array sorted 
function checkReverseSubArray(arr){
    let n = arr.length
    if(n === 1)
    return true;
    //Find the increasing part
    let i;
    for(i = 1; i < n && arr[i - 1] < arr[i]; i++);
    if(i === n)
    return true;
    //Find the reverse part
    let j = i;
    while(j < n && arr[j] < arr[j - 1]){
    if(i > 1 && arr[j] < arr[i - 2])
    return false;
    j++;
    }
    if(j === n)
    return true;
    //For last increasing part
    let k = j;
    if(arr[k] < arr[i - 1])
    return false;
    while(k > 1 && k < n){
    if(arr[k] < arr[k - 1])
    return false;
    k++;
    }
    return true;
    }
    //Invoke
    let arr = [1, 3, 4, 10, 9, 8, 12, 15, 16] // true
    let arr2 = [1, 3, 4, 10, 9, 8, 9, 15, 16] // false
    console.log(checkReverseSubArray(arr2))