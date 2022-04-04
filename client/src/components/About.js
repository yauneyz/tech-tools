const About = () => (
  <div className="about-page">
    <iframe
      className="about-page"
      src={process.env.PUBLIC_URL + "About.html"}
      title="About Source"
      frameBorder="0"
    />
  </div>
);

export default About;
