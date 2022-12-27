import './ExpenseItem.css'

function ExpenseItem(){
    return (
        <div className='expense-item'>
            <div>10 de Agosto de 2022</div>
            <div className='expense-item__description'>
                <h2>Conserto do carro</h2>
                <div className='expense-item__price'>R$892.50</div>
            </div>
        </div>
    )
}

export default ExpenseItem;