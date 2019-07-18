import React from 'react';
import { connect } from "react-redux";
import { debounce } from 'lodash';
import { SearchView, SearchInput, SearchButton} from './SearchStyle';
import { searchTextAction } from '../../../actions/SearchText';

const Search = ({ searchText, dispatch }) => {
  return (
    <SearchView>
      <SearchInput
        placeholder="Titre de film"
        // value={searchText}
        onChangeText={debounce((text) => {
          dispatch(searchTextAction.updateSearchText(text))
        },350
        )}
      />
    </SearchView>
  );
}

const mapStateToProps = state => {
  return {
    searchText: state.searchText.searchText
  }
}

export default connect(
  mapStateToProps,
)(Search);




