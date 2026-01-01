import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import apiData from '../api/api.json';

export default function SendMoneyScreen({ navigation }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const sendMoney = () => {
    const amt = parseFloat(amount);
    if (!name || !amount || isNaN(amt)) {
      return Alert.alert('Error', 'Enter valid name and amount.');
    }

    if (amt > apiData.balance) {
      return Alert.alert('Error', 'Insufficient balance.');
    }

    // Deduct balance in memory
    apiData.balance -= amt;

    // Add transaction in memory
    apiData.transactions.push({
      id: Date.now(),
      name,
      amount: amt,
      date: new Date().toISOString(),
    });

    Alert.alert('Success', `Sent $${amt} to ${name}`);
    setName('');
    setAmount('');
    navigation.navigate('Transactions'); // go to transactions screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Send To:</Text>
      <TextInput
        style={styles.input}
        placeholder="Recipient Name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Amount:</Text>
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Button title="Send Money" onPress={sendMoney} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 18, marginTop: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
});
