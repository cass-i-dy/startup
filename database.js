const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('tectoslide');
const dataCollection = db.collection('data');

(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  async function addData(data) {
    const result = await dataCollection.insertOne(data);
    return result;
  }

  function getData() {
    // const query = { score: { $gt: 0, $lt: 900 } };
    // const options = {
    //   sort: { createdAt: -1 },
    //   limit: 10,
    // };
    const cursor = dataCollection;
    return cursor.toArray();
  }

  module.exports = { addData, getData };