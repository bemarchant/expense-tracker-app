import { Flatlist, View, Text } from "react-native";

const renderExpenseItem = (itemData) => {
  console.log("itemData : ", itemData.item);
  return <Text>{itemData.item.description}</Text>;
};
const ExpensesList = ({ expenses }) => {
  return (
    <View>
      <Flatlist
        data={expenses}
        renderItem={renderExpenseItem(expenses)}
        keyExtractor={(item) => {
          item.id;
        }}
      />
    </View>
  );
};

export default ExpensesList;
