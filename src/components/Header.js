'use client'
import Link from 'next/link'
import React from 'react'

const Header = () => {

  const [menu,setOpenMenu]=React.useState(false)

  function closeMenu(){
    setOpenMenu(false)
  }

  return (
    <header className='bg-red-600 text-white font-bold fixed right-0 left-0 top-0 z-10'>
    <button className='absolute right-4 top-6 lg:hidden' onClick={()=>setOpenMenu(!menu)}><span className={`hamb ${menu ? "ativo":""}`}></span> </button>
      <nav className='mx-auto max-w-7xl flex items-center justify-between'>
        <img src="https://i.ibb.co/K5kw1LB/logopng.png" alt=" logo pytter Burger" className='max-w-[70px]'/>
        <ul className={ `flex transition-all gap-2 lg:text-white text-red-600 fixed flex-col top-[70px] items-center bg-white lg:items-start lg:static lg:flex-row overflow-y-hidden right-0 left-0 lg:bg-red-600 lg:py-0 ${menu ? "h-screen":"h-0"} lg:overflow-y-auto lg:h-[30px]`}>
            <li><Link href="/" className='link hover:bg-white hover:text-red-600 rounded-md' onClick={closeMenu}>Ínicio</Link></li>
            <li><Link href="cardapio" className='link hover:bg-white hover:text-red-600 rounded-md' onClick={closeMenu}>Cardápio</Link></li>
            <li><Link href="sobre" className='link hover:bg-white hover:text-red-600 rounded-md' onClick={closeMenu}>Sobre nós</Link></li>
            <li><Link href="localizacao" className='link hover:bg-white hover:text-red-600 rounded-md' onClick={closeMenu}>Localização</Link></li>
            <li><Link href="contato" className='link hover:bg-white hover:text-red-600 rounded-md' onClick={closeMenu}>Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
