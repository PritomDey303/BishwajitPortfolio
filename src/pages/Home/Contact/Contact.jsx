import {
  PhoneIcon,
  ChatBubbleLeftEllipsisIcon,
  EnvelopeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

function Contact() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
          Get in Touch
        </h1>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Mobile */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <PhoneIcon className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
            <a
              href="tel:+880123456789"
              className="text-lg text-gray-600 mt-2 hover:text-blue-600"
            >
              +880123456789
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <ChatBubbleLeftEllipsisIcon className="h-10 w-10 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">WhatsApp</h3>
            <a
              href="https://wa.me/880123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-600 mt-2 hover:text-green-500"
            >
              Chat with me
            </a>
          </div>

          {/* Facebook */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <UserCircleIcon className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Facebook</h3>
            <a
              href="https://facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-600 mt-2 hover:text-blue-600"
            >
              Visit my profile
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <EnvelopeIcon className="h-10 w-10 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Email</h3>
            <a
              href="mailto:bishwajitpaul@gmail.com"
              className="text-lg text-gray-600 mt-2 hover:text-red-600"
            >
              bishwajitpaul@gmail.com
            </a>
          </div>
        </div>

        {/* Footer Message */}
        <p className="text-center text-gray-600 text-sm mt-12">
          I’d love to hear from you. Whether it's for inquiries, collaborations,
          or just a friendly hello!
        </p>
      </div>
    </section>
  );
}

export default Contact;
