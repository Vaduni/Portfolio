export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 max-w-3xl">
        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6 text-center">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">
          Feel free to reach out via the form below!
        </p>

        <form
          action="https://formspree.io/f/xrbkkqlq" 
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-md font-medium text-white mb-1 bg-[var(--color-primary)] pl-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-about-bg)] "
            />
          </div>

          <div>
            <label htmlFor="email" className=" block text-md font-medium text-white mb-1 bg-[var(--color-primary)] pl-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="_replyto"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-about-bg)]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-md font-medium text-white mb-1 bg-[var(--color-primary)] pl-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-about-bg)]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-[var(--color-primary)] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-semibold text-sm"
          >
            Send Message
          </button>
          <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

        </form>
      </div>
    </section>
  );
}
