import { useRouter } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { weatherRequest } from '../shared/api/api';
import { WeatherInfo } from '../features/WeatherCard';
import { SearchBar } from '../features/SearchBar';
import ThemeToggle from '../features/ThemeProvider';
import { CityWeather } from '@/etities/CityWeather';
import { useThemeColors } from '../shared/hooks/useThemeColors';

export default function IndexPage() {
  const router = useRouter();
  const [weather, setWeather] = useState<CityWeather>();
  const colors = useThemeColors();

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;
    const response = await weatherRequest.get(query);
    if(response.success == undefined)
      setWeather(response);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.text }]}>Погода</Text>
      <View style={[styles.contentBox, { backgroundColor: colors.cardBackground }]}>
        <WeatherInfo cityWeather={weather} />
        <SearchBar onSearch={handleSearch} />
        <TouchableOpacity style={[styles.button, { backgroundColor: colors.buttonBackground }]} onPress={() => router.push('/realtime')}>
          <Text style={[styles.buttonText, { color: colors.buttonText }]}>Погода по местоположению</Text>
        </TouchableOpacity>
        <ThemeToggle />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  contentBox: { width: '90%', padding: 20, borderRadius: 20 },
  button: { padding: 12, borderRadius: 12, marginTop: 10 },
  buttonText: { textAlign: 'center' },
});
