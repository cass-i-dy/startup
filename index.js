// console.log("Hello World");

const express = require('express');
const app = express();
const DB = require('./database.js');

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json())

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get('/test',(req, res) => {
    res.send("Hello")
})

apiRouter.get('/datas',(req, res) => {
    const datas = await.DB.getData();
    res.send(datas)
})

apiRouter.post('/data', async (req, res) => {
    DB.addData(req.body);
    const datas = await DB.getData();
    res.send(datas);
  });


app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
  
app.listen(port, () => {
console.log(`Listening on port ${port}`);
});

