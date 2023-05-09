declare namespace OpenMetro {
  type ApiResponse = {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: "Asia/Tokyo";
    timezone_abbreviation: "JST";
    elevation: number;
    daily_units: {
      time: string;
      precipitation_sum: "mm";
      rain_sum: "mm";
      showers_sum: "mm";
      snowfall_sum: "cm";
      precipitation_hours: "h";
      precipitation_probability_max: "%";
    };
    daily: {
      time: string[];
      precipitation_sum: number[];
      rain_sum: number[];
      showers_sum: number[];
      snowfall_sum: number[];
      precipitation_hours: number[];
      precipitation_probability_max: number[];
    };
  };

  type Weather = {
    date: string;
    precipitationSum: number;
    rainSum: number;
    showersSum: number;
    snowfallSum: number;
    precipitationHours: number;
    precipitationProbabilityMax: number;
  };
}

export async function retrieveWeatherData(props: {
  latitude: number;
  longitude: number;
}): Promise<OpenMetro.Weather[]> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${props.latitude}&longitude=${props.longitude}&daily=precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max&timezone=Asia%2FTokyo`;
  const res = await fetch(url);
  const json = (await res.json()) as OpenMetro.ApiResponse;
  const weathers = json.daily.time.map((time, index) => {
    return {
      date: time,
      precipitationSum: json.daily.precipitation_sum[index],
      rainSum: json.daily.rain_sum[index],
      showersSum: json.daily.showers_sum[index],
      snowfallSum: json.daily.snowfall_sum[index],
      precipitationHours: json.daily.precipitation_hours[index],
      precipitationProbabilityMax: json.daily.precipitation_probability_max[index],
    };
  });
  return weathers;
}
