import React from 'react'


const page = () => {
  return (
    <section className='mx-auto  p-2 mt-10'>
      <div className='flex items-center justify-center h-screen max-w-7xl mx-auto'>
      <div className='flex items-center justify-between max-w-5xl w-screen flex-col gap-4 lg:flex-row p-2'>
        <div className='bg-white p-2 rounded-md shadow-md pb-6'>
          <p className='max-w-[500px]'>
Pytter Burger: A Hamburgueria que Conquistou Bambuí
Inaugurada em janeiro de 2024, a Pytter Burger rapidamente se tornou uma das hamburguerias mais queridas de Bambuí. Localizada no coração da cidade, a Pytter oferece aos seus clientes uma experiência gastronômica única, com hambúrgueres deliciosos, feitos com ingredientes frescos e de alta qualidade.</p>
<div className='mt-10'>
  <a href="cardapio" className='bg-red-600 font-bold text-white px-8 py-4 mb-4 rounded-md'>Cardápio</a>
</div>
        </div>
        <img src="https://i.ibb.co/YZyCv5S/banner.png" alt="banner pytter burger" className='w-screen max-w-[400px] lg:max-w-[400px]'/>
      </div>
      </div>
    </section>
  )
}

export default page
