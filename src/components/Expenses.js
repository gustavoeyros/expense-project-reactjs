import ExpenseItem from './ExpenseItem';
import './Expenses.css'

function Expenses(props){
  
      return (
        <div className='expenses'>
          {props.info.map((value)=>{
          return <ExpenseItem title={value.title} amount={value.amount} date={value.date}/>
          })}
        </div>
      );
}

export default Expenses