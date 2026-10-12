import tickIcon from '../../assets/tick.svg';
import parkingImg from '../../assets/parking.png';
import precastImg from '../../assets/precast.png';
import envelopeImg from '../../assets/envelope.png';
import condoImg from '../../assets/condo.png';

type Service = {
  id: number;
  slug: string; // inner detail page: /services/<slug>
  title: string;
  image: string;
  points: string[];
};

const SERVICES: Service[] = [
  {
    id: 1,
    slug: 'parking-garage-engineering',
    title: 'Parking Garage Engineering, Rehabilitation & Restoration',
    image: parkingImg,
    points: [
      'Structural engineering, design, fabrication shop drawings, and erection planning.',
      'Condition assessments, delamination surveys, and technical verification reports.',
      'Targeted repair, waterproofing, preventative maintenance, and rehabilitation plans',
      'On-site structural erection planning and field supervision',
    ],
  },
  {
    id: 2,
    slug: 'precast-concrete-systems',
    title: 'Precast Concrete Systems',
    image: precastImg,
    points: [
      'Prefabricated engineering design for parking garages, commercial towers, railway structures, transit hubs, and schools',
      'Fabrication shop drawings and component modeling',
      'Temporary bracing and propping system design',
      'Erection planning, on-site supervision, and engineering inspections',
    ],
  },
  {
    id: 3,
    slug: 'building-envelope-engineering',
    title: 'Building Envelope Engineering',
    image: envelopeImg,
    points: [
      'Cladding, exterior wall, roofing, and window wall structural performance evaluations.',
      'Moisture penetration, thermal bridge reviews, air barrier inspection, and durability reporting.',
      'Remediation design for exterior facades, masonry deterioration, and sealants.',
    ],
  },
  {
    id: 4,
    slug: 'condominium-landlord-services',
    title: 'Condominium & Landlord Services',
    image: condoImg,
    points: [
      'Comprehensive Reserve Fund Studies (RFS) and financial planning lifecycles.',
      'Performance audits for newly constructed residential and commercial buildings.',
      'Preventative maintenance programming for commercial property managers and residential landlords.',
      'Technical due diligence for secure acquisitions.',
    ],
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        {/* Heading */}
        <div className="services__head">
          <span className="services__eyebrow">Specialized Practice Areas</span>
          <h2 className="services__title">
            Structural Engineering, Building Sciences &amp; <span>Property Evaluations</span>
          </h2>
          <p className="services__sub">
            Comprehensive technical services tailored for residential complexes, commercial
            developments, and industrial infrastructure.
          </p>
        </div>

        {/* Cards */}
        <div className="services__grid">
          {SERVICES.map((s) => (
            <a className="service-card" href={`/services/${s.slug}`} key={s.id}>
              <div className="service-card__img">
                <img src={s.image} alt={s.title} />
              </div>

              <div className="service-card__body">
                <h3 className="service-card__title">{s.title}</h3>
                <ul className="service-card__list">
                  {s.points.map((p) => (
                    <li key={p}>
                      <img src={tickIcon} alt="" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>

        <div className="services__more">
          <a href="/services" className="btn-outline">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}