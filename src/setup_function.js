/**
 * Created by Administrator on 2016/12/1 0001.
 */

'use strict';

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

function setup(): ReactClass<{}> {

    class Root extends Component {
        render() {
            return (
                <View style={styles.container}>
                    <Text style={styles.hello}>
                        hello world 6
                    </Text>
                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                        To get started, edit index.android.js
                    </Text>
                    <Text style={styles.instructions}>
                        Double tap R on your keyboard to reload,{'\n'}
                        Shake or press menu button for dev menu
                    </Text>
                </View>
            );
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        hello: {
            color: 'red',
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        },
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        },
        instructions: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
        },
    });

    return Root;
}

module.exports = setup;
