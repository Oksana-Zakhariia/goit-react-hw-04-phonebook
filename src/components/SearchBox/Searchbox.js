import { Filter, InputLabel } from './SearchBox.styled';
import PropTypes from 'prop-types';

export const SearchBox = ({ value, onChange }) => {
  return (
    <InputLabel htmlFor="filter">
      Find contacts by name
      <Filter
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
      ></Filter>
    </InputLabel>
  );
};
SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
