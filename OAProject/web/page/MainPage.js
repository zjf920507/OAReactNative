import React,{Component} from 'react'
import {Image, View,StyleSheet} from "react-native";
import TabNavigator from 'react-native-tab-navigator';
import JobBar from "./navigationBar/JobBar";
import AttendanceBar from "./navigationBar/AttendanceBar";
import MessageBar from "./navigationBar/MessageBar";
import MyBar from "./navigationBar/MyBar";




export default class MainPage extends Component{

    static navigationOptions = ({navigation, screenProps}) => ({
        header:null
    });


    static defaultProps = {
        selectedColor: 'rgb(22,131,251)',
        normalColor: '#a9a9a9'
    };
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'job',
            tabName: ['工作', '考勤', '消息','我的']
        }
    }

    render(){
        const {selectedColor} = this.props;
        const {tabName} = this.state;
        return(<TabNavigator
            hidesTabTouch={true}
            tabBarStyle={styles.tabbar}
            sceneStyle={{ paddingBottom: styles.tabbar.height }}>
            <TabNavigator.Item
                tabStyle={styles.tabStyle}
                title={tabName[0]}
                selected={this.state.selectedTab === 'job'}
                selectedTitleStyle={{color: selectedColor}}
                renderIcon={() => <Image style={styles.tab} source={require('../image/job_no.png')} />}
                renderSelectedIcon={() => <Image style={styles.tab} source={require('../image/job.png')} />}
                onPress={() => this.setState({ selectedTab: 'job' })}>
                {<JobBar />}
            </TabNavigator.Item>
            <TabNavigator.Item
                tabStyle={styles.tabStyle}
                title={tabName[1]}
                selected={this.state.selectedTab === 'attendance'}
                selectedTitleStyle={{color: selectedColor}}
                renderIcon={() => <Image style={styles.tab} source={require('../image/kaoqing_no.png')} />}
                renderSelectedIcon={() => <Image style={styles.tab} source={require('../image/kaoqing.png')} />}
                onPress={() => this.setState({ selectedTab: 'attendance' })}>
                {<AttendanceBar />}
            </TabNavigator.Item>
            <TabNavigator.Item
                tabStyle={styles.tabStyle}
                title={tabName[2]}
                selected={this.state.selectedTab === 'message'}
                selectedTitleStyle={{color: selectedColor}}
                renderIcon={() => <Image style={styles.tab} source={require('../image/message_no.png')} />}
                renderSelectedIcon={() => <Image style={styles.tab} source={require('../image/message.png')} />}
                onPress={() => this.setState({ selectedTab: 'message' })}>
                {<MessageBar />}
            </TabNavigator.Item>
            <TabNavigator.Item
                tabStyle={styles.tabStyle}
                title={tabName[3]}
                selected={this.state.selectedTab === 'my'}
                selectedTitleStyle={{color: selectedColor}}
                renderIcon={() => <Image style={styles.tab} source={require('../image/user_no.png')} />}
                renderSelectedIcon={() => <Image style={styles.tab} source={require('../image/user.png')} />}
                onPress={() => this.setState({ selectedTab: 'my' })}>
                {<MyBar />}
            </TabNavigator.Item>
        </TabNavigator>)
    }
}

const styles = StyleSheet.create({
    tabbar: {
        height: 49,

        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    tabStyle:{
        alignItems:'center',
        justifyContent: 'center',
    },
    tab: {
        width: 22,
        height: 22
    }
});

