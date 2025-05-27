import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="overlay" />
      <motion.div
        className="hero-content container text-center text-black"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-content display-4 fw-bold">Hi, I'm <span className="hero-content text-info">Saurabh Chaudhary</span></h1>
        <h3 className="typewriter mt-3">
          <Typewriter
            words={["Web Developer", "React Enthusiast", "Open Source Lover"]}
            loop
            cursor
            cursorStyle= "|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </h3>
        <p className="lead mt-4">I build clean and dynamic web experiences.</p>

 <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="btn btn-outline-light mt-4 px-4 py-2 rounded-pill"
        >
          Let's Connect
        </ScrollLink>

      </motion.div>
    </section>
  );
};

export default Hero;
