import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';


export default class Header extends Component {
        render() {
            return (
                <View>
                    <StatusBar hidden={false} barStyle="light-content"  backgroundColor={this.props.background}/>
                    <View style={[styles.title_view,{backgroundColor:this.props.background}]}>
                        <Text style={styles.title_text}>
                        {this.props.title}
                        </Text>
                    </View>
                </View>
             );
        }
}

var styles = StyleSheet.create({
    title_view:{
        flexDirection:'row',
        height:40,
        justifyContent: 'center',
        alignItems: 'center',

    },
    title_text:{
        color:'#fff',
        fontSize:18,
        textAlign:'center'
    },
});
