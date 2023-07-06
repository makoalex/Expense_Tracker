import { ReactNode } from 'react';
import './ExpenseItem.css'

const expenseItem = ()=>{
    // creating and hard coding dummy data
    const expanseDate = new Date(2023, 3, 26).toString()
    const expenseTitle = 'Dog Insurance';
    const expensesAmount = 250;
    return(
        <section className='expense-item'>
            <div>{expanseDate}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>{`${expensesAmount},-`} </div>
            </div>
        </section>
    )
}

export default expenseItem