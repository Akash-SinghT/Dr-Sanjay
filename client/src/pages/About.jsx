const About = () => {
  return (
    <div className="bg-gray-200 py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 text-center">
          About Dr. Sanjay Gambhir
        </h1>

        {/* Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Section: Biography & Key Positions */}
          <div className="space-y-8">
            {/* Biography */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Biography
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">
                Detailed biography text here... Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>

            {/* Key Positions */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Key Positions
              </h2>
              <ul className="mt-3 space-y-3 text-gray-700 text-lg">
                <li>• Head of Department, Nuclear Medicine, SGPGIMS</li>
                <li>• Fellowship at prestigious institutions</li>
                <li>• Board Member of multiple medical associations</li>
              </ul>
            </div>
          </div>

          {/* Right Section: Achievements */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Achievements & Recognitions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { count: "200+", label: "Published Research Papers" },
                { count: "30+", label: "Years Experience" },
                { count: "50+", label: "Awards & Honors" },
                { count: "100+", label: "Students Mentored" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-100 rounded-lg text-center shadow-sm"
                >
                  <p className="text-3xl font-bold text-gray-900">
                    {item.count}
                  </p>
                  <p className="text-gray-600 text-lg">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
