import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.section`
    position: relative;
    max-width: 100vw;
    height: auto;
    padding:  0% 5% !important;
`

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: calc(90px + 1%);
    justify-items: center;

    @media (max-width: 1200px) {
        gap: calc(50px + 1%)   
    }
    @media (max-width: 1024px) {
        gap: calc(45px + 1%);
    }
    @media (max-width: 900px) {
        gap: calc(25px + 1%);
    }
    @media (max-width: 768px) {
        gap: calc(5px + 1%);
    }
    @media (max-width: 480px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: calc(40px + 1%);
        padding: 0px 20px !important;
    }
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    box-shadow: 1px 1px 11px 9px #E5E5E5;
    cursor: pointer;
`

const Image = styled.img`
    width: auto;
    height: 314px;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 1px 1px 11px 9px #E5E5E5;

    @media (max-width: 1200px) {
        height: 280px;   
    }
    @media (max-width: 1024px) {
        height: 255px;
    }    
    @media (max-width: 900px) {
        height: 230px;
    }
    @media (max-width: 768px) {
        height: 200px;
    }
    @media (max-width: 480px) {
        height: 250px;
    }
`

const CardTextContainer = styled.div`
    padding-left: 19px !important;
    padding-top: 31px !important;
    padding-bottom: 31px !important;

    @media(max-width: 1200px) {
        padding-top: 28px !important;
        padding-bottom: 28px !important; 
    }
    @media(max-width: 1024px) {
        padding-top: 25px !important;
        padding-bottom: 25px !important; 
    }
    @media(max-width: 900px) {
        padding-top: 22px !important;
        padding-bottom: 22px !important; 
    }
    @media(max-width: 768px) {
        padding-top: 19px !important;
        padding-bottom: 19px !important; 
    }
`

const CardTitle = styled.h4`
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;

    @media (max-width: 1200px) {
        font-size: 0.9rem;   
    }
    @media (max-width: 1024px) {
        font-size: 0.8rem;
    }
    @media (max-width: 900px) {
        font-size: 0.7rem;
    }
    @media (max-width: 768px) {
        font-size: 0.6rem;
    }
`
const CardPrice = styled.p`
    font-size: 1em;
    color: #747474 ;
    font-weight: bold;

    @media (max-width: 1200px) {
        font-size: 0.9rem;   
    }
    @media (max-width: 1024px) {
        font-size: 0.8rem;
    }
    @media (max-width: 900px) {
        font-size: 0.7rem;
    }
    @media (max-width: 768px) {
        font-size: 0.6rem;
    }
`
const LoadMoreButton = styled.a`
    font-size: 24px;
    font-weight: 600;
    color: #5C6DDE;
    margin-left: -50% !important;
    cursor: pointer;

    @media (max-width: 1200px) {
        font-size: 22px;   
    }
    @media (max-width: 1024px) {
        font-size: 20px;
    }
    @media (max-width: 900px) {
        font-size: 18px;
    }
    @media (max-width: 768px) {
        font-size: 16px;
    }
`

const API_URL = 'https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products';

const FetchProductData = () => {
  const [product, setProduct] = useState([]);
  const [visible, setVisible] = useState(3)

  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 3);
  };
  
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
                {product[0].slice(0, visible).map((item) => (
                <Card key={item.id}>
                    <Image src={item.image} />
                    <CardTextContainer>   
                        <CardTitle>{item.product_name}</CardTitle>
                        <CardPrice>£{item.price}</CardPrice>
                    </CardTextContainer> 
                </Card>
                ))}
                <LoadMoreButton onClick={showMoreItems}>Load More</LoadMoreButton>
            </CardContainer>
                ) : (
                <p className="loading">Loading... </p>
                )}
    </Container>
  );
};

export default FetchProductData;