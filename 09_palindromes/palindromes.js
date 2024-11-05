const isAlphaNum = (c) => {
    return ( c >= 'a' && c <= 'z' ) || (c >= '0' && c <= '9');
}

// const areEqualCharacters = (a, b) => {
//     return a.toLowerCase() === b.toLowerCase();
// }

// const palindromes = function (str) {
//     let len = str.length;
//     let left = 0, right = len-1;

//     while(left < right) {
//         while(left < len && !isAlphabet(str[left])) ++left;
//         while(right >= 0 && !isAlphabet(str[right])) --right;

//         if(left >= right) break;

//         if(!areEqualCharacters(str[left], str[right])) return false;

//         ++left;
//         --right;
//     }

//     return true;
// };

const palindromes = (string) => {
    const cleaned = string.toLowerCase().split('').filter(isAlphaNum).join('');

    const reversed = cleaned.split('').reverse().join('');

    return reversed == cleaned;

}

// Do not edit below this line
module.exports = palindromes;
