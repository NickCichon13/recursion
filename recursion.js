
function productOfNums(nums){
    if(nums.length === 0 )
        return 1;
        return nums[0] * productOfNums(nums.slice(1));
}

function longestWord(words, idx = 0, longestSoFar = 0){
    if (idx === words.length) return longestSoFar;
    longestSoFar = Math.max(words[idx].length, longestSoFar);
    return longest(words, idx + 1, longestSoFar);
}

function string(str, idx = 0, newStr = ""){
    if(idx >=str.length) return newStr;
    newStr += str[idx];
    return everyOther(str, idx +2, newStr);
}

function planidrome(str, idx = 0){
    let leftIdx = idx;
    let rightIdx = str.length - idx -1;
    if (leftIdx >= rightIdx) return true;
    if (str[leftIdx] !== str[rightIdx]) return false;
    return planidrome(str, idx +1);
}

function findIdx (arr, val, idx = 0){
    if(idx === arr.length) return -1;
    if(arr[idx] === val) return idx;
    return findIdx(arr, val, idx + 1);
}

function revString(str, idx = 0, newStr = ""){
    if(newStr.length === str.length) return newStr;
    newStr += str[str.length -1 - idx];
    return revString(str, idx + 1, newStr);
}

function gather(obj){
    let string = [];
    for ( let key in obj){
        if(typeof obj[key] === "string") string.push(obj[key]);
        if(typeof obj[key] === "object") string.push(...gather(obj[key]));
    }
    return string;
}

function binary(arr, val, left = 0, right = arr.length) {
    if(left > right){
        return -1;
    }
    let middle = Math.floor((right + left) / 2);
    if (arr[middle] === val) {
        return middle;
    }
    if (arr[middle] > val) {
        return binary(arr, val, left, middle -1);
    }
    return binary(arr, val, middle + 1, right);
}



