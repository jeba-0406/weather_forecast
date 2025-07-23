
import { create } from 'zustand';

type WeatherData = {
  temperature: number;
  city: string;
  humidity: number;
  windSpeed: number;
  weathertype:string;
};

type WeatherState = {
  weather: WeatherData | null;
  isLoading: boolean;
  error: string | null;
  fetchWeather: (city: string) => Promise<void>;
};

export const useWeatherStore = create<WeatherState>((set) => ({
  weather: null,
  isLoading: false,
  error: null,

  fetchWeather: async (city: string) => {
    set({ isLoading: true, error: null });

    try {
      const apiKey = '84ae1d1d958fdf0416e65de191b47a42';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();

      if (data.cod !== 200) {
        throw new Error(data.message);
      }

      set({
        weather: {
          temperature: data.main.temp,
          city: data.name,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          weathertype:data.weather[0].main,
        },
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      set({
        isLoading: false,
        weather: null,
        error: error.message || 'Failed to fetch weather',
      });
    }
  },
}));
