import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'

const Expenses = (props) =>{
  const [getYear, setGetYear] = useState('');

  const getYearHandler = (enteredYear) => {
    setGetYear(parseInt(enteredYear))
  }
      return (

        <Card className='expenses'>
          <ExpensesFilter onGetYear = {getYearHandler}/>
          {props.info.filter((value)=>{
           return value.date.getFullYear() === getYear
          }).map((value)=>{
          return <ExpenseItem title={value.title} amount={value.amount} date={value.date}/>
          })} 
        </Card>
      );
}

export default Expenses