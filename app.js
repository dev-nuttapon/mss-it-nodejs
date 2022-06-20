const express = require('express')
const app = express()
const port = 3000

app.set ( "view engine", "ejs" );

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/page', (req, res) => {
    res.render ( "homepage", 
    { 
        title: "I just code IT [Youtube Channel]"
        , detail: "Hello EJS module from I just code IT."
    } 
);
  })
  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})