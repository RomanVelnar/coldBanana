import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayProducts from './DisplayProducts';
import styled from 'styled-components';

const Container = styled.section`
    position: relative;
    max-width: 100vw;
    height: auto;
    padding: 302px 75px !important;
`

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: calc(20px + 1%);
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 369px;
    height: 440px;
    border-radius: 25px;
    box-shadow: 1px 1px 11px 9px #E5E5E5;
`

const Image = styled.img`
    width: auto;
    height: 314px;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 1px 1px 11px 9px #E5E5E5;
`

const CardTextContainer = styled.div`
    padding-left: 19px !important;
    padding-top: 31px !important;
`

const CardTitle = styled.h4`
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
`
const CardPrice = styled.p`
    font-size: 1em;
    color: #747474 ;
    font-weight: bold;
`

const API_URL = 'https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products';

const FetchProductData = () => {
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setProduct(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
        {product.length > 0 ? (
            <CardContainer>
                {product[0].map((item) => (
                <Card key={item.id}>
                    <Image src={item.image} />
                    <CardTextContainer>   
                        <CardTitle>{item.product_name}</CardTitle>
                        <CardPrice>£{item.price}</CardPrice>
                    </CardTextContainer> 
                </Card>
                ))}
            </CardContainer>
                ) : (
                <p className="loading">Loading... </p>
                )}
    </Container>
  );
};

export default FetchProductData;