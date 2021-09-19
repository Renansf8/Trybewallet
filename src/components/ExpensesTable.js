import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { deleteExpense } from '../actions';
import headTable from '../headTable';
import './expensesTable.css';

class ExpensesTable extends Component {
  render() {
    const { expenses, deleteExp } = this.props;

    return (
      <table className="expenses-table">
        <thead>
          <tr>
            {headTable.map((head, index) => <th key={ index }>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {expenses.map((item) => (
            <tr key={ item.id }>
              <td><span className="desc-minwitdh">Descrição:</span>{item.description}</td>
              <td><span className="desc-minwitdh">Tag:</span>{item.tag}</td>
              <td><span className="desc-minwitdh">Método de pagamento:</span>{item.method}</td>
              <td><span className="desc-minwitdh">Valor:</span>{item.value}</td>
              <td><span className="desc-minwitdh">Moeda:</span>
                {(item.exchangeRates[item.currency].name)
                  .replace('/Real Brasileiro', '')}
              </td>
              <td><span className="desc-minwitdh">Câmbio utilizado:</span>{Number(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
              <td><span className="desc-minwitdh">Valor convertido:</span>
                {(Number(item.value) * Number(item.exchangeRates[item.currency].ask))
                  .toFixed(2)}
              </td>
              <td><span className="desc-minwitdh">Moeda de conversão:</span>Real</td>
              <td><span className="desc-minwitdh">Excluir:</span>
                <button
                  onClick={ () => deleteExp(item.id) }
                  data-testid="delete-btn"
                  type="button"
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExp: (id) => dispatch(deleteExpense(id)),
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExp: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
