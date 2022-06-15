import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayProducts from './DisplayProducts';


const API_URL = 'https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products';

const FetchProductData = () => {
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setProduct(data);

    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DisplayProducts product={product} />
  );
};

export default FetchProductData;