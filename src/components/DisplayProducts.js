import React from "react";
import styled from "styled-components";
import FetchProductData from "./FetchProductData";

const Card = styled.div`
    height: 

`

function DisplayProducts(props) {

    const { product } = props;

    return(
        <Card>
        {product.length > 0 ? (
          <div>
            {product[0].map((post) => (
              <div>
                <h2>{post.price}</h2>
                <p>{post.stock_count}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="loading">Loading... </p>
        )}
      </Card>
    )
}

export default DisplayProducts