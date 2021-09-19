import React, { Component } from 'react';
import { AiTwotoneEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';

class EditButton extends Component {
  render() {
    return (
      <Link to="/edit">
        <button
          data-testid="edit-btn"
          type="button"
          onClick={ () => {} }
          className="edit-btn"
        >
          <AiTwotoneEdit />

        </button>
      </Link>
    );
  }
}

export default EditButton;
