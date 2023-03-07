//5. Maxumum profit stock

function maxProfitStoke(arr){
    let maxProfit = 0;

    for(let i = 1; i< arr.length; i++){
        if(arr[i] >[i-1]){
            maxProfit = maxProfit + (arr[i] - arr[i -1])
        }
    }
    return maxProfit
}

//invoke
//let prices = [100, 180, 260, 310, 40, 535, 695]
let prices = [100,90,70,40 ]
console.log(maxProfitStoke(prices))