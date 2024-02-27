'use client'
import Mapa from '@/components/Mapa'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white p-4 mt-[70px]'>
        <div className='h-screen'>
            <h1 className='text-center text-2xl'>Localização</h1>
            <p className='text-center my-4'>Estamos Localizados na Avenida Armando Franco, 141 , centro Bambuí-MG</p>
            <Mapa />
        </div>
    </div>
  )
}

export default page
