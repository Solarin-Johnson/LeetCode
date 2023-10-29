/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(y) {
    x = y.toString()
if(y >= 0){
    var first;
    var second;
    for(i=0; i < x.length; i++){
        first += x[i]
        second += x[x.length - i - 1]
    }
        if(first === second){
            return true
        } else {
            return false
        }
} else {
    return false;
}
return;
};