import React, { useState, useEffect } from 'react'

function Weather() {

    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Delhi");

    const apikey=process.env.REACT_APP_WEATHER_API

    const fetchapi = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apikey}`
        const response = await fetch(url);
        console.log(response)
        const resjson = await response.json();
        setCity(resjson.main);
    }

    useEffect(() => {
        fetchapi();
    }, [search])



    return (
        <>
            <div>
                <div className='container'>
                    <div className='contents text-center'>
                        <h1 className='text-center my-3'>WeatherSite</h1>


                        <input className="form-control" list="datalistOptions" value={search} id="exampleDataList" placeholder="Type to search..."
                            onChange={(event) => {
                                setSearch(event.target.value)
                            }}
                        />


                        <button type="button" className="btn btn-primary my-3  " onClick={fetchapi}  >Search</button>
                        {!city ? (
                            <p>No data found</p>
                        ) : (
                            <div className="card text-center">
                                <div className="card-header">
                                    <h3>{search.toUpperCase()}</h3>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"></h5>
                                    <p className="card-text">

                                        Current temperature : {city.temp}°Cel <br /> <br />
                                        Min: {city.temp_min} °Cel<br /><br />
                                        Max: {city.temp_max} °Cel
                                        <br />
                                        <br />
                                        <div className="card-footer text-muted">
                                            API used : openweathermap
                                        </div>



                                    </p>

                                </div>

                            </div>
                        )}


                    </div>

                </div>
            </div>
        </>
    )
}

export default Weather