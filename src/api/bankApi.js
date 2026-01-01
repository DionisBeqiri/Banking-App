let userAccount = {
  name: "Alex",
  accountNumber: "12345678",
  balance: 1200,
  transactions: [], // stores all transactions
};

export const getAccount = () => userAccount;

export const depositMoney = (amount) => {
  userAccount.balance += amount;
  userAccount.transactions.push({
    type: "Deposit",
    amount,
    date: new Date().toLocaleString(),
  });
  return userAccount;
};

export const withdrawMoney = (amount) => {
  if (amount > userAccount.balance) throw new Error("Not enough balance");
  userAccount.balance -= amount;
  userAccount.transactions.push({
    type: "Withdraw",
    amount,
    date: new Date().toLocaleString(),
  });
  return userAccount;
};

export const sendMoney = (amount, toAccount) => {
  if (amount > userAccount.balance) throw new Error("Not enough balance");
  userAccount.balance -= amount;
  userAccount.transactions.push({
    type: "Send",
    amount,
    toAccount,
    date: new Date().toLocaleString(),
  });
  return userAccount;
};
