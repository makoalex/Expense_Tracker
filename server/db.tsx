import * as mongoDb from 'mongodb';

const url = "mongodb://saltadmin:episalt@localhost:27017/expense"
const dbName = 'expense';
const collectionName = '.expense-tracker'
const MongoClient = mongoDb.MongoClient;
let db;

// MongoClient.connect(url) => {
//   if (err) {
//     console.error('Failed to connect to MongoDB:', err);
//     return;
//   }

//   console.log('Connected to MongoDB');
//   db = client.db(dbName);
// });


