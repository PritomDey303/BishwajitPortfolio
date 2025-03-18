import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "./../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function PasswordPage({ setAuthenticated }) {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({});

  useEffect(() => {
    const fetchCredentials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "credentials"));
        const creds = {};
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          creds[data.mobile] = data.password;
        });
        setCredentials(creds);
      } catch (error) {
        toast.error("Failed to fetch credentials from database.");
      }
    };

    fetchCredentials();
  }, []);

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("authenticated");
    if (isAuthenticated === "true") {
      setAuthenticated(true);
      navigate("/upload-gallery");
    }
  }, [navigate, setAuthenticated]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (credentials[mobile] && credentials[mobile] === password) {
      setAuthenticated(true);
      sessionStorage.setItem("authenticated", "true");
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
              {passwordVisible ? "🙈" : "👁️"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition duration-300 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            Submit
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
