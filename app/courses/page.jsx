import TechTalksCourses from '@/components/Courses';
import React from 'react'
export const metadata = {
  title: "Courses | TechTalks",
  description: "Explore curated tech courses from TechTalks to boost your career.",
  keywords: ["TechTalks courses", "Tailwind CSS course", "web development", "frontend bootcamp","Nextjs", "techtalks", "learn to code", "Lebanon tech community"],
  openGraph: {
    title: "Explore TechTalks Courses",
    description: "Master modern technologies with our high-quality, affordable courses built by tech professionals.",
    url: "https://techtalkslb.com/courses",
    siteName: "TechTalks",
   
    type: "website",
  },
 
};

const page = () => {
  return (
    <div>
      <TechTalksCourses/>
    </div>
  )
}

export default page
