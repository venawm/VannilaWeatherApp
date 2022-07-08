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
    console.log(weatherDetails.main.temp)

    const temp =  document.querySelector('.maincard')
    temp.innerHTML = `<h1>${weatherDetails.main.temp}</h1>`

    const value = 50
 
    let circularButton = document.querySelector('.outercircle')
    
    console.log(circularButton)
    bar(value,circularButton)
   
  
    
}



const form = document.querySelector('.input')
form.addEventListener('submit',e=>{
    e.preventDefault()
    CityAction(e.target.a.value)
})

function bar(value,circularButton){
    let val = 0
    let progres  = setInterval(() => {
        val++
        console.log(val)
        circularButton.innerHTML = ` <div class="innercircle"><h1>${val}%</h1></div>`
        circularButton.style.background = `conic-gradient(#837bff ${value*3.6}deg ,#edf3ff 0deg)`
        if(val==value){
            clearInterval(progres)
        }
        
    });
} 
