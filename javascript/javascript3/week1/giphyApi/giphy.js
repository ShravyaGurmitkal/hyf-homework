let msgH1 = document.getElementById('msg');
let gifsUl = document.getElementById('gifsList');
document.getElementById('searchGif').addEventListener('click', getGifs);

function getGifs() {
    msgH1.innerText = '';
    gifsUl.innerText = '';
    const gifTextInput = document.getElementById('gifText').value.trim();
    const gifNumInput = document.getElementById('gifNum').value;
    const giphyApiKey = 'iTJvlzeUH7HpQkYMj72dJNiKeAL96f3q';
    if (gifTextInput === '') { 
        msgH1.innerText = `Please specify the gifs you want`
    } else { 
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${gifTextInput}&limit=${gifNumInput}`)
        .then(response => response.json())
        .then(giphyData => {
            console.log(giphyData.data)
            for(gifs of giphyData.data) {
                const gifImg = document.createElement('img');
                const gifsLi = document.createElement('li');
                gifImg.src = gifs.images.downsized_medium.url;
                gifImg.alt = gifs.title;
                gifsLi.append(gifImg);
                gifsUl.appendChild(gifsLi);
            }
        });
    }
}