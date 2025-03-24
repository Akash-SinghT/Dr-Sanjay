const LeadershipAdmin = () => {
  const sections = [
    {
      id: 1,
      title: "Positions Held",
      description: "Various leadership roles and responsibilities undertaken.",
      image:
        "https://2.bp.blogspot.com/-RPHT9c32XYE/WYHhSs4ocNI/AAAAAAAAFZE/ICNEtbL7OE0-QeQOLh29Bc7DArlGzkAqQCLcBGAs/w1600/Aston%2BAll%2BHOD%2BBanyuwangi.jpg",
    },
    {
      id: 2,
      title: "Institutional Contributions",
      description: "Significant contributions to institutional growth.",
      image:
        "https://2.bp.blogspot.com/-RPHT9c32XYE/WYHhSs4ocNI/AAAAAAAAFZE/ICNEtbL7OE0-QeQOLh29Bc7DArlGzkAqQCLcBGAs/w1600/Aston%2BAll%2BHOD%2BBanyuwangi.jpg",
    },
    {
      id: 3,
      title: "HOD",
      description: "Key contributions as Head of Department.",
      image:
        "https://2.bp.blogspot.com/-RPHT9c32XYE/WYHhSs4ocNI/AAAAAAAAFZE/ICNEtbL7OE0-QeQOLh29Bc7DArlGzkAqQCLcBGAs/w1600/Aston%2BAll%2BHOD%2BBanyuwangi.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Leadership & Administration
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sections.map(({ id, title, description, image }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{description}</p>
                <button
                  className="mt-4 px-5 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  aria-label={`Learn more about ${title}`}
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
};

export default LeadershipAdmin;
