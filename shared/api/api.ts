import axios from 'axios';
import { CityWeather } from "../../etities/CityWeather";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  params: { access_key: API_KEY },
});

export const weatherRequest = {
  get: async (location: string) => {
    const response = await apiClient.get<CityWeather>('forecast', {
      params: { query: location },
    });
    return response.data;
  },
};