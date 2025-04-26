import { useRouter } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { weatherRequest } from '../shared/api/api';
import { WeatherInfo } from '../features/WeatherCard';
import { SearchBar } from '../features/SearchBar';
import ThemeToggle from '../features/ThemeProvider';
import { CityWeather } from '@/etities/CityWeather';


export default function IndexPage() {
  const router = useRouter();
  const [weather, setWeather] = useState<CityWeather>();

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;
    const response = await weatherRequest.get(query);
    if(response.success == undefined)
      setWeather(response);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Погода</Text>
      <View style={styles.contentBox}>
        <WeatherInfo cityWeather={weather} />
        <SearchBar onSearch={handleSearch} />
        <TouchableOpacity style={styles.button} onPress={() => router.push('/realtime')}>
          <Text style={styles.buttonText}>Погода по местоположению</Text>
        </TouchableOpacity>
        <ThemeToggle />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1a1a1a' },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: 'white' },
  contentBox: { width: '90%', padding: 20, backgroundColor: '#2d2d2d', borderRadius: 20 },
  button: { backgroundColor: '#2563eb', padding: 12, borderRadius: 12, marginTop: 10 },
  buttonText: { color: 'white', textAlign: 'center' },
});
