const userName1 = `chunmeishui`;
const userName2 = `negaren`;
const userName3 = `sumanghimire79`;
const repoDetailsUl = document.getElementById('repoDetailsUl');
repoDetailsUl.style.listStyle = `none`

function fetchRepos(userName){
    return fetch(`https://api.github.com/search/repositories?q=user:${userName}`);
}

function renderData(dataItems) {
    const repoDetailsli = document.createElement('li');
    repoDetailsli.innerHTML = `<h2> ${dataItems[0].owner.login.toUpperCase()}'s Repositories </h2>`;
    for (const item of dataItems) {
        const dataItemsUl = document.createElement('ul');
        const dataItemsli = document.createElement('li');
        dataItemsli.innerHTML = `<h4>Full_Name: ${item.full_name}</h4> URL: ${item.url} <br><br> Owner: ${item.owner.id}`
        dataItemsUl.appendChild(dataItemsli);
        repoDetailsli.appendChild(dataItemsUl);
    }
   repoDetailsUl.appendChild(repoDetailsli);
}

async function getRepos() {
    await Promise.all([
        fetchRepos(userName1),
        fetchRepos(userName2),
        fetchRepos(userName3)
    ])
    .then(response => {
        for(const data of response) {
            data.json()
                .then(jsonData => {
                    renderData(jsonData.items);
                })
            }
        });
}

getRepos();