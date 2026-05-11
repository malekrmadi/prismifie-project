import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CTAFinal } from "../sections/CTAFinal";

const timeline = [
  { year: "Origine", title: "L'idée du prisme", desc: "Le nom Prismifie vient du prisme optique  cet objet qui décompose une lumière complexe en un spectre clair et coloré. C'est exactement ce que nous faisons avec les stratégies d'entreprise : transformer la complexité en clarté actionnable." },
  { year: "Vision", title: "Notre mission", desc: "Aider les entreprises B2B à structurer leur stratégie, renforcer leur visibilité et construire des systèmes de croissance durables. Pas du conseil pour faire joli  du conseil pour avancer." },
  { year: "Aujourd'hui", title: "Une agence terrain", desc: "Une équipe experte, agile et engagée. Nous travaillons en proximité avec nos clients, avec un niveau d'exigence et de suivi qui nous distingue des grandes agences." },
];

const values = [
  { icon: "🔬", title: "Clarté", desc: "Nous prenons la complexité pour la transformer en stratégie simple, lisible et actionnables." },
  { icon: "⚡", title: "Efficacité", desc: "Chaque action est calibrée pour produire des résultats mesurables dans des délais définis." },
  { icon: "🤝", title: "Confiance", desc: "Nous construisons des relations durables, fondées sur la transparence et la performance." },
  { icon: "🌱", title: "Impact", desc: "Nous ne cherchons pas à faire du volume  nous cherchons à créer de la valeur réelle pour nos clients." },
];

