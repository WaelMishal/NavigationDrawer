import React, { Platform } from 'react-native';
import _ from 'underscore';

module.exports = function (scene) {
    var componentMap = {
        'Home': {
            title: 'Home',
            id: 'Home'
        },
        'Component1': {
            title: 'Component1',
            id: 'Component1'
        },
        'Component2': {
            title: 'Component2',
            id: 'Component2'
        },
        'Component3': {
            title: 'Component3',
            id: 'Component3'
        }
    }
    return componentMap[scene];
}
