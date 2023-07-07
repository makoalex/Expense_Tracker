import  { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props:any)=>{
    // creating and hard coding dummy data
    const clickHandler = ()=>{
        console.log('ouch')
    }


    return(
        <section className='expense-item'>
         <ExpenseDate date = {new Date(props.date)}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{`${props.amount},-`} </div>
            </div>
          
        </section>
    )
}

export default ExpenseItem