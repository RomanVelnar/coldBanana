import React, { useMemo, useState } from "react";
import styled from "styled-components";

const Container = styled.section`
    width: 100vw;
    height: 100vh;
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


function DisplayProducts(props) {

    const { product } = props; 
    const [items] = useState(product);
    const [numberOfItemsToShown, setNumberOfItemsToShown] = useState(6);

    
    
    const showMore = () => {
        if (numberOfItemsToShown + 3 <= items[0].lenght) {
            setNumberOfItemsToShown(numberOfItemsToShown + 3);
        } else {
            setNumberOfItemsToShown(items[0].lenght);
        }
    };

    console.log(product)

    const itemsToShow = useMemo(() => {
        return items[0].slice(0, numberOfItemsToShown).map((item, index) => 
            <Card key={item.id}>
                <Image src={item.image} />
                <CardTextContainer>   
                    <CardTitle>{item.product_name}</CardTitle>
                    <CardPrice>£{item.price}</CardPrice>
                </CardTextContainer> 
            </Card>);
    }, [items, numberOfItemsToShown]);
  

        return(
            <Container>
                {product.length > 0 ? (
                    <CardContainer>
                        {itemsToShow}
                    </CardContainer>
                        ) : (
                        <p className="loading">Loading... </p>
                        )}
            <button onClick={showMore}>show More</button>
            </Container>
            
        )
}

export default DisplayProducts