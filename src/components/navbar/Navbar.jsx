import Link from 'next/link'
import React from 'react'
import Links from './links/Links'

const Navbar = () => {
  return (
    <div className="max-w-6xl mx-auto min-h-8">
          <div className="flex flex-row p-4 justify-between items-center">
      <div className="text-3xl font-extrabold">Logo</div>
      <div>
        <Links/>
      </div>
    </div>
    </div>

  )
}

export default Navbar
