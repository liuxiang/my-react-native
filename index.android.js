/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {AppRegistry} from 'react-native';
import setup from './src/setup';

// AppRegistry.registerComponent('AwesomeProject', setup);// function (问题:Hot不同步)
AppRegistry.registerComponent('AwesomeProject', () => setup);// module
