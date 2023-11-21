import React, { useState, useEffect } from 'react'

const Restaurants = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    console.log('esta es mi app de restaurantes')
    initData();
  }, []);

  const initData = async () => {
    setLoading(true);
    setError(null);

    var url = process.env.test.local.REACT_APP_API_URL;

    var requestOptions = {
      method: 'GET'
    }

    try {
      const response = await fetch(url, requestOptions);
      const restaurants = await response.json();

      if (response.ok) {
        setData(restaurants);
      } else {
        throw new Error("No se pudo obtener la información");
      }
    } catch (err) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {data.map(restaurant => (
        <div key={restaurant._id}>
          <h2>{restaurant.name}</h2>
          <p>{restaurant.description}</p>
        </div>
      ))}
    </>
  )
}

export default Restaurants;