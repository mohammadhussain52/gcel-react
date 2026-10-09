import aboutImg from '../../assets/about-img.png';
import aboutSign from '../../assets/e-sign.png';

const PARAGRAPHS = [
  'Based in Ottawa, Grand Canada Engineering Limited (GCE) provides comprehensive engineering design, structural evaluations, and infrastructure equipment supply. Guided by the technical leadership of Mehdi Alavi Fard, Ph.D., P.Eng., GCE collaborates closely with property managers, condominium corporations, builders, and architects.',
  'Our work adheres strictly to the latest Ontario Building Code, national standards, and municipal bylaws. From precast concrete structures and high-load foundation designs to parking restoration and building envelope integrity, GCE delivers stable, high-performing structures tailored to long-term lifecycle durability.',
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <div className="about__media">
          <img src={aboutImg} alt="GCE engineered buildings" />
        </div>

        <div className="about__content">
          <span className="about__eyebrow">About GCE</span>
          <h2 className="about__title">
            Built on Engineering Rigor, Precision, and{' '}
            <span>Decades of Field Experience</span>
          </h2>
          {PARAGRAPHS.map((text, i) => (
            <p className="about__text" key={i}>
              {text}
            </p>
          ))}

          <div className="about__actions">
            <a href="#about" className="btn-primary-gce">
              Learn More About Us
            </a>
            <img className="about__signature" src={aboutSign} alt="Signature" />
          </div>
        </div>
      </div>
    </section>
  );
}