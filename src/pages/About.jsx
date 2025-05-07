function About() {
  return (
    <div>
      <h1>About TechTrends Ltd</h1>
      <p>We specialize in top-quality electronic gadgets and are located in Kigali City.</p>
      <iframe
        title="TechTrends Location"
        src="https://www.google.com/maps/embed/v1/place?q=Kigali+City,+Rwanda&key=YOUR_GOOGLE_MAPS_API_KEY"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default About;