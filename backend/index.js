const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors')
const app = express();
app.use(express.json())

app.use(cors())

app.get('/tweet/:id', (req, res) => {
  const id = req.params.id
  const URL = `https://api.twitter.com/1.1/statuses/show.json?id=${id}`;
  fetch(URL, {
    headers: {
      Authorization: `Bearer ${process.env.be}`
    }
  })
    .then(a => {
      return a.json()
    })
    .then(a => {
      const source = a.source.replace("</a>", "").split(">")[1];
      res.json({ "client": source })
    })

})

app.listen(3000, () => {
  console.log('server started');
});
