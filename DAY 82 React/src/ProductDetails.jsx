import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'



function ProductDetails() {
  const navigate = useNavigate();
  const prams = useParams();
  return (
    <div>
      <h1>{prams.name}</h1>
      <h2>Products Details</h2>
      <button onClick={() => navigate(-1)} className='bg-white text-black px-4 py-2' rounded>Go Back</button>
    </div>
  )
}

export default ProductDetails
