//External Imports
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components/native';
import lodash, { debounce } from 'lodash';
//Internal Imports
import SearchInput from '../components/SearchInput';
import ListItem from '../components/ListItem';
import type { SearchStore } from './../config/types';

@inject('searchStore')
@observer
export default class SearchScreen extends Component {
  props: Props;
  @observable query = '';

  static navigationOptions = {
    title: 'Google Books',
  }

  debounceInput = debounce((query) => { this.props.searchStore.getBookList(query); }, 1000);

  onTextInputChange = (value: string) => {
    this.query = value;
    this.debounceInput(value);
  }

  render() {
    return (
      <Container>
        <SearchInput
          value={this.query}
          onChangeText={(value) => { this.onTextInputChange(value); }}
          placeholder="Search books..."
        />
        {this.props.searchStore.books && (
          <FlatList
            data={this.props.searchStore.books}
            keyExtractor={(_, i) => i}
            renderItem={({ item }) => (
              <ListItem
                bookAuthor={item.volumeInfo.authors[0]}
                bookTitle={item.volumeInfo.title}
              />
            )}
          />
        )}
      </Container>
    );
  }
}

type Props = {
  searchStore: SearchStore;
};

const Container = styled.View`
  margin: 15;
`;