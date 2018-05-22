import { AppRegistry } from 'react-native';
import {StackNavigator} from "react-navigation";
import MainPage from "./web/page/MainPage";



const Apps = StackNavigator({
    MainPage: {screen: MainPage},


},{initialRouteName: 'MainPage',
    mode: 'card', // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
});

AppRegistry.registerComponent('OAProject', () => Apps);