export function AProposPage() {
  return (
    <div>
      <style>{`
        .apropos-hero {
          padding: 140px 24px 80px;
          text-align: center;
          background: linear-gradient(135deg, rgba(255,95,162,0.04), rgba(168,85,247,0.04));
        }

        .apropos-hero-label {
          font-size: 13px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #ff5fa2;
          display: block; margin-bottom: 20px;
        }

        .apropos-hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(32px, 5vw, 58px);
          font-weight: 800; color: #111; margin-bottom: 24px;
          max-width: 820px; margin-left: auto; margin-right: auto;
        }

        .apropos-hero-desc {
          font-size: 19px; color: #555; max-width: 640px;
          margin: 0 auto; line-height: 1.7;
        }

        .apropos-quote-section {
          padding: 80px 24px;
          background: #0b0b12;
          text-align: center;
        }

        .apropos-quote-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(20px, 3vw, 32px);
          font-weight: 700; color: #fff; line-height: 1.55;
          max-width: 820px; margin: 0 auto;
        }

        .apropos-quote-text .grd {
          background: linear-gradient(135deg, #ff5fa2, #f97316);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }

        .apropos-timeline {
          padding: 100px 24px;
          max-width: 900px; margin: 0 auto;
        }

        .apropos-section-label {
          font-size: 13px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #ff5fa2; display: block;
          text-align: center; margin-bottom: 16px;
        }

        .apropos-section-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(24px, 3.5vw, 40px);
          font-weight: 800; color: #111; text-align: center; margin-bottom: 56px;
        }

        .timeline-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
        }

        .timeline-list::before {
          content: '';
          position: absolute;
          left: 36px;
          top: 0; bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #ff5fa2, #f97316, #a855f7);
        }

        .timeline-item {
          display: flex;
          gap: 28px;
          align-items: flex-start;
          padding-bottom: 48px;
        }

        .timeline-dot {
          width: 74px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .timeline-dot-circle {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff5fa2, #f97316);
          border: 3px solid white;
          box-shadow: 0 0 0 2px #ff5fa2;
          z-index: 1;
          margin-top: 6px;
        }

        .timeline-year {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #ff5fa2;
          text-align: center;
          white-space: nowrap;
        }

        .timeline-content {
          flex: 1;
          padding-top: 0;
        }

        .timeline-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 20px; font-weight: 700; color: #111; margin-bottom: 10px;
        }

        .timeline-desc {
          font-size: 15px; color: #555; line-height: 1.7;
        }

        .apropos-values {
          padding: 80px 24px 100px;
          background: #f9f9fb;
        }

        .apropos-values-inner {
          max-width: 1000px; margin: 0 auto;
        }

        .apropos-values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px; margin-top: 56px;
        }

        .apropos-value-card {
          background: white;
          border-radius: 18px; padding: 32px 24px;
          text-align: center;
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
        }

        .apropos-value-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.07);
        }

        .apropos-value-icon { font-size: 32px; margin-bottom: 16px; display: block; }

        .apropos-value-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px; font-weight: 700; color: #111; margin-bottom: 10px;
        }

        .apropos-value-desc { font-size: 14px; color: #666; line-height: 1.65; }

        .apropos-adnbar {
          padding: 80px 24px;
          max-width: 900px; margin: 0 auto;
          text-align: center;
        }

        .apropos-adn-text {
          font-size: 17px; color: #444; line-height: 1.8; margin-bottom: 20px;
        }

        .apropos-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 700;
          background: linear-gradient(135deg, #ff5fa2, #f97316);
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          margin-top: 16px;
        }

        .apropos-link-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(255,95,162,0.35);
        }
      `}</style>

      {/* Hero */}
      <header className="apropos-hero">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="apropos-hero-label">À propos</span>
          <h1 className="apropos-hero-title">
            Une agence différente, pour des entreprises qui veulent aller plus loin
          </h1>
          <p className="apropos-hero-desc">
            Prismifie est une agence B2B de marketing, conseil stratégique et événementiel. Notre raison d'être : transformer la complexité en clarté et en résultats concrets.
          </p>
        </motion.div>
      </header>

      {/* Quote */}
      <motion.section
        className="apropos-quote-section"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
      >
        <p className="apropos-quote-text">
          « Nous ne faisons pas du marketing pour faire joli. Nous construisons des{" "}
          <span className="grd">systèmes de croissance mesurables</span> et durables  pour des entreprises qui ont des ambitions réelles. »
        </p>
      </motion.section>

      {/* Timeline - Origine & Vision */}
      <div className="apropos-timeline">
        <span className="apropos-section-label">Notre histoire</span>
        <h2 className="apropos-section-title">L'origine du prisme</h2>
        <div className="timeline-list">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              <div className="timeline-dot">
                <div className="timeline-dot-circle" />
                <span className="timeline-year">{item.year}</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values */}
      <section className="apropos-values">
        <div className="apropos-values-inner">
          <span className="apropos-section-label" style={{ textAlign: 'center', display: 'block' }}>Notre ADN</span>
          <h2 className="apropos-section-title">Les valeurs qui nous guident</h2>
          <div className="apropos-values-grid">
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                className="apropos-value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <span className="apropos-value-icon">{v.icon}</span>
                <h3 className="apropos-value-title">{v.title}</h3>
                <p className="apropos-value-desc">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="apropos-adnbar">
        <span className="apropos-section-label">Notre positionnement</span>
        <h2 className="apropos-section-title">Marketing utile, concret, orienté résultats</h2>
        <p className="apropos-adn-text">
          Dans un secteur où l'on vend souvent des rêves, Prismifie se positionne différemment. Chaque mission est cadrée avec des objectifs clairs, des livrables précis et des indicateurs de succès définis dès le départ. Nous travaillons sur le fonds  pas seulement sur la forme.
        </p>
        <p className="apropos-adn-text">
          Notre approche combine <strong>rigueur analytique</strong> et <strong>créativité opérationnelle</strong>. Ce n'est pas l'un ou l'autre  c'est les deux, toujours.
        </p>
        <Link to="/expertises" className="apropos-link-btn">
          Découvrir nos expertises →
        </Link>
      </section>

      <CTAFinal
        title="Travaillons ensemble"
        subtitle="Si vous partagez notre vision du marketing utile et concret, il y a de grandes chances qu'on puisse faire de belles choses ensemble."
        primaryLabel="Nous contacter"
        primaryHref="/contact"
        secondaryLabel="Voir nos réalisations"
        secondaryHref="/realisations"
      />
    </div>
  );
}
