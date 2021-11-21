function getCharacterFrequencies(word) {
  let copyWord = '';
  const characters = [];
  for (const character of word) {
    if (!copyWord.includes(character)) {
        copyWord += character;
        characters.push ({
          character,
          count: word.match(new RegExp(character, "g")).length,
          //count: word.split(character).length - 1,
        })
    }
  }  

  //characters.sort((firstItem, secondItem) => secondItem.count - firstItem.count); sorts in descending order of count
  characters.sort(function(firstItem, secondItem) {
    return (firstItem.character > secondItem.character)? 1 : -1; // sorts in ascending order of alphabets
    //return 0; if they are equal
  });

  return {
    characters,
    length: word.length,
  }

}


console.log(getCharacterFrequencies('happy'));
/*
{
  characters: [
    {
      character: 'a',
      count: 1
    },
    {
      character: 'h',
      count: 1
    },
    {
      character: 'p',
      count: 2
    },
    {
      character: 'y',
      count: 1
    }
  ], length: 5
}
*/
