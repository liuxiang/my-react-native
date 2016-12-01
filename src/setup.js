/**
 * Created by Administrator on 2016/12/1 0001.
 */

'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, View, Navigator} from 'react-native';

class MainView_my extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.hello}>
                    hello world 1
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

class MainView extends Component {

    render() {
        
        var title = {
            // backgroundColor: 'rgba(229, 229, 229, 0.5)',
            // display: 'table',
            // margin: 'auto',
            // padding: '5px 15px',
            // borderRadius: '15px',
            // fontSize: '1.2em',
            color:'#F00'
        }

        var list = [
            <Text>第1章  机械运动</Text>,
            <Text>第1章  机械运动</Text>,
            <Text>第1章  机械运动</Text>,
            <Text>第1章  机械运动</Text>,
        ];

        return (
            <View>
                <Text style={title}>第1章  机械运动</Text>
                <Text>第1章  机械运动</Text>
                <Text>第1章  机械运动</Text>
            </View>
        );
    }
}

export default class extends Component {

    // 导航栏的Mapper
    NavigationBarRouteMapper = {
        // 左键
        LeftButton(route, navigator, index, navState) {
            // ...
        },
        // 右键
        RightButton(route, navigator, index, navState) {
            // ...
        },
        // 标题
        Title(route, navigator, index, navState) {
            return (
                <Text style={styles.navTitle}>
                    {route.title}
                </Text>
            );
        }
    };

    render() {
        return (
            <Navigator
                initialRoute={{title:'My First Scene',index:0,component:MainView}}
                renderScene={(route,navigator)=>{
                    return <route.component navigator={navigator} title={route.title} index={route.index} />
                }}
                //navigationBar={
                //    <Navigator.NavigationBar routeMapper={this.NavigationBarRouteMapper}/>
                //}
            />
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
    navTitle: {
        paddingTop: 10,
        fontSize: 18,
        fontWeight: "500",
    }
});
