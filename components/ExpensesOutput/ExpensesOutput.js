import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

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

const ExpensesOutput = ({ periodName }) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;
