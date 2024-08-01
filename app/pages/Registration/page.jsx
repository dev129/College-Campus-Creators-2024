import Navbar from '@/app/components/Navbar'
import RegistrationForm from '@/app/components/RegistrationForm'
import React from 'react'

const pages = () => {
  return (
    <div className='bg-black'>
    <Navbar/>
    <RegistrationForm/>
    </div>
  )
}

export default pages