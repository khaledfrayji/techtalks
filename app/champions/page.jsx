import Champions from '@/components/Champions'
import React from 'react'

export const metadata = {
  title: 'Champions | TechTalks - Successful Intern Projects & Achievements',
  description: 'Meet our TechTalks Champions - former interns who built powerful, real-world projects during their internships. Discover their innovative solutions and inspiring success stories.',
  keywords: 'tech champions, successful interns, real projects, internship success, powerful applications, tech achievements, Lebanon developers, project showcase',
  openGraph: {
    title: 'Champions | TechTalks - Successful Intern Projects',
    description: 'Meet our Champions - former interns who built powerful, real-world projects. Discover their innovative solutions and inspiring success stories.',
    url: 'https://techtalkslb.com/champions',
    siteName: 'TechTalks',
    images: [
      {
        url: '/t2.png',
        width: 1200,
        height: 630,
        alt: 'TechTalks Champions - Successful Intern Projects'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
 
  alternates: {
    canonical: 'https://techtalkslb.com/champions'
  }
}

const page = () => {
  return (
    <div>
      <Champions/>
    </div>
  )
}

export default page
