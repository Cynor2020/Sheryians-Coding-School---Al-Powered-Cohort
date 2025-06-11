import React from 'react'
import { useNavigate } from 'react-router-dom';

function ServiceDetails() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Service Details</h2>
      <button onClick={() => navigate(-1)} className='bg-white text-black px-4 py-2' rounded>Go Back</button>
      <button onClick={() => navigate ("/about")} className='bg-white text-black px-4 py-2' rounded>Open About</button>
    </div>
  )
}

export default ServiceDetails
