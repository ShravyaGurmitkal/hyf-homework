const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const documents = require('./documents.json')

// Support parsing JSON requests
app.use(express.json())

app.get('/', (req, res) => {
    res.send('This is a search engine')
})

//GET /search
app.get('/search', (req,res) => {
    try {
        const queryParam = req.query.q;
        if(queryParam === undefined) {
            res.send(documents)
        } else {
            const resultsArray = searchQuery(queryParam)
            if (resultsArray.length !== 0) {
                res.send(resultsArray);
            } else {
                res.status(400).send(`There are no items with searched value`);
            }
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal server error" });
    }
})

//GET /documents/:id
app.get('/documents/:id', (req,res) => {
    try {
        const searchId = Number(req.params.id);
        const resultsArray = documents.find(obj => obj.id === searchId)
        if (resultsArray !== undefined) {
            res.send(resultsArray);
        } else {
            res.status(400).send(`There are no items with searched id`);
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal server error" });
    }
})

//POST /search
app.post('/search', (req,res) => {
    try {
       const requestFields = req.body.fields;
       const queryParam = req.query.q;
       let resultsArray = [];
       if(requestFields !== undefined && queryParam !== undefined) {
        res.status(400).send(`please don't provide both search conditions query parameter and fields in the JSON request body`);
       } else if (queryParam !== undefined) {
            resultsArray = searchQuery(queryParam)
       } else if (requestFields !== undefined) {
            for(const key in requestFields) {
                documents.forEach(obj => {
                    if(Object.keys(obj).includes(key) && obj[key] === requestFields[key]) {
                        resultsArray.push(obj);
                    }
                })
            }
       } else {
            res.status(400).send('please provide any search condition either query parameter or fields in the JSON request body')
       }

       if(!res.headersSent) {
        if (resultsArray.length !== 0) {
            res.send(resultsArray);
        } else {
            res.status(400).send(`There are no items with searched value`);
        }
       }
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal server error" });
    }
})

function searchQuery(queryParam) {
    const alterparm = queryParam.split(" ").join('').toLowerCase()
    return documents.filter(obj => {
        const values = Object.values(obj).filter(value => {
            value = String(value).split(" ").join('').toLowerCase()
            return value.toLowerCase().includes(alterparm)
        });
        if(values.length !== 0) {
            return obj;
        }
    })
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})