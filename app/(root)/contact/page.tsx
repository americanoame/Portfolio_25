import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons
import Link from "next/link"; // Import Link for routing

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between space-x-8 p-8 animate-fadeIn">
      {/* Left Side: Contact Info */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-5xl font-bold mb-6">Contact</h1>

        {/* Email */}
        <div className="flex items-center space-x-3 mb-6">
          <FaEnvelope className="text-xl" />
          <p className="text-lg">andrenations@gmail.com</p>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center space-x-3 mb-6">
          <FaLinkedin className="text-xl" />
          <Link
            href="https://www.linkedin.com/in/andre-silva-273085136"
            target="_blank"
            className="text-lg text-blue-600"
          >
            LinkedIn Profile
          </Link>
        </div>

        {/* GitHub */}
        <div className="flex items-center space-x-3 mb-6">
          <FaGithub className="text-xl" />
          <Link
            href="https://github.com/americanoame"
            target="_blank"
            className="text-lg text-blue-600"
          >
            GitHub Profile
          </Link>
        </div>

        {/* Download CV Button */}
        <Link href="/path-to-your-cv.pdf" download>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700">
            Download CV
          </button>
        </Link>
      </div>

      {/* Right Side: Form */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-lg mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-lg mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-lg mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your message"
              rows={4}
            ></textarea>
          </div>
          <div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
