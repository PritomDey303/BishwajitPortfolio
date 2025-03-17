const Hero = () => {
  return (
    <>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center lg:space-x-10 px-5">
          {/* Text Content */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Capturing Art in Every Form
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              I am a passionate sculptor with years of experience crafting art
              that tells a story. Each piece I create is a reflection of
              emotion, thought, and dedication.
            </p>
            <a
              href="#works"
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              View My Works
            </a>
          </div>
          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src="../../../../public/images/bpal.png"
              alt="Bishwajit Paul"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
