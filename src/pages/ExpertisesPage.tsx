import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CTAFinal } from "../sections/CTAFinal";

const expertises = [
  {
    icon: "🎭",
    title: "Événementiel",
    desc: "Nous concevons et organisons des événements professionnels sur mesure — du concept à la coordination le jour J. Lancements produits, séminaires, soirées de marque : chaque événement est une opportunité de renforcer votre image.",
    href: "/event",
    color: "#ff5fa2",
    gradient: "linear-gradient(135deg, rgba(255,95,162,0.07), rgba(255,95,162,0.02))",
    services: ["Conception du concept événementiel", "Organisation & logistique", "Coordination des prestataires", "Communication de l'événement"],
  },
  {
    icon: "🎯",
    title: "Conseil stratégique",
    desc: "Nous aidons les entreprises à structurer leur stratégie et à prendre des décisions claires dans des environnements complexes. Audit, positionnement, accompagnement dirigeant, coaching et formation.",
    href: "/conseil",
    color: "#f97316",
    gradient: "linear-gradient(135deg, rgba(249,115,22,0.07), rgba(249,115,22,0.02))",
    services: ["Audit stratégique", "Positionnement & différenciation", "Coaching dirigeant", "Formations & accompagnement"],
  },
  {
    icon: "📣",
    title: "Marketing & Communication",
    desc: "Nous déployons des stratégies de marketing B2B orientées performance : contenu, réseaux sociaux, acquisition digitale et cohérence éditoriale. Nos actions génèrent des résultats mesurables.",
    href: "/marketing",
    color: "#a855f7",
    gradient: "linear-gradient(135deg, rgba(168,85,247,0.07), rgba(168,85,247,0.02))",
    services: ["Stratégie éditoriale", "Production de contenu", "Gestion des réseaux sociaux", "Stratégie d'influence"],
  },
];

export function ExpertisesPage() {
  return (
    <div>
      <style>{`
        .exp-hero {
          padding: 140px 24px 80px;
          text-align: center;
          background: linear-gradient(135deg, rgba(255,95,162,0.04) 0%, rgba(249,115,22,0.04) 50%, rgba(168,85,247,0.04) 100%);
        }

        .exp-hero-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ff5fa2;
          display: block;
          margin-bottom: 20px;
        }

        .exp-hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(32px, 5vw, 58px);
          font-weight: 800;
          color: #111;
          margin-bottom: 24px;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }

        .exp-hero-desc {
          font-size: 18px;
          color: #555;
          max-width: 660px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .exp-intro {
          padding: 80px 24px;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .exp-intro-text {
          font-size: 19px;
          color: #444;
          line-height: 1.75;
        }

        .exp-cards {
          padding: 20px 24px 80px;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .exp-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          background: #fff;
          border: 1px solid #f0f0f0;
          border-radius: 24px;
          padding: 52px;
          transition: all 0.3s ease;
        }

        .exp-card:hover {
          box-shadow: 0 24px 60px rgba(0,0,0,0.07);
        }

        .exp-card-icon-box {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 38px;
          margin-bottom: 24px;
        }

        .exp-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 32px;
          font-weight: 800;
          color: #111;
          margin-bottom: 16px;
        }

        .exp-card-desc {
          font-size: 16px;
          color: #555;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .exp-card-services {
          list-style: none;
          padding: 0;
          margin: 0 0 32px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .exp-card-service {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #444;
          font-weight: 500;
        }

        .exp-card-service-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .exp-card-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          color: white;
        }

        .exp-card-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .exp-card-visual {
          height: 320px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 100px;
        }

        @media (max-width: 768px) {
          .exp-card {
            grid-template-columns: 1fr;
            padding: 32px 24px;
          }
          .exp-card-visual {
            height: 180px;
            font-size: 64px;
          }
        }
      `}</style>

      {/* Hero */}
      <header className="exp-hero">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="exp-hero-label">Nos Expertises</span>
          <h1 className="exp-hero-title">Trois piliers. Une vision. Des résultats.</h1>
          <p className="exp-hero-desc">
            Prismifie intervient sur trois domaines d'expertise complémentaires pour accompagner les entreprises B2B dans leur développement stratégique et leur visibilité.
          </p>
        </motion.div>
      </header>

      {/* Intro */}
      <div className="exp-intro">
        <motion.p
          className="exp-intro-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Chaque expertise est une entrée complémentaire. Ensemble, elles forment un <strong>écosystème de croissance intégré</strong> — de l'événement au digital, en passant par la structuration stratégique. Nous intervenons séparément ou de manière combinée selon vos priorités.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="exp-cards">
        {expertises.map((exp, idx) => (
          <motion.div
            key={idx}
            className="exp-card"
            style={{ background: exp.gradient }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.65 }}
          >
            <div>
              <div className="exp-card-icon-box" style={{ background: `${exp.color}14` }}>
                {exp.icon}
              </div>
              <h2 className="exp-card-title">{exp.title}</h2>
              <p className="exp-card-desc">{exp.desc}</p>
              <ul className="exp-card-services">
                {exp.services.map((s, i) => (
                  <li key={i} className="exp-card-service">
                    <span className="exp-card-service-dot" style={{ background: exp.color }} />
                    {s}
                  </li>
                ))}
              </ul>
              <Link
                to={exp.href}
                className="exp-card-link"
                style={{ background: `linear-gradient(135deg, ${exp.color}, ${exp.color}cc)` }}
              >
                Découvrir cette expertise →
              </Link>
            </div>
            <div className="exp-card-visual" style={{ background: `${exp.color}0a`, border: `1px solid ${exp.color}18` }}>
              {exp.icon}
            </div>
          </motion.div>
        ))}
      </div>

      <CTAFinal
        title="Une question sur nos expertises ?"
        subtitle="Échangeons ensemble pour identifier quelle expertise correspond à vos enjeux actuels."
        primaryLabel="Nous contacter"
        primaryHref="/contact"
        secondaryLabel="Voir nos offres"
        secondaryHref="/offres"
      />
    </div>
  );
}
