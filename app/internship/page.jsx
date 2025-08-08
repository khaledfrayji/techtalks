import Internship from '@/components/Internship'
import React from 'react'
export const metadata = {
  title: 'Internship Program | TechTalks - Build Real-World Tech Projects',
  description: 'Join TechTalks Internship Program and work on powerful real-world projects. Gain hands-on experience, mentorship, and the chance to become one of our Champions.',
  keywords: 'tech internship, real projects, hands-on experience, mentorship program, Lebanon internship, software development, programming internship, tech career',
  openGraph: {
    title: 'Internship Program | TechTalks - Build Real-World Projects',
    description: 'Join our internship program and work on powerful real-world projects. Gain hands-on experience and mentorship from industry experts.',
    url: 'https://techtalkslb.com/internship',
    siteName: 'TechTalks',
    images: [
      {
        url: '/internship-og.jpg',
        width: 1200,
        height: 630,
        alt: 'TechTalks Internship Program - Real-World Tech Projects'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
 
  alternates: {
    canonical: 'https://techtalkslb.com/internship'
  }
}
const page = () => {
  return (
    <div>
      <Internship/>
    </div>
  )
}

export default page
