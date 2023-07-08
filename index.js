if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition( // checking geolocation is available or not 
        position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const Api_key = "6b04f2a41dff4045864103621230707";

            const url = `https://api.weatherapi.com/v1/current.json?key=${Api_key}&q=${latitude},${longitude}`;

            fetch(url)
                .then(Response => Response.json())
                .then(data => {
                    // fetch current data
                    const temp_c = data.current.temp_c;
                    const temp_f = data.current.temp_f;
                    const humidity = data.current.humidity;
                    const wind_kph = data.current.wind_kph;


// puting data to input tags here
                    document.getElementById('temp').value = temp_c + " c";
                    document.getElementById('temp_f').value = temp_f + " f";
                    document.getElementById('hum').value = humidity;
                    document.getElementById('wind').value = wind_kph + " kph";
                })
        },
        error => {
            pass;
        }
    );
} else {
    pass;
}
