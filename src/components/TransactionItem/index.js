import './index.css'

const TransactionItem = props => {
  const {itemDetails, onDelete} = props
  const {id, inputTitle, inputAmount, type} = itemDetails

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="item-cont">
      <p className="item">{inputTitle}</p>
      <p className="item">{inputAmount}</p>
      <p className="item">{type}</p>
      <button
        type="button"
        data-testid="delete"
        onClick={onClickDelete}
        className="btn"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
