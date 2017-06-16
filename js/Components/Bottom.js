import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Bottom extends Component {
    render() {
        return (
            <View style={styles.three_image_view}>
                <View style={styles.vertical_view}>
                    <Image source={require('../../images/11.png')} style={styles.imgStyle}/>
                    <Text style={styles.top_text}>
                     客户信息
                     </Text>
                </View>
                <View style={styles.vertical_view}>
    <Image source={require('../../images/22.png')} style={styles.imgStyle}/>
                    <Text style={styles.top_text}>
                        联系人
                        </Text>
                </View>
                        <View style={styles.vertical_view}>
    <Image source={require('../../images/33.png')} style={styles.imgStyle}/>
                <Text style={styles.top_text}>
                    遗忘提醒
                    </Text>
                    </View>
                <View style={styles.vertical_view}>
    <Image source={require('../../images/4.png')} style={styles.imgStyle}/>
                    <Text style={styles.top_text} >
                    分享圈
                    </Text>
                </View>
                <View style={styles.vertical_view}>
    <Image source={require('../../images/5.png')} style={styles.imgStyle}/>
                    <Text style={styles.top_text} >
                    销售简报
                    </Text>
                </View>
        </View>
        );
    }
}

var styles = StyleSheet.create({
    three_image_view:{
        paddingTop: 8,
       flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:'white',
        paddingBottom:8,
        borderTopWidth:1,
        borderTopColor:'#dcdcdc'
    },
    vertical_view:{
       justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        flex:1
    },
    imgStyle:{
        width:30,
        height:30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    top_text:{
        color:'#5d6e7a',
        fontSize:14,
        textAlign:'center'
    }
});

