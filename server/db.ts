import * as mongoDb from 'mongodb';
// mport * as expenseData from '../frontend/src/components/NewExpense'
import { ExpenseType } from '.';

const url = 'mongodb://saltadmin:episalt@localhost:27017/expense';
const dbName = 'expense';
const collectionName = 'expense-tracker';
const mongoClient = new mongoDb.MongoClient(url);

export const createNewCart = async (newExpense: ExpenseType) => {
  try {
    await mongoClient.connect();
    const db = mongoClient.db(dbName);
    const collection = db.collection(collectionName);
    await collection.insertOne(newExpense);
    await mongoClient.close();
    return newExpense;
  } catch (err) {
    throw new Error('not generated!');
  }
};
export const getAllExpenses = async () => {
     await mongoClient.connect();
    const db = mongoClient.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find().toArray();
    return result;
 
};
