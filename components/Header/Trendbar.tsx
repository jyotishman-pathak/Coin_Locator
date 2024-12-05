import { TrendingDown, TrendingUp } from 'lucide-react';
import React from 'react'


const trends = [
    { name: 'BTC', price: '$45,234', change: '+2.5%', up: true },
    { name: 'ETH', price: '$2,345', change: '+1.8%', up: true },
    { name: 'BNB', price: '$312', change: '-0.5%', up: false },
  ];

  
const Trendbar = () => {
  return (
    <div className="bg-secondary py-2">
    <div className="container mx-auto px-4">
      <div className="flex items-center space-x-8 overflow-x-auto">
        {trends.map((trend, index) => (
          <div key={index} className="flex items-center space-x-2 text-sm">
            <span className="font-medium">{trend.name}</span>
            <span>{trend.price}</span>
            <span className={`flex items-center ${trend.up ? 'text-green-500' : 'text-red-500'}`}>
              {trend.up ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              {trend.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Trendbar
