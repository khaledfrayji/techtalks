// lib/courses.ts
export const courses = [
    {
      id: 1,
      title: "Master Tailwind CSS",
      description: "Master responsive design, utility-first workflows, and custom components with the latest version of Tailwind CSS.",
      duration: "1h",
      students: "20+",
      rating: 4.9,
      level: "Intermediate",
      cost: "$10",
      thumbnailImage: "/thumbnails/t.png",
      sections: [
        {
          title: "Getting Started",
          lessons: [
            { title: "What is Tailwind?", duration: "6m" },
            { title: "Installing Tailwind", duration: "12m" }
          ]
        },
        {
          title: "Core Concepts",
          lessons: [
            { title: "Utility-First Principles", duration: "10m" },
            { title: "Responsive Design", duration: "14m" }
          ]
        }
      ]
    },
    // Add more courses here later...
  ];
  