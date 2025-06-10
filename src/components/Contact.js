// components/Contact.js

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Me</h2>

        <form
          action="https://formspree.io/f/yourformid" // Replace with your Formspree or backend form endpoint
          method="POST"
          className="max-w-xl mx-auto space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="_replyto"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
