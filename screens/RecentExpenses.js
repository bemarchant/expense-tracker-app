import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useState, useContext, useEffect } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/ui/LoadingOverlay";

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);

  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
      setIsFetching(false);
      expensesCtx.setExpenses(expenses);
    };

    getExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });

  if (isFetching) {
    return <LoadingOverlay />;
  }
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      periodName={"Last 7 Days"}
      fallBackText={"No Expenses Registered For The Last 7 days"}
    />
  );
};

export default RecentExpenses;
