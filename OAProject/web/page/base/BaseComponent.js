import React,{Component} from 'react'
import {View,StyleSheet} from "react-native";


export default class BaseComponent extends Component {


    render(){
        return(<View style={styles.root}>
            {this._render()}
        </View>)
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'#fff',
    }
})