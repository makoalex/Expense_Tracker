import { ReactNode } from 'react';
import './ExpenseItem.css'
import { ExpenseObj } from '../Types';

const expenseItem = (props:ExpenseObj)=>{
    // creating and hard coding dummy data
    // const expanseDate = new Date(2023, 3, 26).toString()
    // const expenseTitle = 'Dog Insurance';
    // const expensesAmount = 250;
    return(
        <section className='expense-item'>
            <div>{props.date}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{`${props.amount},-`} </div>
            </div>
        </section>
    )
}

export default expenseItem