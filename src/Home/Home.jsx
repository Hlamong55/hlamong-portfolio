import Contact from "../Components/Contact";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Skills from "../Components/Skill";
import WhyChoose from "../Components/WhyChoose";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Skills></Skills>
      <WhyChoose></WhyChoose>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
