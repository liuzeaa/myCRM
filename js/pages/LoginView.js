import React, { Component,PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    ListView,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    StatusBar,
    Alert,
    AlertIOS
} from 'react-native';
import util,{url} from '../Components/util';

import Index from './Index';
export default class LoginView extends Component {
    constructor(props){
       super(props)
        this.state={
            code:'',
            username:'',
            phone:''
        }
    }
    renderCode = () =>{
        code = "";
        checkCode = this.refs.checkCode;
        var codeLength = 4;//验证码的长度
        var selectChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        for (var i = 0; i < codeLength; i++) {
            var charIndex = Math.floor(Math.random() * 60);
            code += selectChar[charIndex];
        }
        if (code.length != codeLength) {
            this.renderCode();
        }
        this.setState({code:code})
    }
    handlePress = () =>{
        var data  ={
            username:this.state.username,
            phone : this.state.phone
        }
        fetch(url+'/LoginTest.aspx')
            .then(response => response.json()) //服务器响应response对象，继续变成json对象
            .then(json => {
                var retData = json.result.retData;
                debugger;
                retData.forEach(item =>{
                    if((item.LoginName==data.username)||(item.Phone==data.phone)){
                        AsyncStorage.setItem("data", JSON.stringify(data));
                        AsyncStorage.setItem('userid',item.UniqueNo);
                        AsyncStorage.setItem("Name", item.Name);
                        AsyncStorage.setItem("orgData", JSON.stringify(json.result.orgData));
                        this.props.navigator.push({
                            component:Index
                        });
                        //return
                    }else{

                    }

                })
            }).catch((error) => {
            console.error(error);
        }).done();
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} barStyle="light-content"  backgroundColor="#36be71"/>
                <View style={{width:util.Dimensions().ScreenWidth-30,marginLeft:15,marginRight:15,position:'absolute',top:'50%',marginTop:-100}}>
                    <View style={{backgroundColor:'#fff',borderRadius:3}}>
                        <View style={styles.inputWrapperStyle}>
                            <Image style={styles.imgStyle} source={require('../../images/1.png')}/>
                            <TextInput placeholder="请输入用户名" style={styles.inputStyle} value={this.state.username}  onChangeText={(username) => this.setState({username:username})}/>
                        </View>
                        <View style={styles.inputWrapperStyle}>
                            <Image style={styles.imgStyle} source={require('../../images/2.png')}/>
                            <TextInput placeholder="请输入手机号" style={styles.inputStyle} keyboardType="numeric" value={this.state.phone}  onChangeText={(phone) => this.setState({phone:phone})}/>
                        </View>
                        <View style={styles.inputWrapperStyle}  >
                            <Image style={styles.imgStyle} source={require('../../images/3.png')}/>
                            <TextInput placeholder="请输入验证码" style={[styles.inputStyle,{width:util.Dimensions().ScreenWidth-180}]} />
                            <Text style={{alignSelf:'flex-end',borderWidth:1,borderStyle:'solid',borderColor:'#ccc',width:90,marginBottom:10,marginLeft:10,color:'#1250a7',textAlign:'center',paddingTop:5,paddingBottom:5}} ref="checkCode" >{this.state.code}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={this.handlePress}>
                        <View style={styles.button}>
                            <Text style={{color:'#fff',flex:1,textAlign:'center',alignSelf:'center'}}>登录</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    componentDidMount = ()=>{
        this.renderCode();

    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'column', //主轴
        alignItems: 'center', //交叉轴居中对齐
        backgroundColor:'#36be71',
        flex:1
    },
    iconStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#FFF',
        marginTop: 50,
        marginBottom: 30
    },
    imgStyle:{
        width:24,height:24,
        position:'absolute',
        left:10,
        top:10
    },
    inputWrapperStyle: {
        flexDirection: 'row',
        position:'relative',
    },
    inputStyle: {
        textAlign: 'left',
        color:'#333',
        marginLeft:40,
        width:util.Dimensions().ScreenWidth-75
    },
    textWrapperStyle:{
        flexDirection:'row',
        marginLeft:15,
        marginRight:15,
        borderRadius:5,
        height:30,
        marginTop:20,
        borderBottomWidth:1

    },
    button:{
        flexDirection:'row',
        marginTop:20,
        borderRadius:5,
        height:36,
        backgroundColor:'#007158',
        shadowOffset:{width:0,height:0},
        shadowColor:'#128c14',
        shadowRadius:10,
        shadowOpacity:0.2
    }
});
