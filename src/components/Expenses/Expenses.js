import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card';

const Expenses = (props) =>{
  
      return (
        <Card className='expenses'>
          {props.info.map((value)=>{
          return <ExpenseItem title={value.title} amount={value.amount} date={value.date}/>
          })}
        </Card>
      );
}

export default Expenses