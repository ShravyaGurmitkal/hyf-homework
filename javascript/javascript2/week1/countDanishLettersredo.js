const danishString = "Jeg har en blå bil";
getCountOfDanishLetters(danishString); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
getCountOfDanishLetters(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

function getCountOfDanishLetters (string) {
    const danishLettersArray = string.match(/[æåøÆÅØ]/g);
    let returnObj = {
        total: danishLettersArray.length,
    }

    danishLettersArray.forEach(letter => {
        (returnObj[letter] === undefined) ? returnObj[letter] = 1 : returnObj[letter] += 1;
    });

    console.log(returnObj)
}

