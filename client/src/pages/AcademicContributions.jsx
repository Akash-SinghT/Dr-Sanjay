import React, { useRef, useEffect } from "react";

const contributions = [
  {
    title: "Teaching Experience",
    image:
      "https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=600",
    items: [
      "Graduate Programs",
      "Postdoctoral Supervision",
      "International Workshops",
    ],
  },
  {
    title: "Mentorship",
    image:
      "https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=600",
    items: ["PhD Students", "Research Fellows", "Medical Residents"],
  },
  {
    title: "Programs Designed",
    image:
      "https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=600",
    items: ["Curriculum Development", "Training Modules", "Research Programs"],
  },
  {
    title: "Research Publications",
    image:
      "https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=600",
    items: ["Journals", "Conferences", "Collaborative Research"],
  },
  {
    title: "Awards & Recognition",
    image:
      "https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=600",
    items: ["Best Educator Award", "Innovation in Teaching", "Research Grants"],
  },
  {
    title: "Global Conferences",
    image:
      "https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=600",
    items: ["Keynote Speaker", "Panel Discussions", "Workshops"],
  },
];

const AcademicContributions = () => {
  const scrollContainerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const content = contentRef.current;
    if (!scrollContainer || !content) return;

    // Duplicate content for seamless looping
    content.innerHTML += content.innerHTML;

    const handleScroll = () => {
      if (scrollContainer.scrollLeft >= content.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-200 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12 tracking-wide">
          Academic Contributions
        </h2>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="relative overflow-x-auto scrollbar-hide"
        >
          <div ref={contentRef} className="flex space-x-8 w-max">
            {contributions.map((contribution, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[350px] md:w-[400px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-300 transition duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image */}
                <div className="h-60 md:h-72">
                  <img
                    src={contribution.image}
                    alt={contribution.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {contribution.title}
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    {contribution.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm font-medium"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default AcademicContributions;
