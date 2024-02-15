import React, { useContext, useEffect, useState } from 'react'
import { ProductContext} from '../context/ProductContext'
import { useParams } from 'react-router-dom';

function ProductItem() {

    const {productId} = useParams();
    const {data} = useContext(ProductContext);

    // state to hold details of the selected product
    const[product,setProduct] = useState();

    // UseEffect to fetch and set the details of the selected product
    useEffect(()=>{
        console.log('Data:', data);
        console.log('Product ID:', productId);
        // find product matching id in context data
        const selectedProduct = data.find((item)=> item.id === parseInt(productId,10));

        console.log("Selected Product", selectedProduct);
        // If the product is found, set it in the state
        if(selectedProduct){
            setProduct(selectedProduct);
        }
    },[data,productId]);


    if(!product){
        return <p>Loading.......</p>;
    }

    // Render the details of the selected product
  return (
    <div className='flex flex-col items-center justify-center mt-10 '>
        <div key={product.id} className='shadow-lg mx-5 md:w-[60%] lg:w-[50%] xl:w-[35%] flex flex-col justify-center items-center md:p-3'> 
            <img src={product.image} alt={product.title} className='w-24 py-1'/>
            <div className='text-center py-4 mx-10 '>
                <p>{product.title}</p>
                <p className='font-bold py-2'>Rs.{product.price}</p>
                <p>{product.description}</p>
                <p className='font-bold py-2'>{product.category}</p>
                {product.rating && (
                    <div>
                        <p>Rating : {product.rating.rate}</p>
                        <p>Reviews : {product.rating.count}</p>
                    </div>
                )}
            </div>

        </div>
    </div>
  )
}

export default ProductItem
