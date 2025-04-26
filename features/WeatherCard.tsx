import { View, Text, Image, StyleSheet } from 'react-native';
import { CityWeather } from "../etities/CityWeather";

interface CityWeatherProps{
    cityWeather: CityWeather
}

export const WeatherInfo = ({ cityWeather }: CityWeatherProps) => {
    console.log(cityWeather);
    if(cityWeather == undefined)
        return;

  return (
    <View style={styles.info}>
      <Text style={styles.title}>Информация</Text>
      <Text style={styles.text}>Город: {cityWeather.location.name}</Text>
      <Image
        source={{ uri: cityWeather.current.weather_icons[0] }}
        style={{ width: 60, height: 60 }}
      />
      <Text style={styles.text}>Температура: {cityWeather.current.temperature}°C</Text>
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
    color: 'white',
  },
  text: {
    color: '#ccc',
    marginTop: 5,
  },
});