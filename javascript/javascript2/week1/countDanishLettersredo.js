const danishString = "Jeg har en blå bil";
getCountOfDanishLetters(danishString); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
getCountOfDanishLetters(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

function getCountOfDanishLetters (string) {
  const danishLetters = string.match(/[æåøÆÅØ]/g);
  
  const reducer = (acc, letter) => {
    const count = acc[letter] || 0;
    return {
      ...acc,
      [letter]: count + 1,
    };
  };

  return danishLetters.reduce(reducer, {
        total: danishLetters.length,
  });
}

