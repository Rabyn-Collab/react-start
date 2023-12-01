import axios from 'axios';
import React, { useEffect, useState } from 'react'

const HomePage = () => {

  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);




  const getProducts = async () => {
    try {
      setLoad(true);
      const response = await axios.get('https://dummyjson.com/products');
      setLoad(false);
      setData(response.data);
    } catch (err) {
      setLoad(false);
      setErr(err.message);

    }
  }

  useEffect(() => {
    getProducts();
  }, []);


  if (load) {
    return <h1>Loading....</h1>;
  }

  if (err) {
    return <h1>{`${err}`}</h1>;
  }


  // setInterval(() => {
  //   console.log('lio');
  // }, 1000)

  // setTimeout(() => {
  //   console.log('lio');
  // }, 4000)
  // console.log('hello jee');


  console.log(data);

  return (
    <div>


    </div>
  )
}

export default HomePage
