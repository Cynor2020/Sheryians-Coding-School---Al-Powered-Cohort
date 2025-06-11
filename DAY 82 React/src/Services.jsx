import { Outlet, useNavigate } from "react-router-dom"


function Services() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Services</h1>
      <button onClick={() => navigate ("/services/detail/")} className='bg-white text-black px-4 py-2' rounded>More Services</button>
      <hr className="mt-10" />
      <Outlet />
    </div>
  )
}

export default Services
