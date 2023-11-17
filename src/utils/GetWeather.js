const API_KEY = '0b0a2092b5ea43d0a81112101231711';
const CITY = 'Sevastopol'

export default async function getWeather() {
    let weather = [];
  
    const url = new URL('https://api.weatherapi.com/v1/current.json');
    url.searchParams.set('key', API_KEY);
    url.searchParams.set('q', CITY);
  
    await fetch(url, {
        headers: {
            'mode': 'no-cors'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            weather = data;
            console.log(weather);
        });

    return weather;
}
