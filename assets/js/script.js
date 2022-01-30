//  ---------------------------------------------------------------------------------------------------------------------------                                                          
let arr = [5,2,4,1,9,7,10]
function sorting(array) {
     array.sort((a, b) => a - b)                                 
     console.log(array);
}
sorting(arr)
//  ---------------------------------------------------------------------------------------------------------------------------                                                          

let months = ["January", "February", "March", "April"]
let sortingMonths = months.map(monthsOrder)
function monthsOrder(month, index) {
    let count = index + 1;
    let value = month + "-" + count;
    return value;
}
console.log(sortingMonths);
//  ---------------------------------------------------------------------------------------------------------------------------                                                          
let string = "Rəşad yaxşı oğlandı"
function countOFletter(str) {
    let arr = str.split(" ")
    let result = arr.map(m => (m.length));
    return result;
}
console.log(countOFletter(string));
//  ---------------------------------------------------------------------------------------------------------------------------                                                          
