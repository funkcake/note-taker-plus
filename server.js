const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname+"/public/notes.html"))
})

app.post('/api/notes', (req, res) => {
  res = {
    title:req.body.title,
    text:req.body.title
  };
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
