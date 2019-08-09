import React from 'react';
import PropTypes from 'prop-types';
import Helpers from '../utils/Helpers';

const InputType = (props) => {
  return (
    <div className="form-group">
      <input
        className="form-control"
        type="text"
        onChange={props.handleChange}
        placeholder="ex. onions, omelette" />
    </div>
  );
}

const SubmitButton = () => {
  return (
    <button
      type="submit"
      className="btn btn-primary btn-block">
    Get a recipe</button>
  );
}

const SearchRecipe = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <InputType onChange={props.handleChange} />
        <SubmitButton/>
      </form>
      <hr></hr>
    </div>
  );
}


SearchRecipe.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default SearchRecipe;