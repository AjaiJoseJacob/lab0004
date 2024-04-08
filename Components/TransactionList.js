// TransactionList.js

import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from './Style';
import { TransactionsContext } from './TransactionContainer';

const TransactionList = ({ navigation }) => {
  const { transactionsData, loading } = useContext(TransactionsContext);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
      style={styles.listItemContainer}
    >
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.itemPrice}>{item.amount}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderSeparator = () => <View style={styles.listItemSeparator} />;

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0077B6" />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={transactionsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default TransactionList;
