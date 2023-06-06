import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    income: 0,
    balance: 0,
    expenses: 0,
    inputTitle: '',
    inputAmount: '',
    list: [],
    type: '',
    typeId: transactionTypeOptions.optionId,
  }

  onAddDetails = event => {
    event.preventDefault()
    const {inputTitle, inputAmount, type} = this.state

    const newList = {
      id: uuidv4(),
      inputTitle,
      inputAmount,
      type,
    }

    if (inputTitle !== '' && inputAmount !== '') {
      this.setState(prevState => ({
        list: [...prevState.list, newList],
        inputTitle: '',
        inputAmount: '',
        type,
      }))
    }
  }

  onDelete = id => {
    const {list} = this.state
    const filterList = list.filter(each => each.id !== id)

    this.setState({list: filterList})
  }

  onChangeTitle = event => {
    this.setState({inputTitle: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({inputAmount: event.target.value})
  }

  onChangeOption = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {
      inputTitle,
      inputAmount,
      typeId,
      list,

      income,
      balance,
      expenses,
    } = this.state

    const moneyDetailsList = {
      income,
      balance,
      expenses,
    }

    return (
      <div className="bg-container">
        <div className="container">
          <div className="home-cont">
            <h1 className="heading">Hi, Richard</h1>
            <p className="para">
              Welcome back to your <span className="span">Money Manager</span>
            </p>
          </div>
          <ul className="details-cont">
            <MoneyDetails
              moneyDetails={moneyDetailsList}
              key={moneyDetailsList.moneyId}
            />
          </ul>
          <div className="final">
            <div className="form-cont">
              <h1 className="form-head">Add Transaction</h1>
              <form className="form" onSubmit={this.onAddDetails}>
                <label className="label" htmlFor="title">
                  TITLE
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder="TITLE"
                  id="title"
                  onChange={this.onChangeTitle}
                  value={inputTitle}
                />
                <label className="label" htmlFor="amount">
                  AMOUNT
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder="AMOUNT"
                  id="amount"
                  onChange={this.onChangeAmount}
                  value={inputAmount}
                />
                <label className="label" htmlFor="select">
                  TYPE
                </label>
                <select
                  className="input"
                  onChange={this.onChangeOption}
                  value={typeId}
                  id="select"
                >
                  {transactionTypeOptions.map(each => (
                    <option value={each.optionId} key={each.optionId}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
                <button type="submit" className="submit-btn">
                  Add
                </button>
              </form>
            </div>

            <ul className="history-cont">
              <h1 className="form-head">History</h1>
              <li className="heading-cont">
                <p className="headings">Title</p>
                <p className="headings">Amount</p>
                <p className="headings">Type</p>
                <p className="head"> no</p>
              </li>
              {list.map(each => (
                <TransactionItem
                  itemDetails={each}
                  key={each.id}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
