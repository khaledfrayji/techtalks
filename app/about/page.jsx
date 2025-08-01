import About from '@/components/About'
import React from 'react'
export const metadata = {
  title: 'About TechTalks',
  description:
    'Discover the mission behind TechTalks — a programming platform built to empower developers in the Mena region and beyond through hands-on courses, real projects, and career guidance.',
  openGraph: {
    title: 'About TechTalks',
    description:
      'A vibrant tech platform on a mission to make programming education accessible, practical, and inspiring.',
    url: 'https://techtalkslb.com/about',
    siteName: 'TechTalks',
    type: 'website',
  },
 
};
const page = () => {
  return (
    <div>
      <About/>
    </div>
  )
}

export default page
