import { View, Text } from "react-native";

const ExpensesSummary = ({ expenses }) => {
  return (
    <View>
      <Text>Last 7 days</Text>
      <Text>$178.99</Text>
    </View>
  );
};

export default ExpensesSummary;
