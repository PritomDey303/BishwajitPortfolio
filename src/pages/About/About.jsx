function About() {
  return (
    <>
      <section className="bg-gray-100 py-10 sm:py-20">
        <div className="flex flex-col mx-auto w-full bg-white shadow-xl rounded-lg overflow-hidden max-w-screen-lg transform transition-all duration-1000 hover:scale-105">
          {/* About Photo */}
          <div className="flex flex-col justify-center items-center p-6 animate__animated animate__fadeIn">
            <img
              src="./images/bpalpal-removebg-preview (1).png"
              alt="Artist's Photo"
              className="w-50 h-50 md:w-80 md:h-80 object-cover rounded-full border-4 border-gray-300 shadow-lg transition-transform transform hover:scale-110"
            />
          </div>

          {/* About Details */}
          <div className="p-6 sm:p-8 flex flex-col items-center text-justify space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed mb-6 animate__animated animate__fadeIn animate__delay-1s">
              I was born in{" "}
              <span className="font-semibold text-blue-600">
                1974 in Rajbari, Bangladesh
              </span>
              , where my journey into the arts began. From a young age, I was
              captivated by the transformative power of creativity, which
              inspired me to pursue formal education in the field. I earned my{" "}
              <span className="font-semibold text-blue-600">
                Bachelor of Fine Arts (BFA)
              </span>{" "}
              from the{" "}
              <span className="font-semibold text-blue-600">
                University of Rajshahi in 1996
              </span>
              , followed by a{" "}
              <span className="font-semibold text-blue-600">
                Master of Fine Arts (MFA)
              </span>{" "}
              from the prestigious{" "}
              <span className="font-semibold text-blue-600">
                Visva-Bharati Santiniketan, India, in 2003
              </span>
              . These formative years shaped my artistic identity and allowed me
              to explore a variety of traditional and modern techniques.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 animate__animated animate__fadeIn animate__delay-2s">
              Throughout my career, I have had the privilege of showcasing my
              work in numerous exhibitions. My early achievements include
              participating in the{" "}
              <span className="font-semibold text-blue-600">
                Annual Art Exhibitions at the Department of Fine Arts,
                University of Rajshahi, from 1911 to 1999
              </span>
              . Later, my works were featured in events such as{" "}
              <span className="font-semibold text-blue-600">
                Mukh O Mukhosh-1 (2005)
              </span>{" "}
              and{" "}
              <span className="font-semibold text-blue-600">
                Mukh O Mukhosh-2 (2009)
              </span>{" "}
              at{" "}
              <span className="font-semibold text-blue-600">
                Gallery Kaya, Dhaka
              </span>
              , where I received significant recognition for my artistic
              expressions.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 animate__animated animate__fadeIn animate__delay-3s">
              Beyond exhibitions, I have also engaged in enriching artistic
              collaborations and workshops. A notable highlight was my
              participation in the{" "}
              <span className="font-semibold text-blue-600">
                International Art Camp (2001–2002)
              </span>{" "}
              organized by{" "}
              <span className="font-semibold text-blue-600">
                Kolkata Nandonik, West Bengal, India
              </span>
              , where I had the opportunity to connect with fellow artists,
              exchange ideas, and refine my craft. These experiences have
              deepened my understanding of the art world and inspired me to
              continuously evolve as an artist.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 animate__animated animate__fadeIn animate__delay-4s">
              Over the past{" "}
              <span className="font-semibold text-blue-600">12 years</span>, I
              have specialized in creating{" "}
              <span className="font-semibold text-blue-600">
                religious goddesses and model sculptures
              </span>
              , blending my technical expertise with a deep appreciation for
              cultural heritage. My work reflects my dedication to preserving
              traditional art forms while incorporating contemporary
              perspectives.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed animate__animated animate__fadeIn animate__delay-5s">
              Today, I continue my artistic journey as a{" "}
              <span className="font-semibold text-blue-600">
                freelance artist
              </span>
              , channeling my passion and creativity into every project. My
              sculptures are not just art; they are a testament to the timeless
              beauty of craftsmanship and the emotions that art can evoke. I
              remain committed to inspiring thought, fostering connection, and
              leaving an enduring legacy in the world of art.
            </p>

            {/* Signature */}
            <h1 className="mt-10 mr-auto pacifico-regular text-xl sm:text-2xl font-semibold text-center animate__animated animate__fadeIn animate__delay-6s">
              Bishwajit Paul
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
