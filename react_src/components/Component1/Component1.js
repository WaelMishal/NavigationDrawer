import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/contents'

class Component1 extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Component1 Screen</Text>
            </View>
        );
    }
}

module.exports = Component1;