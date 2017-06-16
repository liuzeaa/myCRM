import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    AsyncStorage
} from 'react-native';
import { url } from '../Components/util';
import Header from '../Components/Header';
import Bottom from '../Components/Bottom';
export default class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            Name:'',
            cust_customer_count:"",
            cust_linkman_count:"",
            follow_up_count:"",
            sign_in_count:""
        }
    }
    weekData = () =>{
        var userid,username;
        AsyncStorage.getItem('userid').then((value)=>{
            if(value!=null){
                userid = value
            }
        });
        AsyncStorage.getItem('Name').then((value)=>{
            if(value!=null){
                username = value
            }
        });
        fetch(url+'/Statistical/statistic_handle.ashx', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                Func: "get_statistic_today",
                userid: userid,
                username: username,
                guid:userid,
                type: 2
            }
        }) .then(response => response.json()).then(json=>{
            alert(json)
        })
    }
    render() {
        AsyncStorage.getItem("Name").then((value)=>{
            if(value!=null){
                this.setState({Name:value})
            }
        })

        return (
            <View style={styles.container}>
                <Header title='CRM' background='#6cb1ff' />
                <ScrollView>
                    <Image source={require('../../images/bg_02.png')} style={styles.banner}/>
                    <View style={styles.info_wrap}>
                        <View style={styles.past}>
                        </View>
                        <View style={styles.mes}>
                            <View>
                                <Image style={styles.photo} source={require('../../images/touxiang.png')}/>
                                <Text style={styles.username}>{this.state.Name}</Text>
                            </View>
                            <View style={styles.tongji}>
                                <View style={styles.item}>
                                    <Text style={styles.name}>新增客户</Text>
                                    <Text style={styles.num}>0</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text style={styles.name}>新增联系人</Text>
                                    <Text style={styles.num}>0</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text style={styles.name}>跟进次数</Text>
                                    <Text style={styles.num}>0</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text style={styles.name}>签到次数</Text>
                                    <Text style={styles.num}>0</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <Bottom />
            </View>
        );

    }
    componentDidMount = ()=>{
        this.weekData();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    peopleinfo:{
        height:145,
        width:'100%',
        position:'relative',
        borderBottomColor:'#dcdcdc',
        borderBottomWidth:1
    },
    info_wrap:{

        width: '100%',
        height: 120,
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 2
    },
    past:{
        width: 40,
        height:40,
        backgroundColor: '#9bd4ff',
        borderRadius: 20,
        position: 'absolute',
        right: 10,
        top: 10,
        textAlign: 'center'
    },
    mes:{
        marginTop:35,
        paddingLeft:10,
        paddingRight:10,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    photo:{
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: 'hidden',
    },
    banner:{
        width:'100%',
        height:125
    },
    tongji:{
        marginTop:30,
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'flex-end'
    },
    username:{
        color: '#333',
        height: 20,
        fontSize:15,
        textAlign: 'center'
    },
    name:{
        fontSize:11,
        color: '#999999',
        height:20,
        textAlign:'center',
        alignItems:'center'
    },
    num:{
        color: '#555555',
        fontSize: 14,
        textAlign:'center'
    },
    title_view:{
        flexDirection:'row',
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#6cb1ff'
    }
});
