function getSentimentScore(quote) {
    const postiveArray = ['happy','awesome','glad','love','mega','good','excited'];
    const negativeArray = ['sad','hate','boring','bad','ugly'];
    
    const positiveWords = postiveArray.filter(word => quote.toLowerCase().includes(word));
    const negativeWords = negativeArray.filter(word => quote.toLowerCase().includes(word));

    return {
        score : (positiveWords.length >= negativeWords.length) ? positiveWords.length - negativeWords.length : negativeWords.length - positiveWords.length,
        positiveWords,
        negativeWords,
    }

} 

const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');

console.log(sentimentScoreObject); 
/*
{
  score: 3,
  positiveWords: ['happy', 'awesome', 'super'],
  negativeWords: [],
}
*/