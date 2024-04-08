import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionList from './TransactionList';
import TransactionDetails from './TransactionDetails';
import summary from './Summary';

const Stack = createStackNavigator();

const TransactionNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TransactionsList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1e90ff', 
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="TransactionsList"
        component={TransactionList}
        options={{ title: 'Transactions' }}
      />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetails}
        options={{ title: 'Transaction Details' }}
      />
      <Stack.Screen
        name="Summary"
        component={summary}
        options={{ 
          title: 'Summary',
          headerStyle: {
            backgroundColor: '#FF5733',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default TransactionNavigator;