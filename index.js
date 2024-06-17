require('dotenv').config()
const express = require('express')
// import express from"express"(line 1 and 2 are same)
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('hiteshdotcom')
})
app.get('/login',(req,res)=>{
  res.send('<h1>login please<h1>')
})
// app.get('/youtube',(req,res)=>{
//   res.send(<h2>sgghttfgcfgfd</h2>)
// })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})