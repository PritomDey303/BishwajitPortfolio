import React, { useState, useEffect } from "react";
import { db } from "./../../firebase"; // Ensure your Firebase config file is properly set up
import { collection, getDocs } from "firebase/firestore";

// Categories array for the dropdown filter
const categories = [
  "All",
  "Abstract Art",
  "Mural Painting",
  "Traditional Painting",
  "Relief Art",
  "Clay Art",
  "Wood Art",
  "Cement Art",
  "Sculpture",
  "Printmaking",
  "Glass Art",
  "Terracotta",
  "Collage and Assemblage Art",
  "Installation Art",
];

const Gallery = () => {
  const [artWorks, setArtWorks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch data from Firestore
  useEffect(() => {
    const fetchArtWorks = async () => {
      const querySnapshot = await getDocs(collection(db, "gallery"));
      const artsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArtWorks(artsData);
      setLoading(false); // Set loading to false when data is fetched
    };

    fetchArtWorks();
  }, []);

  // Shuffle function to randomize the art data
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5); // Randomize the array order
  };

  // Filter the artWorks based on the selected category
  const filteredArtWorks =
    selectedCategory === "All"
      ? shuffleArray(artWorks) // Shuffle all data if 'All' category is selected
      : shuffleArray(
          artWorks.filter((art) => art.category === selectedCategory)
        ); // Shuffle the filtered data

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        MY Gallery
      </h1>

      {/* Category Dropdown Filter */}
      <div className="flex justify-center mb-8">
        <div className="relative w-56">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block appearance-none w-full bg-white text-gray-800 border border-gray-300 rounded-lg py-3 pl-4 pr-8 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {/* Custom Arrow Icon */}
          <div className="absolute top-0 right-0 mt-3 mr-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl bg-gradient-to-t from-gray-100 to-transparent shadow-lg animate-pulse"
              >
                <div className="w-full h-64 bg-gray-300 rounded-xl"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="w-24 h-6 bg-gray-300 rounded"></div>
                  <div className="mt-2 flex gap-2">
                    <div className="w-16 h-5 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))
          : filteredArtWorks.map((art) => (
              <div
                key={art.id}
                className="relative overflow-hidden rounded-xl bg-gradient-to-t from-gray-100 to-transparent shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer group"
                onClick={() => setSelectedImage(art.imageUrl)}
              >
                <img
                  src={art.imageUrl}
                  alt={art.category}
                  className="w-full h-64 object-cover transition-opacity duration-500 group-hover:opacity-60"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 rounded-xl"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold">{art.category}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {art.media &&
                      art.media.map((medium, index) => (
                        <span
                          key={index}
                          className="bg-blue-200 text-blue-800 text-xs font-medium py-1 px-3 rounded-full shadow-sm"
                        >
                          {medium}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full p-4">
            <img
              src={selectedImage}
              alt="Selected Art"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
