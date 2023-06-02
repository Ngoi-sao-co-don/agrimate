import '../css_pages/Footer.css'
import { Link } from "react-router-dom"
import Button from './Button'
import { useState, useEffect } from 'react'

function ConvertIconWeather(maTT){
    var src = `./iconThoiTiet/${maTT}.png`
    if(maTT === "Oops")
        return <p>Oops</p>
    return src;
}

function handleBackGround(time){
    const hour = time.split(':');
    if(hour[0] >= 0 && hour[0] < 18)
        return "Ban Ngày";
    return "Ban Đêm";
}

function ConvertToKM(dvm){
    var km = dvm/1000;
    return Math.round(km) + "Km";
}

function ConvertTomb(dvb){
    var mb = dvb/10;
    return  Math.round(mb) + "mb";
}


function Footer(){
    const [city, setCity] = useState("Đà Lạt");
    const [selectedCity, setSelectedCity] = useState("Đà Lạt")
    let [temp, setTemp] = useState("");
    let [humid, setHumid] = useState("");
    let [visibility, setVisibility] = useState("");
    let [weather, setWeather] = useState("");
    let [icon, setIcon] = useState("");
    let [pressure, setPressure] = useState("");
    // let temp, humid, weather = ""
    const handleInput = ()=>{
        setSelectedCity(city);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleInput();
        }
    };
    useEffect (()=>{
        const apiKey = "85f95892daffa1f098142c96cd74837c";
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric&lang=vi`)  
        // fetch("https://api.openweathermap.org/data/2.5/forecast?q=Da Lat&appid=85f95892daffa1f098142c96cd74837c&lang=vi")
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setTemp(data.main.temp);
                setHumid(data.main.humidity);
                setWeather(data.weather[0].description);
                setIcon(data.weather[0].icon);
                setVisibility(data.visibility);
                setPressure(data.main.pressure);
            })
            .catch(() =>
            {
                setTemp("Oops!");
                setHumid("Oops!");
                setWeather("Oops!");
                setIcon("Oops");
                setVisibility("Oops!");
                setPressure("Oops!");
            })
    },[selectedCity])


    return <section id="Footer">
        <div className='container'>
            <Link to="/" className='header_link-logo'>Agri Mate</Link>
            <div className='box_1'>
                <p>Địa chỉ liên lạc: Số 07, CR7, M30, Champions League</p>
                <p>Số điện thoại: (+84)358358306</p>
                <p>Trường Đại học Đà Lạt | Khoa Công nghệ thông tin</p>
            </div>
            <div className='content_weather'>
                <div className='content_weather_data'>
                    <p className='city'>
                        {selectedCity} 
                    </p>
                    <p className='temp'>{Math.round(temp)}° <img src={ConvertIconWeather(icon)} className='iconweather' /></p>
                    <p className='weather_des'>{weather}</p>
                    <div className='more_info'>
                        <div className='F'>
                            <p className='F_heading'>P: {ConvertTomb(pressure)}</p>
                        </div>

                        <div className='F'
                        >
                            <p className='F_heading'>V: {ConvertToKM(visibility)}</p>
                        </div>

                        <div className='F'>
                            <p className='F_heading'>H: {humid}%</p>
                        </div>
                    </div>
                    <div className='content_weather_inputcity'>
                        <input
                            type='text'
                            placeholder="Tìm thành phố"
                            onChange={(e) => { 
                                setCity(e.target.value) 
                            }}
                            onKeyDown={handleKeyPress}
                        />
                        <button onClick={handleInput}>Search</button>
                    </div>
                </div>

            </div>
        </div>
    </section>
}

export default Footer;