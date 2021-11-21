let position = [
    ['x', 'o', ' '],
    [' ', 'o', ' '],
    [' ', 'o', 'x']
];
  
function getRenderedGame(position) {
    const star = '*';
    let renderedGame = '';
    for (let row = 0; row < position.length; row++) {
       renderedGame += star + position[row].join('*') + star + '\n';
    }
    renderedGame = star.repeat(7) + '\n' + renderedGame + star.repeat(7);
    return renderedGame;
}

const renderedGame = getRenderedGame(position);
console.log(renderedGame);
  
  /*
  *******
  *x*o* *
  * *o* *
  * *o*x*
  *******
  */
  
// position = [
//     ['x', 'o', ' '],
//     [' ', 'o', ' '],
//     [' ', 'o', 'x']
// ];
 
// function getGameinfo(position) {
    
// }

// const gameInfo = getGameinfo(position);
// console.log(gameInfo);
  
/*
{
    winner: 'o',
    loser: 'x',
    hasEnded: true
}
*/
  