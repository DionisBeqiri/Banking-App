import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs'; // old version
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons'; // or FontAwesome, Ionicons, etc.

import HomeScreen from '../screens/HomeScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import AboutScreen from '../screens/AboutScreen';
import SendMoneyScreen from '../screens/SendMoneyScreen';

const BottomTabs = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={24} color={tintColor} />
        ),
      },
    },
    Transactions: {
      screen: TransactionsScreen,
      navigationOptions: {
        tabBarLabel: 'Transactions',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="account-balance-wallet" size={24} color={tintColor} />
        ),
      },
    },
    SendMoney: {
      screen: SendMoneyScreen,
      navigationOptions: {
        tabBarLabel: 'Send',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="send" size={24} color={tintColor} />
        ),
      },
    },
    About: {
      screen: AboutScreen,
      navigationOptions: {
        tabBarLabel: 'About',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="info" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#007AFF',
      inactiveTintColor: 'gray',
      style: { backgroundColor: '#fff', paddingBottom: 5, height: 60 },
      labelStyle: { fontSize: 12 },
    },
  }
);

export default createAppContainer(BottomTabs);
