import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bpalImage from "../../../assets/bpal1.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center lg:space-x-10 px-5">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Crafting Timeless Art
          </h2>
          <h3 className="text-3xl font-semibold text-blue-600 mb-6">
            A Journey of Mastery & Passion
          </h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            With nearly 30 years of artistic excellence, I specialize in idol
            making, terracotta work, installation art, and more. My portfolio
            reflects a harmonious blend of tradition and innovation, where each
            creation speaks of craftsmanship, dedication, and imagination.
            Explore art that transcends boundaries and resonates with the soul.
          </p>
          <Link
            to="/about"
            className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-600"
          >
            Know Me More
          </Link>
        </motion.div>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <img
            src={bpalImage}
            alt="Bishwajit Paul"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
