 import ExpenseItem from "./ExpenseItem"
 import { ExpenseObj } from "../Types"
import { FC, useEffect, useState } from "react"

 type ExpensesProps = {
  item: ExpenseObj[]
 }
 const Expenses: FC<ExpensesProps> = (props) =>{
  const [expenses, setExpenses] = useState<ExpenseObj[]>([])
  useEffect(() => {
    fetch("http://localhost:3000/api/expense")
      .then((response) => response.json())
      .then((data) => setExpenses(data))
      .catch((error) => console.error(error));
  },[])
    return (
        <section>
          {expenses.map((expense, index:number)=><ExpenseItem key={index} title = {expense.title} amount = {expense.amount} date = {expense.date}></ExpenseItem>)}
           
        </section>
    )
 }
 export default Expenses