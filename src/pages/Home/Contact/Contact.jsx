import { useEffect, useState } from "react";
import {
  PhoneIcon,
  ChatBubbleLeftEllipsisIcon,
  EnvelopeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { db } from "../../../firebase"; // import the Firebase db instance
import { collection, getDocs } from "firebase/firestore"; // Firebase functions to fetch data

function Contact() {
  const [contactInfo, setContactInfo] = useState({
    mobile: "",
    whatsapp: "",
    facebook: "",
    email: "",
  });

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "contacts"));
        querySnapshot.forEach((doc) => {
          // Assuming there is only one document in the 'contacts' collection
          setContactInfo(doc.data());
        });
      } catch (error) {
        console.error("Error getting documents:", error);
      }
    };

    fetchContactInfo();
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-12 animate__animated animate__fadeIn">
          Get in Touch
        </h1>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Mobile */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 hover:rotate-2 animate__animated animate__fadeIn animate__delay-1s">
            <PhoneIcon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
            <a
              href={`tel:${contactInfo.mobile}`}
              className="text-lg text-gray-600 mt-2 hover:text-blue-600 transition duration-200"
            >
              {contactInfo.mobile}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 hover:rotate-2 animate__animated animate__fadeIn animate__delay-2s">
            <ChatBubbleLeftEllipsisIcon className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">WhatsApp</h3>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-600 mt-2 hover:text-green-500 transition duration-200"
            >
              Chat with me
            </a>
          </div>

          {/* Facebook */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 hover:rotate-2 animate__animated animate__fadeIn animate__delay-3s">
            <UserCircleIcon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Facebook</h3>
            <a
              href={contactInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-600 mt-2 hover:text-blue-600 transition duration-200"
            >
              Visit my profile
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 hover:rotate-2 animate__animated animate__fadeIn animate__delay-4s">
            <EnvelopeIcon className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Email</h3>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-lg text-gray-600 mt-2 hover:text-red-600 transition duration-200"
            >
              {contactInfo.email}
            </a>
          </div>
        </div>

        {/* Footer Message */}
        <p className="text-center text-gray-600 text-sm mt-12 animate__animated animate__fadeIn animate__delay-5s">
          I’d love to hear from you. Whether it's for inquiries, collaborations,
          or just a friendly hello!
        </p>
      </div>
    </section>
  );
}

export default Contact;
