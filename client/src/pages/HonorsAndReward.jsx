const awards = [
  {
    title: "Excellence in Research Award",
    organization: "National Science Foundation, 2025",
    src: "https://image.freepik.com/free-vector/happy-man-receives-award-stage_82574-5230.jpg",
  },
  {
    title: "Distinguished Professor Fellowship",
    organization: "Royal Academy of Sciences, 2024",
    src: "https://image.freepik.com/free-vector/happy-man-receives-award-stage_82574-5230.jpg",
  },
  {
    title: "Lifetime Achievement Award",
    organization: "International Science Council, 2023",
    src: "https://image.freepik.com/free-vector/happy-man-receives-award-stage_82574-5230.jpg",
  },
];

const HonorsAwards = () => {
  return (
    <section className="bg-gray-200 py-12 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Honors & Awards
        </h2>

        {/* Grid Layout (Consistent with Research Section) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-102 hover:shadow-xl"
            >
              {/* Image */}
              <img
                src={award.src}
                alt={award.title}
                className="w-full h-70 object-cover rounded-t-xl"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {award.title}
                </h3>
                <p className="text-gray-600 mt-2">{award.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HonorsAwards;
