function getCountofDanishLetters(danishString) {
    const danishStrings = danishString.match(/[åæøÆÅØ]/g);
    let returnObj = {total: danishStrings.length};
    for (const str of danishStrings) {
        returnObj[str] = danishStrings.join('').split(str).length - 1;
    }
    return returnObj;
}

const danishString1 = "Jeg har en blå bil";
console.log(getCountofDanishLetters(danishString1)); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
console.log(getCountofDanishLetters(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}