import React, { useState, useEffect } from 'react'

const Restaurants = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('esta es mi app de restaurantes')
    initData();
  }, []);

  const initData = async () => {
    var url = process.env.REACT_APP_API_URL;

    var requestOptions = {
      method: 'GET'
    }

    const response = await fetch(url, requestOptions); // fetch es una promesa

    console.log(response);

  }

  return (
    <div>

    </div>
  )
}


export default Restaurants;