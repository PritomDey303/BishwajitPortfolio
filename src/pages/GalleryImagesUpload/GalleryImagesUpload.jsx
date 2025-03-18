import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "./../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { X } from "lucide-react";

const categoriesWithMedia = {
  "Abstract Art": [],
  "Mural Painting": [],
  "Traditional Painting": ["Oil", "Acrylic", "Watercolor"],
  "Relief Art": ["Clay", "Cement", "Wood", "Fiber"],
  Terracotta: ["clay", "Bisque Firing"],
  "Clay Art": ["Ceramics", "Pottery"],
  "Wood Art": ["Carving", "Woodworking"],
  "Cement Art": ["Concrete Sculptures", "Molds"],
  Sculpture: [
    "Clay",
    "Cement",
    "Fiber",
    "Stone",
    "Metal",
    "Mixed Media",
    "Idol",
  ],
  Printmaking: ["Etching", "Lithography", "Screen Printing"],
  "Glass Art": ["Stained Glass", "Glassblowing"],
  "Collage and Assemblage Art": [],
  "Installation Art": ["Clay", "Cement", "Wood", "Fiber", "Mixed Media"],
};

export default function GalleryImagesUpload() {
  const { VITE_CLOUDINARY_API, VITE_CLOUDINARY_UPLOAD_PRESET } = import.meta
    .env;
  const [category, setCategory] = useState("");
  const [media, setMedia] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setMedia([]); // Reset media selection when category changes
  };

  const handleMediaChange = (e) => {
    const selectedMedia = e.target.value;
    if (!media.includes(selectedMedia)) {
      setMedia((prev) => [...prev, selectedMedia]);
    }
  };

  const removeMedia = (mediaItem) => {
    setMedia(media.filter((item) => item !== mediaItem));
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImages(files);
  };

  const uploadToFirestore = async (successfulUploads) => {
    if (successfulUploads.length > 0) {
      const galleryCollectionRef = collection(db, "gallery");
      try {
        for (const data of successfulUploads) {
          await addDoc(galleryCollectionRef, {
            category: data.category,
            imageUrl: data.url,
            media: data.media, // Uploading media types too
            timestamp: new Date(),
          });
        }
        toast.success("Images uploaded successfully!");
        resetForm();
      } catch (error) {
        toast.error("Failed to upload data to Firestore.");
      }
    }
  };

  const handleUpload = async () => {
    setLoading(true);
    setProgress(0);
    const successfulUploads = [];
    for (let index = 0; index < images.length; index++) {
      const file = images[index];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", VITE_CLOUDINARY_UPLOAD_PRESET);
      formData.append("folder", category);
      try {
        const response = await fetch(VITE_CLOUDINARY_API, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        if (data.secure_url) {
          successfulUploads.push({
            category,
            url: data.secure_url,
            media, // Adding media information for Firestore
            public_id: data.public_id,
          });
          setProgress(Math.round(((index + 1) / images.length) * 100));
        } else {
          throw new Error("Image upload failed");
        }
      } catch (error) {
        toast.error("Image upload failed. Please try again.");
      }
    }
    await uploadToFirestore(successfulUploads);
    setLoading(false);
  };

  const resetForm = () => {
    setCategory("");
    setImages([]);
    setProgress(0);
    setMedia([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category) return toast.error("Please select a category.");
    if (images.length === 0)
      return toast.error("Please upload at least one image.");
    await handleUpload();
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 w-full sm:w-3/5">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Upload Images
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Select Category
            </label>
            <select
              value={category}
              onChange={handleCategoryChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Choose a category
              </option>
              {Object.keys(categoriesWithMedia).map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {category && categoriesWithMedia[category].length > 0 && (
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Select Media
              </label>
              <div className="flex flex-wrap gap-2 mb-4">
                {media.map((item) => (
                  <div
                    key={item}
                    className="flex items-center bg-gray-200 px-2 py-1 rounded"
                  >
                    {item}
                    <button onClick={() => removeMedia(item)} className="ml-2">
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
              <select
                onChange={handleMediaChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Select Media
                </option>
                {categoriesWithMedia[category].map((mediaItem) => (
                  <option key={mediaItem} value={mediaItem}>
                    {mediaItem}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Upload Images
            </label>
            <input
              type="file"
              id="file-input"
              multiple
              ref={fileInputRef}
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {images.length > 0 && (
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Preview Images
              </label>
              <div className="flex gap-4 flex-wrap justify-center">
                {images.map((image, index) => (
                  <div key={index} className="w-24 h-24 overflow-hidden">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Preview ${index}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {loading && (
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Submit"}
          </button>
        </form>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
        />
      </div>
    </div>
  );
}
