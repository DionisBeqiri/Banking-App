import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, TextInput } from "react-native";
import BalanceCard from "../components/BalanceCard";
import ActionButton from "../components/ActionButton";
import { getAccount, depositMoney, withdrawMoney, sendMoney } from "../api/bankApi";

export default function HomeScreen() {
  const [account, setAccount] = useState(getAccount());
  const [sendTo, setSendTo] = useState("");

  const handleAction = (type) => {
    try {
      let updated;
      if (type === "deposit") updated = depositMoney(100);
      if (type === "withdraw") updated = withdrawMoney(50);
      if (type === "send") {
        if (!sendTo) return Alert.alert("Error", "Enter account number");
        updated = sendMoney(200, sendTo);
      }
      setAccount({ ...updated });
    } catch (err) {
      Alert.alert("Error", err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏦 My Bank</Text>
      <BalanceCard name={account.name} balance={account.balance} accountNumber={account.accountNumber} />

      <TextInput
        style={styles.input}
        placeholder="Send to account number"
        value={sendTo}
        onChangeText={setSendTo}
      />

      <View style={styles.actions}>
        <ActionButton text="➕ Deposit $100" color="#4CAF50" onPress={() => handleAction("deposit")} />
        <ActionButton text="➖ Withdraw $50" color="#FF9800" onPress={() => handleAction("withdraw")} />
        <ActionButton text="🔁 Send $200" color="#2196F3" onPress={() => handleAction("send")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#F3F6FF" },
  title: { fontSize: 30, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  actions: { marginTop: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 8, marginVertical: 10 },
});
