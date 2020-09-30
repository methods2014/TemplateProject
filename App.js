import * as React from 'react';
import { Text, View, Image, LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import home from './app/home'
import FloorHost from './app/frame/host/FloorHost'


function home() {
  return <FloorHost page={'HomePage'} />
/*  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home2222!</Text>
    </View>
  );*/
}

function list() {
  return <FloorHost page={'ListPage'} />
/*  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>list!</Text>
    </View>
  );*/
}

function find() {
  return <FloorHost page={'FindPage'} />
/*  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>find!</Text>
    </View>
  );*/
}

function mine() {
  return <FloorHost page={'MinePage'} />
/*  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>mine!</Text>
    </View>
  );*/
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  //console.disableYellowBox = true;
  LogBox.ignoreAllLogs(true)
  return (
    <Tab.Navigator initialRouteName="home" tabBarOptions={{
      activeTintColor: '#d81e06',
    }}>
      <Tab.Screen name="home" component={home} options={{title:'首页',
        tabBarIcon: ({ color, size,focused }) => (
          <Image style={{ width: 20, height: 20 }}
                 source={focused ? require('./app/image/tab/home_check.png') : require('./app/image/tab/home.png') } />
        ),}}/>
      <Tab.Screen name="list" component={list} options={{title:'列表',
        tabBarIcon: ({ color, size,focused }) => (
          <Image
            style={{ width: 20, height: 20 }}
            source={focused ? require('./app/image/tab/list_check.png') :require('./app/image/tab/list.png')} />
        ),}}/>
      <Tab.Screen name="find" component={find} options={{title:'发现',
        tabBarIcon: ({ color, size,focused }) => (
          <Image
            style={{ width: 20, height: 20 }}
            source={focused ? require('./app/image/tab/find_check.png') :require('./app/image/tab/find.png')} />
        ),}}/>
      <Tab.Screen name="mine" component={mine} options={{title:'我的',
        tabBarIcon: ({ color, size,focused }) => (
          <Image
            style={{ width: 20, height: 20 }}
            source={focused ? require('./app/image/tab/mine_check.png') :require('./app/image/tab/mine.png')} />
        ),}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
