import { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { weatherRequest } from '../shared/api/api';
import { WeatherInfo } from '../features/WeatherCard';
import * as Location from 'expo-location';
import { CityWeather } from "../etities/CityWeather";

export default function RealTimePage() {
  const router = useRouter();
  const [weather, setWeather] = useState<CityWeather>();

  const fetchWeather = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') return;
    const loc = await Location.getCurrentPositionAsync({});
    const coords = `${loc.coords.latitude},${loc.coords.longitude}`;
    const response = await weatherRequest.get(coords);
    if(response.success == undefined)
      setWeather(response);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Погода по местоположению</Text>
      <View style={styles.contentBox}>
        <WeatherInfo cityWeather={weather} />
        <TouchableOpacity style={styles.button} onPress={fetchWeather}>
          <Text style={styles.buttonText}>Обновить</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#dc2626' }]} onPress={() => router.push('/') }>
          <Text style={styles.buttonText}>Назад</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1a1a1a' },
  header: { fontSize: 22, fontWeight: 'bold', color: 'white', marginBottom: 20 },
  contentBox: { width: '90%', padding: 20, backgroundColor: '#2d2d2d', borderRadius: 20 },
  button: { backgroundColor: '#2563eb', padding: 12, borderRadius: 12, marginTop: 10 },
  buttonText: { color: 'white', textAlign: 'center' },
});