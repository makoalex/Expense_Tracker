 import ExpenseItem from "./ExpenseItem"
 import { ExpenseObj } from "../Types"
import { FC } from "react"

 type ExpensesProps = {
  item: ExpenseObj[]
 }
 const Expenses: FC<ExpensesProps> = (props) =>{
    return (
        <section>
          {props.item.map((expense, index:number)=><ExpenseItem title = {expense.title} amount = {expense.amount} date = {expense.date}></ExpenseItem>)}
           
        </section>
    )
 }
 export default Expenses