const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors')
const app = express();
app.use(express.json())

app.use(cors())

app.get('/tweet/:id', (req, res) => {
  const id = req.params.id
  const URL = `https://api.twitter.com/2/tweets?ids=${id}&tweet.fields=source`;
  fetch(URL, {
    headers: {
      Authorization: `Bearer ${process.env.be}`
    }
  })
    .then(a => {
      return a.json()
    })
    .then(a => {
      res.json({ "client": a.data[0].source })
    })

})

app.listen(3000, () => {
  console.log('server started');
});
