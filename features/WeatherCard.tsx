import { View, Text, Image, StyleSheet } from 'react-native';
import { CityWeather } from "../etities/CityWeather";
import { useThemeColors } from '../shared/hooks/useThemeColors';

interface CityWeatherProps {
  cityWeather: CityWeather;
}

export const WeatherInfo = ({ cityWeather }: CityWeatherProps) => {
    const colors = useThemeColors();
    if(cityWeather == undefined)
        return;

  return (
    <View style={styles.info}>
      <Text style={[styles.title, { color: colors.text }]}>Информация</Text>
      <Text style={[styles.text, { color: colors.text }]}>Город: {cityWeather.location.name}</Text>
      <Image
        source={{ uri: cityWeather.current.weather_icons[0] }}
        style={{ width: 60, height: 60 }}
      />
      <Text style={[styles.text, { color: colors.text }]}>Температура: {cityWeather.current.temperature}°C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 5,
  },
});
