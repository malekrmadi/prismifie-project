import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const expertises = [
  {
    icon: "🎭",
    title: "Événementiel",
    subtitle: "Événements professionnels sur mesure",
    description:
      "Conception, organisation et coordination d'événements B2B à fort impact : lancements produits, séminaires, soirées de marque. Nous créons des expériences mémorables qui renforcent votre image.",
    href: "/event",
    color: "#ff5fa2",
    gradient: "linear-gradient(135deg, rgba(255,95,162,0.08), rgba(255,95,162,0.02))",
    border: "rgba(255,95,162,0.15)",
  },
  {
    icon: "🎯",
    title: "Conseil stratégique",
    subtitle: "Structurez votre stratégie et vos décisions",
    description:
      "Audit, positionnement, accompagnement et coaching pour les dirigeants. Nous aidons les entreprises à naviguer dans la complexité et à prendre des décisions claires et impactantes.",
    href: "/conseil",
    color: "#f97316",
    gradient: "linear-gradient(135deg, rgba(249,115,22,0.08), rgba(249,115,22,0.02))",
    border: "rgba(249,115,22,0.15)",
  },
  {
    icon: "📣",
    title: "Marketing & Communication",
    subtitle: "Visibilité cohérente et acquisition performante",
    description:
      "Stratégie éditoriale, production de contenu, social media et acquisition digitale. Nous déployons des systèmes de communication qui génèrent des résultats mesurables.",
    href: "/marketing",
    color: "#a855f7",
    gradient: "linear-gradient(135deg, rgba(168,85,247,0.08), rgba(168,85,247,0.02))",
    border: "rgba(168,85,247,0.15)",
  },
];

export function ExpertisesOverview() {
  return (
    <section id="expertises" style={{ padding: "100px 24px", background: "#fff" }}>
      <style>{`
        .expertises-section-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ff5fa2;
          display: block;
          text-align: center;
          margin-bottom: 16px;
        }

        .expertises-section-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          color: #111;
          text-align: center;
          margin-bottom: 16px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .expertises-section-desc {
          font-size: 17px;
          color: #666;
          text-align: center;
          max-width: 560px;
          margin: 0 auto 64px;
          line-height: 1.65;
        }

        .expertises-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 28px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .expertise-card {
          border-radius: 20px;
          padding: 40px 36px;
          border: 1px solid #eee;
          transition: all 0.35s ease;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .expertise-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.08);
        }

        .expertise-card-icon {
          font-size: 36px;
          width: 68px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          margin-bottom: 8px;
        }

        .expertise-card-subtitle {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .expertise-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 24px;
          font-weight: 800;
          color: #111;
          margin-bottom: 8px;
        }

        .expertise-card-desc {
          font-size: 15px;
          color: #666;
          line-height: 1.65;
          flex: 1;
        }

        .expertise-card-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          margin-top: 8px;
          transition: gap 0.2s;
        }

        .expertise-card:hover .expertise-card-link {
          gap: 10px;
        }

        .expertises-bottom {
          text-align: center;
          margin-top: 56px;
        }

        .expertises-view-all {
          background: linear-gradient(135deg, #ff5fa2, #f97316);
          color: white;
          border: none;
          border-radius: 50px;
          padding: 14px 36px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .expertises-view-all:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(255, 95, 162, 0.35);
        }
      `}</style>

      <span className="expertises-section-label">Nos expertises</span>
      <h2 className="expertises-section-title">Trois piliers pour votre croissance</h2>
      <p className="expertises-section-desc">
        Chaque expertise est conçue pour répondre à des enjeux B2B concrets, avec une approche structurée et orientée résultats.
      </p>

      <div className="expertises-cards">
        {expertises.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
          >
            <Link
              to={exp.href}
              className="expertise-card"
              style={{ background: exp.gradient, borderColor: exp.border }}
            >
              <div className="expertise-card-icon" style={{ background: `${exp.color}15` }}>
                {exp.icon}
              </div>
              <div>
                <p className="expertise-card-subtitle" style={{ color: exp.color }}>{exp.subtitle}</p>
                <h3 className="expertise-card-title">{exp.title}</h3>
              </div>
              <p className="expertise-card-desc">{exp.description}</p>
              <span className="expertise-card-link" style={{ color: exp.color }}>
                En savoir plus →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="expertises-bottom">
        <Link to="/expertises" className="expertises-view-all">
          Voir toutes nos expertises ✦
        </Link>
      </div>
    </section>
  );
}
