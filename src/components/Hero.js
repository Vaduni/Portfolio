export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white"
    >
      <img
        src="images/Vaduni.jpeg" 
        alt="Profile Picture"
        className="w-40 h-40 rounded-full mb-6 border-4 border-white shadow-lg object-cover"
      />
      <h1 className="text-5xl font-bold mb-2">Hi, I’m Your Name</h1>
      <p className="text-xl max-w-xl">
        Frontend Developer | React Enthusiast | Passionate about building
        beautiful, performant web experiences.
      </p>
    </section>
  );
}
