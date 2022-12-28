import { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/ui/iconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ui/Button";
import { ExpensesContext } from "../store/expenses-context";

const ManageExpense = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, []);

  const deleteExpenseHandler = () => {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    if (isEditing) {
      const expenseData = {
        description: "update",
        amount: 9.99,
        date: new Date(),
      };
      expensesCtx.updateExpense(editedExpenseId, { expenseData });
    } else {
      const expenseData = {
        description: "add",
        amount: 9.99,
        date: new Date(),
      };
      expensesCtx.addExpense({ expenseData });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button
          style={styles.buttonContainer}
          mode="flat"
          onPress={cancelHandler}
        >
          Cancel
        </Button>
        <Button style={styles.buttonContainer} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <View style={{ alignItems: "center" }}>
            <IconButton
              icon="trash"
              color={GlobalStyles.color.error500}
              size={36}
              onPress={deleteExpenseHandler}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: GlobalStyles.color.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.color.primary200,
    alignContent: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
