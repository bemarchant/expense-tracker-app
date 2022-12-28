import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  console.log("AllExpenses");
  return (
    <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod={"Total"} />
  );
};

export default AllExpenses;
