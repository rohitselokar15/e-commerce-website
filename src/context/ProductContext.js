import React, { useEffect, useState } from 'react'
import Loading from '../pages/Loading';
import { createContext} from "react";

export const ProductContext = createContext();


const ProductProvider = ({children}) => {

    const[data,setData] = useState([]);
    const[sortOrder,setSortOrder] = useState('low-to-high');
    const[loading, setLoading] = useState(true);

    // https://fakestoreapi.com/products
    // http://localhost:3000/data

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
            .then((response)=>response.json())
            .then((data)=>{
                setData(data);
                setLoading(false);
            })
            .catch((error)=>{
                console.log(error);
                setLoading(false);
            });
    },[]);


    const toggleSortOrder = () =>{
        setSortOrder((prevOrder)=>(prevOrder === 'low-to-high' ? 'high-to-low': 'low-to-high'));
    };

    const sortedData = [...data].sort((a, b) => {
        if (sortOrder === 'low-to-high') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });

    const contextValue = {
        data:sortedData,
        sortOrder,
        toggleSortOrder,
        loading,
    };


    return (
        <ProductContext.Provider value={contextValue}>
            {loading ? <Loading/>:children}
        </ProductContext.Provider>
    )
}

export default ProductProvider