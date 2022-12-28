import { createContext, useReducer } from "react";
import { exp } from "react-native/Libraries/Animated/Easing";

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

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = () => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = ({ expenseData }) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (id, { expenseData }) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  return <ExpensesContext.Provider> {children}</ExpensesContext.Provider>;
};
