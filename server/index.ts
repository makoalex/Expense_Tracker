import express, { Request, Response, Application } from 'express';
import { createNewCart, getAllExpenses } from './db';
import { error } from 'console';
const cors = require('cors')
const app: Application = express();
const port = 3000;
app.use(express.json());
app.use(cors())


export type ExpenseType = {
  id: number,
  title:string,
  amount:number,
  date:Date
 }

app.get('/test', (req, res)=>{
  res.json({message: "BOO"})
})
app.post ('/api/expense',async (req, res)=>{
  // const { title, amount, date }: ExpenseType= req.body;
  const newExpense = req.body;
  const expense = await createNewCart(newExpense)
  res.json(expense)
  res.send(createNewCart(req.body))
})

app.get ('/api/expense', async(req, res)=>{
  const result = await getAllExpenses()
  res.json(result)

})
if (require.main === module) {
  app.listen(port);
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${port}`);
}

export  { app };