import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PasswordPage({ setAuthenticated }) {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  // List of valid mobile numbers and corresponding passwords
  const credentials = {
    "01882787668": "gallery123",
    "01700000001": "password123",
    // Add more mobile-number/password pairs as needed
  };

  // Check session storage when the component loads to see if the user is already authenticated
  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("authenticated");
    if (isAuthenticated === "true") {
      setAuthenticated(true);
      navigate("/upload-gallery"); // Redirect if already authenticated
    }
  }, [navigate, setAuthenticated]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (credentials[mobile] && credentials[mobile] === password) {
      setAuthenticated(true);
      sessionStorage.setItem("authenticated", "true"); // Store authentication status in session storage
      toast.success("Successfully authenticated!");
      setTimeout(() => navigate("/upload-gallery"), 1500);
    } else {
      toast.error("Incorrect mobile number or password. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Authentication Required
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Mobile Input */}
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              pattern="^01[3-9]\d{8}$"
              placeholder="Enter Mobile Number"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500"
            >
              {passwordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12l-3 3-3-3m0 0l-3-3m3 3l3-3"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.5c3.75 0 6.75 3 6.75 6.75S15.75 18 12 18s-6.75-3-6.75-6.75S8.25 4.5 12 4.5z"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition duration-300 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            Submit
          </button>
        </form>

        {/* Toast Notifications */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
        />
      </div>
    </div>
  );
}
