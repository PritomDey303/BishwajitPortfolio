const Skills = () => {
  const skills = [
    {
      title: "Idol Making",
      description: "Crafting intricate idols with precision and artistry.",
    },
    {
      title: "Relief Art",
      description:
        "Specialized in creating stunning relief sculptures with depth.",
    },
    {
      title: "Terracotta",
      description: "Mastery in traditional terracotta art and sculptures.",
    },
    {
      title: "Mural Art",
      description: "Creating captivating murals that tell stories through art.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Explore My Art Forms
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {skill.title}
              </h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="#my-works"
            className="text-blue-600 font-medium text-lg relative group"
          >
            <span className="absolute inset-0 bg-blue-100 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            <span className="relative">Explore My Works </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
