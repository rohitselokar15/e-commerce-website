import React, { useContext } from 'react'
import { ProductContext} from '../context/ProductContext'

function Filter() {

    const {toggleSortOrder,sortOrder} = useContext(ProductContext);
  
    return (

        <div className='bg-gray-600 text-white font-bold text-[14px]  text-center flex justify-center px-3 p-2'>
            <button onClick={toggleSortOrder} disabled={sortOrder === 'low-to-high'} className='mx-5 md:mx-10 lg:mx-10 xl:mx-10 cursor-pointer border border-transparent hover:border-white' >Sort Low to High</button>
            <button onClick={toggleSortOrder} disabled={sortOrder === 'high-to-low'} className='md:mx-10 lg:mx-10 xl:mx-10 cursor-pointer border border-transparent hover:border-white' >Sort High to Low</button>
        </div>
    )
}

export default Filter
