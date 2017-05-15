/* flow */

import { StackNavigator } from 'react-navigation';

import SearchScreen from './../screens/SearchScreen';

const stackNavigatorConfig = {
  initialRouteName: 'SearchScreen',
};

export default StackNavigator({
  SearchScreen: {
    screen: SearchScreen,
  },
}, stackNavigatorConfig);
