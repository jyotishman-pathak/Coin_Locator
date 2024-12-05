import React from 'react'
import { Search, Wallet } from 'lucide-react';
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <nav className="border-b">
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <h1 className="text-2xl font-bold">coinLocator</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search coins..."
            className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost">List Coin</Button>
        <Button variant="ghost">Promote</Button>
        <Button variant="default" className="flex items-center">
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </Button>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
