import Image from "next/image";

const VisionSection = () => {
  const visionItems = [
    {
      image: "/t1.png",
      title: "Empowering Innovation",
      description: "We foster creativity and innovation by providing cutting-edge tech education that prepares students for tomorrow's challenges."
    },
    {
      image: "/t2.png", 
      title: "Building Community",
      description: "Creating a vibrant ecosystem where learners, mentors, and industry professionals collaborate to drive technological advancement."
    },
    {
      image: "/t3.png",
      title: "Future-Ready Skills",
      description: "Delivering practical, industry-relevant training that bridges the gap between academic learning and real-world application."
    }
  ];

  return (
    <div className="grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {visionItems.map((item, index) => (
        <div key={index} className="relative group overflow-hidden rounded-lg">
          <div className="aspect-[4/3] relative">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
            {/* Text content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisionSection;