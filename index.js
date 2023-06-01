// console.log("Hello World");

const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json())

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get('/test',(req, res) => {
    res.send("Hello")
})

apiRouter.get('/data',(req, res) => {
    res.send("Data")
})

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
  
app.listen(port, () => {
console.log(`Listening on port ${port}`);
});

// const url = " https://api.quotable.io/random";
// fetch(url)
//   .then((x) => x.json())
//   .then((response) => {
//     document.querySelector("pre").textContent = JSON.stringify(
//       response,
//       null,
//       "  "
//     );
//   });
