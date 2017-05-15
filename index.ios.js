/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import App from './app/config/router.js';

import { Provider } from 'mobx-react';

import stores from './app/stores';

export default class PlexChatChallenge extends Component {
  render() {
    return ( 
      <Provider {...stores}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PlexChatChallenge', () => PlexChatChallenge);
