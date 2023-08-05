import { getFilter } from 'redux/selectors';
import { Label, Input } from './FilterInput.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterSlice } from 'redux/filterSlice';

const FilterInput = () => {
  const dispatch = useDispatch();

  const { filter } = useSelector(getFilter);

  const handleChangeFilter = (event) => {
    dispatch(setFilterSlice(event.currentTarget.value.toLowerCase()));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={filter}
        onChange={handleChangeFilter}
      />
    </Label>
  );
};

export default FilterInput;
