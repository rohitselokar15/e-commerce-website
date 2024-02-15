import React, { useContext } from "react";
import {ProductContext} from '../context/ProductContext'
import { Link } from "react-router-dom";

const ProductList = () => {
  
  const {data,loading} = useContext(ProductContext);
  

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    
    <div className=" grid grid-cols-2 gap-7 mx-4 text-center py-6 md:grid-cols-3 md:mx-12 md:gap-5 lg:gap-7 lg:mx-14 xl:grid-cols-4 xl:mx-20">
      {data.map((product) => {
        return (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className=" shadow-md flex flex-col items-center justify-center p-1 py-2 md:p-1 lg:p-2 my-2">
              <img src={product.image} alt="err" className="h-auto w-14 md:w-14 md:m-2 lg:w-20 xl:w-24"/>
              <p className="my-2 font-bold text-[14px] lg:text-[16px] xl:text-[17px]">{product.title}</p>
              <p className="mt-1 mb-2 xl:text-[17px]">Rs.{product.price}</p>
              <p className="font-bold text-[14px] lg:text-[16px] xl:text-[17px]">{product.category}</p>
            </div>
          </Link>
        );
      })
      }
    </div>
  );
}

export default ProductList;
