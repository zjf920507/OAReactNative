import React from 'react'
import {View, StyleSheet, Image, Text, FlatList, ToastAndroid, Button, TouchableOpacity} from "react-native";
import {showToast,ScreenWidth} from '../../utils/DeviceManagement'
import BaseComponent from "../base/BaseComponent";
const functionIcon = [
    {
        "name": "请假",
        "pic": require('../../image/qingjia.png')
    },
    {
        "name": "外出",
        "pic": require('../../image/waichu.png')
    },
    {
        "name": "出差",
        "pic": require('../../image/chucai.png')
    },
    {
        "name": "调休",
        "pic": require('../../image/tiaoxiu.png')
    },
    {
        "name": "加班",
        "pic": require('../../image/jiaban.png')
    },
    {
        "name": "订餐",
        "pic": require('../../image/dingcan.png')
    },
    {
        "name": "电气控制",
        "pic": require('../../image/dianqi.png')
    },
    {
        "name": "环境监控",
        "pic": require('../../image/huanjing.png')
    }
]


export default class JobBar extends BaseComponent{
    constructor(props){
        super(props)
    }
    /**
     *  子itemlayout元素
     * */
    _itemView = (item)=>{
        return(
            <TouchableOpacity  style={styles.item_layout}
                    onPress={()=>{showToast(item.name)}}>
                <Image style={styles.item_image} source={item.pic}/>
                <Text style={styles.item_text}>{item.name}</Text>
            </TouchableOpacity >)
    }



    _render(){
        return(<View style={styles.root}>
            <View style={styles.head}>
                <View style={styles.head_child}>
                    <Image style={styles.image} source={require('../../image/my_requesy.png')}>
                    </Image>
                    <Text style={styles.text_font}>我申请的</Text>
                </View>
                <View style={styles.head_child}>
                    <Image style={styles.image} source={require('../../image/my_respon.png')}>
                    </Image>
                    <Text style={styles.text_font}>我审批的</Text>
                </View>
            </View>


            <View style={styles.body}>
                <View>
                    <FlatList style={styles.list_layout}
                              data={functionIcon}
                              horizontal={false}
                              numColumns={4}
                              renderItem={({item}) => this._itemView(item)}
                              getItemLayout={(data,index)=>({length:100,offset:100*index,index})}
                    />
                </View>
            </View>

        </View>)
    }
}


const styles = StyleSheet.create({
    root:{
        flex:1,
        flexDirection:'column',
    },
    head:{
        flex:1,
        backgroundColor:'#2fa8e1',
        flexDirection:'row',
    },
    body:{
        flex:3
    },
    head_child:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    text_font:{
        color:'white',
        marginTop:10,
    },
    image:{
        width:45,
        height:50,
    },
    list_layout:{
        marginTop:20,
    },
    item_layout:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
    },
    item_image:{
        width:45,
        height:45,
    },
    item_text:{
        color:'#888',
        fontSize:14,
        marginTop:10,
    }


})
