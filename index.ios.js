/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import App from './app/config/router.js';

export default class PlexChatChallenge extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('PlexChatChallenge', () => PlexChatChallenge);
