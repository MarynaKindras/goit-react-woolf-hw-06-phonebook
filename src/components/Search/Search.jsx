import { Field, Heading, Wrapper } from './Search.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { updateFilter } from '../../redux/filter/slice';

const Search = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <Wrapper>
      <Heading>Find contacts by name</Heading>
      <Field type="text" value={filter} onChange={onFilterChange} />
    </Wrapper>
  );
};

export default Search;
