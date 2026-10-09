export default function FooterCta() {
  return (
    <section className="footer-cta">
      <div className="container footer-cta__inner">
        <div className="footer-cta__content">
          <h2 className="footer-cta__title">Join Our Engineering Team</h2>
          <p className="footer-cta__text">
            We welcome skilled structural designers, engineers, and site review inspectors to join
            our Ottawa office. Submit your qualifications to info@gcelgroup.com.
          </p>
        </div>

        <a href="mailto:info@gcelgroup.com" className="footer-cta__btn">
          Apply Now / Send CV
        </a>
      </div>
    </section>
  );
}