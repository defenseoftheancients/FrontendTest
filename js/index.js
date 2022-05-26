function groupByLength(arr) {
    let obj = {};
    for(let i = 0;i < arr.length;i++) {
        if(arr[i].length in obj === false) 
            obj[arr[i].length] = [];
        obj[arr[i].length].push(arr[i]);
    }
    return obj;
}

let a = ['one', 'two', 'three', 'four','five'];

console.log(groupByLength(a));