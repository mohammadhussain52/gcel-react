type Highlight = {
  id: number;
  icon: string; 
  title: string;
  text: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    id: 1,
    icon: '/icons/h1.svg',
    title: 'Established 1996',
    text: 'Over 29 years of continuous engineering leadership.',
  },
  {
    id: 2,
    icon: '/icons/h2.svg',
    title: 'PEO Authorized',
    text: 'Formally licensed by the Association of Professional Engineers of Ontario.',
  },
  {
    id: 3,
    icon: '/icons/h3.svg',
    title: 'Turnkey Oversight',
    text: 'From planning and permits to fabrication drawings and on-site erection.',
  },
  {
    id: 4,
    icon: '/icons/h4.svg',
    title: 'Global & Domestic Supply',
    text: 'Verified fabricator partnerships for steel structures, cranes, and bridges.',
  },
];

export default function Highlights() {
  return (
    <section className="highlights">
      <div className="container">
        <div className="highlights__grid">
          {HIGHLIGHTS.map((item) => (
            <article className="highlight-card" key={item.id}>
              <img className="highlight-card__icon" src={item.icon} alt="" />
              <h3 className="highlight-card__title">{item.title}</h3>
              <p className="highlight-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}