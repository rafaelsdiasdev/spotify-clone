import PropTypes from 'prop-types';
import SearchIcon from '../SearchIcon';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { Container, Icon } from './styles';

const Search = ({ placeholder, pageSearch, fill = '#000' }) => {
  const { search, setSearch } = useContext(UserContext);

  return (
    <Container search={pageSearch}>
      <input
        type="search"
        maxLength="80"
        id="search"
        name="seatch"
        value={search}
        placeholder={placeholder}
        onChange={(event) => setSearch(event.target.value)}
      />
      <Icon>
        <span>
          <SearchIcon fill={fill} width="24" height="24" />
        </span>
      </Icon>
    </Container>
  );
};

Search.propTypes = {
  pageSearch: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  pageSearch: false,
  placeholder: 'Artists and Songs',
};

export default Search;
