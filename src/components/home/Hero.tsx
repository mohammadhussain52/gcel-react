export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <span className="hero__badge">
          Serving the construction &amp; infrastructure industry since 1996
        </span>

        <h1 className="hero__title">
          Structural Engineering Excellence
          <br className="hero__br" /> &amp; Sustainable Solutions Across Canada
        </h1>

        <p className="hero__text">
          Grand Canada Engineering Limited (GCE) delivers precision structural engineering,
          advanced parking garage restoration, building envelope evaluations, and certified
          infrastructure supply. We deliver durable, sustainable, and code-compliant engineering
          solutions for developers, property managers, and architects.
        </p>

        <div className="hero__actions">
          <a href="#services" className="btn-primary-gce">
            Explore Our Services
          </a>
          <a href="#contact" className="btn-ghost-gce">
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}