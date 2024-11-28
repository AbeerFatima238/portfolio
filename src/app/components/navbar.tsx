import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black z-50 sticky top-0'>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img src="/logo.png" alt="Abeer Fatima" className="w-16 h-16 md:w-60 md:h-36" />
    
      <span className="ml-64 text-3xl font-serif text-white ">MY PORTFOLIO</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-blue-600 text-white">HOME</Link>
      <Link href={"#about"}  className="mr-5 hover:text-blue-600 text-white">ABOUT</Link>
      <Link href={"#skill"}  className="mr-5 hover:text-blue-900 text-white">SKILLS</Link>
      <Link href={"#project"} className="mr-5 hover:text-blue-600 text-white">PROJECTS</Link>
      <Link href={"#contact"} className="mr-5 hover:text-blue-600 text-white">CONTACTS</Link>
    </nav>
    
  </div>
</header>
    </div>
  )
}

export default Navbar
