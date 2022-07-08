async function CityAction(cityName) {
    console.log(cityName)
    const key = 'c310d2324ec409b97c2b7c9725574b2b';
    console.log(key)
    const cityData = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=1b8241e135315eca3d63b497ed3f35f5`) .then((data)=>{
        return data.json()
    })
    console.log(cityData)
    const lat = await cityData[0].lat
    const lon = await cityData[0].lon
    console.log(lat,lon)

    const weatherDetails = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`).then((data)=>{
        return data.json()
    })
    console.log(weatherDetails)
    const temperature =  weatherDetails.data.main
    const weather = weatherDetails.data.weather[0]
    const name = weatherDetails.data.name
     return weatherDetails
}
