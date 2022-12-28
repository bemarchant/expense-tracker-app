import { FlatList, Text } from "react-native";

function renderExpenseItem(itemData) {
  console.log("renderExpenseItem");
  return <Text>{itemData.item.description}</Text>;
}

const ExpensesList = ({ expenses }) => {
  console.log("ExpensesList");
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
