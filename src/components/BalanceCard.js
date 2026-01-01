import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BalanceCard({ name, balance, accountNumber }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>Welcome, {name}</Text>
      <Text style={styles.account}>Account #: {accountNumber}</Text>
      <Text style={styles.label}>Current Balance</Text>
      <Text style={styles.balance}>${balance}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#6C63FF", borderRadius: 20, padding: 25, marginBottom: 15 },
  name: { color: "#fff", fontSize: 18 },
  account: { color: "#ddd", marginTop: 5 },
  label: { color: "#ddd", marginTop: 10 },
  balance: { color: "#fff", fontSize: 36, fontWeight: "bold", marginTop: 5 },
});
