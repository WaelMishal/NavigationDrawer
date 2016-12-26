import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/contents'

class Component2 extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Component2 Screen</Text>
            </View>
        );
    }
}

module.exports = Component2;
