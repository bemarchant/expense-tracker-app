import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-12-27"),
  },

  {
    id: "e2",
    description: "Hamburguer + coke",
    amount: 19.99,
    date: new Date("2022-12-25"),
  },

  {
    id: "e3",
    description: "Climbing shoes",
    amount: 120.99,
    date: new Date("2022-12-12"),
  },
  {
    id: "e4",
    description: "Badbunny ticket",
    amount: 120.99,
    date: new Date("2022-08-12"),
  },
];

const ExpensesOutput = ({ expenses, periodName }) => {
  console.log("ExpensesOutput");

  console.log("ExpensesOutput - periodName", periodName);
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.color.primary700,
  },
});
