function Footer() {
    return (
      <footer className="bg-gray-300 py-8 text-center">
        <div className="max-w-screen-lg mx-auto px-4">
          <p className="text-lg text-gray-800 mb-2">&copy; 2024 <strong>TastyGo</strong>. All Rights Reserved.</p>
          <p className="text-sm text-gray-600 mb-4">Serving Healthy & Tasty Food | Fresh Ingredients | Flavorful Dishes | Nutritional Excellence</p>
  
          {/* Social Media Links */}
          <div className="flex justify-center mb-4 space-x-4">
            <a
              href="https://www.instagram.com"
              className="text-gray-800 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com"
              className="text-gray-800 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.twitter.com"
              className="text-gray-800 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
  
          {/* Contact Info */}
          <p className="text-sm text-gray-600">
            Contact Us:{" "}
            <a
              href="mailto:info@tastygo.com"
              className="text-gray-800 hover:text-blue-600"
            >
              info@tastygo.com
            </a>{" "}
            | +1 (555) 123-4567
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  