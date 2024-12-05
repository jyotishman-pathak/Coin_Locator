import Navbar from '@/components/Header/Navbar'
import { QuickTools } from '@/components/main/QuickTools'
import Trendbar from '@/components/Header/Trendbar'

import React from 'react'
import {Intro} from '@/components/main/Intro'
import { PromotedCoins } from '@/components/main/Promotion'
import { Advertisement } from '@/components/main/Advertisement'
import { Features } from '@/components/main/Features'
import List from '@/components/main/Table'
import  Footer  from '@/components/Header/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Trendbar/>
      <Navbar/>

      <main>
        <Intro/>
        <QuickTools/>
        <Advertisement/>
        <Features/>
        <PromotedCoins/>
        <List/>
        <Footer/>
      </main>
    </div>
  )
}

export default Home
