import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

import { getDateMinusDays } from "../util/date";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });

  console.log("RecentExpenses");
  return (
    <ExpensesOutput expenses={recentExpenses} periodName={"Last 7 Days"} />
  );
};

export default RecentExpenses;
