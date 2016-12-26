import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    navBar: {
        backgroundColor: '#337ab7',
    },
    navBarText: {
        color: 'white',
        fontSize: 30,
        marginVertical: 10,
    },
    navBarTitleText: {
        fontWeight: '300',
        marginVertical: 5,
    },
    navBarLeftButton: {
        paddingLeft: 15,
        paddingTop: 15

    },
    navBarRightButton: {
        padding: 15,
        paddingTop: 15
    },
    scene: {
        flex: 1,
        paddingTop: 63,
    }
});
