fetch('https://api.openweathermap.org/data/2.5/forecast?q=ekaterinburg&appid=19a3b1a922eb7ba794cadcb4786e6be4&lang=ru')
    .then(resp => resp.json())
    .then(function (data) {
       let count = 0;
        let index = 0;
        let weatherDegrees = document.querySelectorAll('.weather__deg');
        let weatherDate = document.querySelectorAll('.weather__date');
        let weatherCity = document.querySelectorAll('.weather__city');
        let weatherIcon = document.querySelectorAll('.weather__img');
        for (let key in data.list) {
            if (key == count) {
                weatherCity[index].innerHTML = data.city.name
                weatherDegrees[index].innerHTML = Math.round((data.list[key].main.temp - 273)) + '&deg';
                weatherIcon[index].innerHTML = `<img src ='http://openweathermap.org/img/wn/${data.list[key].weather[0].icon}@2x.png'>`;
                weatherDate[index].innerHTML = data.list[key].dt_txt;
                count = count + 8;
                index++;
            }
        }
    })
    .catch(function () {
    });
  



