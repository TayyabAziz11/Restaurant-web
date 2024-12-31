function Contact() {
    return (
      <main id="contact" className="w-full text-center py-8 px-4 md:px-12 bg-gray-100">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold">Contact Us</h1>
          <p className="text-xl mt-6 text-gray-500">We&apos;d love to hear from you! Reach out with any questions or feedback.</p>
        </div>
  
        {/* Contact Form */}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <form action="#" method="POST">
            {/* Name Input */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-left font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
  
            {/* Email Input */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-left font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
  
            {/* Message Input */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-left font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                rows={6} 
                required
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-600 text-white h-12 w-44 rounded-md font-semibold hover:bg-green-700 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </main>
    );
  }
  
  export default Contact;
  
  