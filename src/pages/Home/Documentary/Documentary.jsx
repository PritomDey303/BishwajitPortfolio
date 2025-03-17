import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Documentary = () => {
  const videos = [
    {
      title: "The Art of Idol Making",
      videoUrl:
        "https://www.youtube.com/embed/zEqqW-USajs?si=SwRbEZ41ua-8U4e4?autoplay=1&mute=1",
    },
    {
      title: "The Legacy of Terracotta",
      videoUrl:
        "https://www.youtube.com/embed/zEqqW-USajs?si=fzjkIFNyJvaJhKdF?autoplay=1&mute=1",
    },
    {
      title: "Sculpting Masterpieces",
      videoUrl:
        "https://www.youtube.com/embed/zEqqW-USajs?si=fzjkIFNyJvaJhKdF?autoplay=1&mute=1",
    },
  ];

  return (
    <section className="bg-slate-200 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Documentary Videos
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 115000 }}
          loop={true}
          className="swiper-container"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <div className="w-full sm:w-2/3 lg:w-1/2 h-auto ">
                  <iframe
                    src={video.videoUrl}
                    title={video.title}
                    frameBorder="2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg shadow-lg"
                  ></iframe>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mt-8 pt-6">
                  {video.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Documentary;
