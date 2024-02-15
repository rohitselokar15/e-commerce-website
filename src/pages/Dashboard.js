import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router';

const Dashboard = () => {

  const {authenticated} = useContext(AuthContext);

  if(!authenticated){
    return <Navigate to="/login"/>
  }

  return (
    <div>
      <p className='text-center mt-6'>Dashboard</p>
    </div>
  )
}

export default Dashboard
