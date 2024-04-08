
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TransactionContainer } from './Components/TransactionContainer';
import TransactionList from './Components/TransactionList';
import SummaryComponent from './Components/Summary';
import AddTransactionComponent from './Components/AddTC';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TransactionContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0077B6',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            tabBarStyle: {
              backgroundColor: '#0077B6', // Background color of the tab bar
            },
            tabBarActiveTintColor: '#ffffff', // Color of the active tab
            tabBarInactiveTintColor: '#A0A0A0', // Color of the inactive tabs
            tabBarLabelStyle: {
              fontSize: 14, // Font size of the tab labels
            },
            tabBarIconStyle: {
              marginBottom: -3, // Adjust the icon position if needed
            },
            tabBarIndicatorStyle: {
              backgroundColor: '#ffffff', // Color of the indicator (line at the bottom of the active tab)
            },
          }}
        >
          <Tab.Screen
            name="TransactionList"
            component={TransactionList}
            options={{
              tabBarLabel: 'Transactions',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="list" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="AddTransaction"
            component={AddTransactionComponent}
            options={{
              tabBarLabel: 'Add Transaction',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="add-circle" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Summary"
            component={SummaryComponent}
            options={{
              tabBarLabel: 'Summary',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="bar-chart" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </TransactionContainer>
    </NavigationContainer>
  );
}
