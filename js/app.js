
 const API_KEY = `ac6d95209204decbbccc8524842daacc`

 const searchTemp = () => {
     const city = document.getElementById('city-name').value
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
     fetch(url)
     .then(res => res.json())
     .then(data => displayTemp(data))
     
 }

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

 const displayTemp = temperutre => {
    setInnerText('city', temperutre.name)
    setInnerText('tempreture', temperutre.main.temp)
    setInnerText('condition', temperutre.weather[0].main)

    // set weather icon

    const url = `http://openweathermap.org/img/wn/${temperutre.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon')
    imgIcon.setAttribute('src', url)

   console.log(temperutre);
 }