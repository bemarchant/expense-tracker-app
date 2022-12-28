import { View, StyleSheet } from "react-native";
import { useContext } from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";
import { ExpensesContext } from "../../store/expenses-context";

const ExpensesOutput = ({ expenses, periodName }) => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={expensesCtx.expenses}
        periodName={periodName}
      />
      <ExpensesList expenses={expensesCtx.expenses} />
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
