import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useThemeColors } from '../shared/hooks/useThemeColors';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const colors = useThemeColors();

  return (
    <View>
      <TextInput
        style={[styles.input, { backgroundColor: colors.inputBackground, color: colors.inputText }]}
        placeholder="Введите населённый пункт"
        placeholderTextColor="#ccc"
        value={query}
        onChangeText={setQuery}
      />
      <TouchableOpacity style={[styles.button, { backgroundColor: colors.buttonBackground }]} onPress={() => onSearch(query)}>
        <Text style={[styles.buttonText, { color: colors.buttonText }]}>Поиск</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    padding: 12,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
  },
});
