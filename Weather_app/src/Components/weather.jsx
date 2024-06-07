import React, { useEffect, useState } from "react";
import Icon from "../assets/images/Icon.png";
import Cloudy from "../assets/images/Cloudy.json";
import Lottie from "lottie-react";
import Temp from "../assets/images/Temp1.json";
import Data from "../assets/images/Data_Not_Found.json";
import Humidity from "../assets/images/humidity.png";
import Weather from "../assets/images/Weather.png";
import Windspeed from "../assets/images/Wind_Speed.png";
import Air from "../assets/images/Air_pressure.png";
import Location from "../assets/images/location.png";
import Cloudyy from "../assets/images/Mycloud.json";
import Sun from "../assets/images/Sun.json";
import Rainy from "../assets/images/Rainy2.json";
import haze from '../assets/images/Haze.json'

function weather() {
  const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
  //   const city = "london";

  const [city, setcity] = useState("");
  const [datas, setdatas] = useState("");
  const [humidity, sethumidity] = useState("");
  const [wind, setwind] = useState("");
  const [weather, setweather] = useState("");
  const [pressure, setpressure] = useState("");

  async function fetchdata() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setdatas(data.main.temp);
      setwind(data.wind.speed);
      sethumidity(data.main.humidity);
      setweather(data.weather[0].main);
      setpressure(data.main.pressure);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  function onchangeHandler(e) {
    let value = e.target.value;
    setcity(value);
  }

  function clickHandler() {
    onchangeHandler();
  }

  useEffect(() => {
    fetchdata();
  });

  return (
    <>
      <div>
        <div className="  flex flex-col gap-4 justify-center ">
          <h1 className=" mt-10 weather text-white text-center">Weather App</h1>
          <div className=" flex justify-center align-middle  ml-10">
            <input
              onChange={onchangeHandler}
              className="Box w-[500px] h-10 "
              type="text"
              placeholder="  Search For Location"
            />
            <button onClick={clickHandler} className=" absolute ml-[430px]">
              <img className=" mt-1 w-8" src={Icon} />
            </button>
          </div>
        </div>
        <div className="flex justify-center align-middle">
          <div className=" mt-6 ml-14 rounded-3xl w-[800px] h-[500px] bg-gradient-to-r  from-green-500 to-blue-700 overflow-y-hidden ">
            {!city ? (
              <div>
                <div className="flex flex-col space-y-2 ">
                  <Lottie animationData={Data} className="anim w-56 " />
                  <p className=" Span2 text-center mt-40">Data not found</p>
                </div>
              </div>
            ) : (
              <div>
                <div className="Data_div flex flex-row gap-1 ">
                  <span className="span3">{city}</span>
                  <img className="Location_img" src={Location} />
                </div>

                <div className=" flex justify-center align-middle ">

                {
                    weather=="Clouds"? ( <div>
                  
                  <Lottie
                    className=" w-36 -mt-10 Text-animation"
                    animationData={Cloudyy}
                  />
                </div>) :(<div>
                  
                  <Lottie
                    className=" w-28 Text-animation"
                   animationData={Sun}
                  />
                </div>)
                  }
                 


                 



                </div>

                <div className=" -space-x-2 flex justify-center align-middle mt-16 -ml-8 ">
                  <Lottie className="w-24 -mt-6 " animationData={Temp} />
                  <img />
                  <span className="span">{datas} C</span>
                  <img />
                </div>
                <div className=" flex flex-row gap-16 justify-center align-middle mt-24">
                  <div className="flex flex-col ">
                    <h1 className="weather">Humidity</h1>
                    <div className=" flex flex-row gap-2 ">
                      <img className="Humidity " src={Humidity} />
                      <h1 className="Span1">{humidity}</h1>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <h1 className="weather">Weather</h1>
                    <div className="flex flex-row gap-2">
                      <img className="Humidity " src={Weather} />
                      <h1 className="Span1">{weather}</h1>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <h1 className="weather">Wind speed</h1>
                    <div className="flex flex-row gap-2">
                      <img className="Humidity " src={Windspeed} />
                      <h1 className="Span1">{wind}</h1>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <h1 className="weather">Air pressure</h1>
                    <div className="flex flex-row gap-2">
                      <img className="Humidity " src={Air} />
                      <h1 className="Span1">{pressure}</h1>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default weather;
