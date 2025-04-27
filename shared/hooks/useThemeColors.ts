import { useThemeStore } from '../store/themeStore';
import { lightTheme, darkTheme } from '../theme/colors';

export const useThemeColors = () => {
  const { theme } = useThemeStore();
  return theme === 'light' ? lightTheme : darkTheme;
};
