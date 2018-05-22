import {ToastAndroid} from 'react-native'
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;



var showToast = (message)=>{
    ToastAndroid.show(message,ToastAndroid.SHORT)
}




module.exports = {
    ScreenWidth,
    ScreenHeight,
    ScreenScale,
    showToast,
}