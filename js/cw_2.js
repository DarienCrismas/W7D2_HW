// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr) {
    sum = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i]>0){
            sum += arr[i]
        }
    }
    return sum
}

positiveSum([1,2,3,4,5]) //15
positiveSum([]) //0
positiveSum([-1,2,3,4,-5]) //9