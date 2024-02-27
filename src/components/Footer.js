import React from 'react'
const ano = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className='flex items-center justify-center flex-col text-white font-semibold bg-red-600 py-6  mt-[50px] '>
      <p>Pytter Burger {ano} todos os direitos reservados.</p>
      <p>Feito por <a href="https://wa.me/5531992311170?text=vim+pelo+site+do+pytter+" className='text-blue-600 underline' target='_Blanck'>Klenilson dev</a> </p>
    </footer>
  )
}

export default Footer
