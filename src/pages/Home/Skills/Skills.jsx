import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

// Variants for parent container (staggered children)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Stagger the animation of each child
      staggerChildren: 0.2,
    },
  },
};

// Variants for each skill card
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
          Explore My Art Forms
        </h2>

        {/* Animated container for skill cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Triggers animation on scroll
        >
          {skills.map((skill, index) => (
            // Animated skill card
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 
                         transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {skill.title}
              </h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12">
          <Link
            to="/works"
            className="relative inline-block text-blue-600 font-medium text-lg 
                       transition-colors duration-300 group"
          >
            <span
              className="absolute inset-0 bottom-0 left-0 w-0 h-[2px] bg-blue-600 
                         transition-all duration-300 group-hover:w-full"
            ></span>
            <span className="relative">Explore My Works</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Skills;
