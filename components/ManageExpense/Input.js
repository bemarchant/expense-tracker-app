import { StyleSheet, View, Text, TextInput } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ label, isValid, style, textInputConfig }) => {
  const inputStyle = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={isValid ? styles.label : styles.errorLabel}>{label}</Text>
      <TextInput style={inputStyle} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.color.primary100,
    marginBottom: 4,
  },
  errorLabel: {
    fontSize: 12,

    color: GlobalStyles.color.error500,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.color.primary100,
    color: GlobalStyles.color.primary700,
    padding: 6,
    borderBottomColor: 6,
    fontSize: 18,
  },

  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
