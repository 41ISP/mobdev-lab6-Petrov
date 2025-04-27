import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useThemeStore } from '../shared/store/themeStore';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <TouchableOpacity onPress={toggleTheme} style={styles.button}>
      <Text style={styles.text}>Сменить на {theme === 'light' ? 'тёмную' : 'светлую'} тему</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#555',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ThemeToggle;