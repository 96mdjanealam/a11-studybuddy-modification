import React from 'react'
import Hero from '../../Components/Hero'
import WebsiteFeatures from "../../Components/WebsiteFeatures"
import Features from '../../Components/Features'
import HowItWorks from '../../Components/HowItWorks'
import Reviews from '../../Components/Reviews'

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <WebsiteFeatures></WebsiteFeatures>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <Reviews></Reviews>
    </div>
  )
}
