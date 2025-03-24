const researchData = [
  {
    title: "Publications",
    description: "200+ peer-reviewed publications...",
    src: "https://assets-global.website-files.com/5e5d43546b94f97f39c228fa/5e8b0177497f3ef99bdb3569_how-to-write-a-research-paper.png",
    imageAlt: "Publications Image",
  },
  {
    title: "Research Interests",
    description: "Current research focuses on AI, ML, and healthcare...",
    src: "https://assets-global.website-files.com/5e5d43546b94f97f39c228fa/5e8b0177497f3ef99bdb3569_how-to-write-a-research-paper.png",
    imageAlt: "Research Interests Image",
  },
  {
    title: "Ongoing Projects",
    description: "Funded research projects in advanced medical imaging...",
    src: "https://assets-global.website-files.com/5e5d43546b94f97f39c228fa/5e8b0177497f3ef99bdb3569_how-to-write-a-research-paper.png",
    imageAlt: "Ongoing Projects Image",
  },
];

export default function ResearchPublications() {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Research & Publications
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {researchData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Image Section */}
              <img
                src={item.src}
                alt={item.imageAlt}
                className="w-full h-60 object-cover"
              />

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <button
                  className="mt-4 px-5 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                  aria-label={`Learn more about ${item.title}`}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
