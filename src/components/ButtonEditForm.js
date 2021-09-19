import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './buttonForm.css';
import { Link } from 'react-router-dom';

class ButtonEditForm extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <Link to="/carteira">
        <button
          className="buttonForm"
          type="button"
          onClick={ onClick }
        >
          Editar despesa
        </button>
      </Link>
    );
  }
}

ButtonEditForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonEditForm;
