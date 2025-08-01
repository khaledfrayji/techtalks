import TechTalksAmbassador from '@/components/Ambassador'

import React from 'react'
export const metadata = {
  title: 'TechTalks Ambassador Program',
  description:
    'Join the TechTalks Ambassador Program and help spread the love for programming, tech education, and community growth.',
  openGraph: {
    title: 'TechTalks Ambassador Program',
    description:
      'Become a TechTalks Ambassador and lead the next wave of tech learners and community growth.',
    url: 'https://techtalkslb.com/ambassador',
    siteName: 'TechTalks',
    type: 'website',
  },
 
};

const page = () => {
  return (
    <div>
      <TechTalksAmbassador/>
    </div>
  )
}

export default page
