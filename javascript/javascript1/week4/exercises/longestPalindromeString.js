function CheckPalindromeString(text) {
    text = text.toLowerCase().replace(/\s/g, '');
    console.log(`Given string without spaces and converted to lowercase: "${text}"`);
    const subStrings = [];

    //finding substrings for a given string from length 2 to the string length
    for(let start = 0; start < text.length; start++) {
        for(let end = start +2; end <= text.length; end++) {
            const subString = text.slice(start,end);
            subStrings.push(subString);
        }
    }

    /*
    // another way to find longest palindrome string and its length
    let specificLength = text.length;
    let palindromeCheck = false;
    while (specificLength > 0) {
        const lengthStrings = subStrings.filter(str => str.length === specificLength);
        const palindromeStrings = lengthStrings.filter(str => str === str.split('').reverse().join(''))
        if (palindromeStrings.length !== 0) {
            palindromeCheck = true;
            console.log(`Longest palindrome string/Strings : ${palindromeStrings} and the length of the string is ${specificLength}`);
            break;
        } 
        specificLength -= 1;
    }
    if (!palindromeCheck) {
        console.log('There is no palindrome in the string');
    } */
    
    //finding if the string in the subStrings array is palindrome or not
    const palindromeStrings = subStrings.filter(str => str === str.split('').reverse().join(''));

    //sorting the palindromestrings array in the decreasing order of their lengths
    const palindromeStringsSort = palindromeStrings.sort(
        function (a,b){
            return b.length - a.length;
        }
    )
    const longPalindromeStrings = palindromeStringsSort.filter(str => str.length === palindromeStringsSort[0].length);
    
    /*
    //another way to find longest palindrome string after finding the palindromeStrings
    const maxLengthString = Math.max(...(palindromeStrings.map(str => str.length))); // to get the length of an element whose length is maximum in the array
    const longPalindromeStrings = palindromeStringsSort.filter(str => str.length === maxLengthString);
    */
    
    if (longPalindromeStrings.length > 0) {
        console.log(`Longest palindrome string/Strings : ${longPalindromeStrings} and the length of the string is ${longPalindromeStrings[0].length}`);
    } else {
        console.log('There is no palindrome in the string')
    }
}

CheckPalindromeString('ex axple for ele')
CheckPalindromeString('MaDam')
CheckPalindromeString('Example')