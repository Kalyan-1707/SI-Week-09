const express = require('express');
const app = express();


app.get('/say', (req, res) => {

    const searchParams = new URLSearchParams(req.url.split('?')[1]);
    const name = searchParams.get('keyword');
    
    fetch(`https://cerulean-hotteok-ff9688.netlify.app/.netlify/functions/sayName?name=${name}`)
    .then(response => response.json())
    .then(data => {
        res.send(data.message);
    })
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})
