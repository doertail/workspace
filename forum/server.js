const express = require('express')
const app = express()

app.use(express.static(__dirname+'/public'))

app.listen(8080, ()=>{
    console.log('http://localhost:8080에서 서버 실행중')
})

app.get('/', (요청, 응답)=>{
    응답.sendFile(__dirname+'/index.html')
})

app.get('/news', (요청, 응답)=>{
    응답.send('rain')
})


app.get('/shop', (요청, 응답)=>{
    응답.send('This is shopping page')
})


app.get('/about', (요청, 응답)=>{
    응답.sendFile(__dirname+'/ME.html')
})

const { MongoClient } = require('mongodb')

let db
const url = 'mongodb+srv://doertail:xpfl123@forum.vyqpdgr.mongodb.net/?retryWrites=true&w=majority&appName=forum'
new MongoClient(url).connect().then((client)=>{
  console.log('DB연결성공')
  db = client.db('forum')
}).catch((err)=>{
  console.log(err)
})