import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios, { Axios } from "axios";
import DispayProducts from "./DisplayProducts";

function Products() {
    const [products, getProducts] = useState('');

    const url = 'https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products';

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = () => {
        axios.get('${url}').then((res) => {


            const allProducts = res.data;
            // add data to State
            getProducts(allProducts);
        })
        .catch(error => console.error('Error: ${error}'));
    }

    return(
        <DispayProducts products={products} />
    )
}

export default Products
