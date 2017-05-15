/* @flow */

import axios from 'axios';
import { observable } from 'mobx';
import { Alert } from 'react-native';

const GOOGLE_BOOKS_API_URL: string = 'https://www.googleapis.com/books/v1/volumes';

export default class SearchStore {
  @observable query = '';
  @observable books = [];

  async getBookList(query: string) {
    if (!query) {
      this.books = [];
      return;
    }
    try {
      const requestURL = `${GOOGLE_BOOKS_API_URL}?q=${query}&maxResults=5&orderBy=relevance&key=AIzaSyDBBCbyhZ7czeWh0cU9gfh0RVz0_gQYwIs`;
      const response = await axios.get(requestURL);
      if(response.status !== 200 && response.data.hasOwnProperty('items')) {
          throw Error('Unexpected Response');
      }

     this.books = response.data.items;

    } catch (e) {
      Alert.alert('Connection error', 'Couldn\'t fetch the data.');
    }
  }
}
