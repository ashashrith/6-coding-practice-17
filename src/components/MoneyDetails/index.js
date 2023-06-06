// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props
  const {income, balance, expenses} = moneyDetails

  return (
    <div className="cont">
      <li className="list-balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div className="div">
          <p className="your">Your Balance</p>
          <p className="rs" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </li>
      <li className="list-income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div className="div">
          <p className="your">Your Income</p>
          <p className="rs" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </li>
      <li className="list-expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div className="div">
          <p className="your">Your Expenses</p>
          <p className="rs" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </li>
    </div>
  )
}

export default MoneyDetails
