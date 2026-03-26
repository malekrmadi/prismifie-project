import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const packs = [
  {
    name: "Pack Éclat",
    level: "Essentiel",
    color: "#f97316",
    features: ["Audit & analyse de l'existant", "Stratégie éditoriale", "Banque de contenu"],
  },
  {
    name: "Pack Signature",
    level: "Premium",
    color: "#ff5fa2",
    highlight: true,
    features: [
      "Audit & analyse de l'existant",
      "Stratégie éditoriale",
      "Banque de contenu",
      "Gestion clé en main des réseaux",
    ],
  },
  {
    name: "Pack Prismifie",
    level: "Excellence",
    color: "#a855f7",
    features: [
      "Tout du Pack Signature",
      "Stratégie d'influence",
      "Accompagnement complet sur mesure",
    ],
  },
];

export function OffresPreview() {
  return (
    <section id="offres" style={{ padding: "100px 24px", background: "#fff" }}>
      <style>{`
        .offres-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ff5fa2;
          display: block;
          text-align: center;
          margin-bottom: 16px;
        }

        .offres-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(26px, 4vw, 42px);
          font-weight: 800;
          color: #111;
          text-align: center;
          margin-bottom: 16px;
        }

        .offres-desc {
          font-size: 17px;
          color: #666;
          text-align: center;
          max-width: 520px;
          margin: 0 auto 64px;
          line-height: 1.65;
        }

        .offres-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
          align-items: stretch;
        }

        .offre-preview-card {
          border-radius: 20px;
          padding: 36px 28px;
          border: 2px solid #f0f0f0;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          background: #fff;
          position: relative;
        }

        .offre-preview-card.highlight {
          border-color: #ff5fa2;
          box-shadow: 0 20px 50px rgba(255, 95, 162, 0.12);
        }

        .offre-preview-card:hover {
          transform: translateY(-6px);
        }

        .offre-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #ff5fa2, #f97316);
          color: white;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 16px;
          border-radius: 20px;
          letter-spacing: 1px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .offre-level {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .offre-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 24px;
          font-weight: 800;
          color: #111;
          margin-bottom: 24px;
        }

        .offre-features {
          list-style: none;
          padding: 0;
          margin: 0 0 32px;
          flex: 1;
        }

        .offre-feature {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 8px 0;
          font-size: 14px;
          color: #555;
          border-bottom: 1px solid #f5f5f5;
        }

        .offre-feature:last-child { border-bottom: none; }

        .offre-check {
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .offre-preview-cta {
          text-align: center;
        }

        .offre-preview-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .offre-preview-btn.primary {
          background: linear-gradient(135deg, #ff5fa2, #f97316);
          color: white;
          border: none;
        }

        .offre-preview-btn.outline {
          background: transparent;
          color: #555;
          border: 2px solid #e5e7eb;
        }

        .offre-preview-btn.outline:hover {
          border-color: #ff5fa2;
          color: #ff5fa2;
        }

        .offre-preview-btn.primary:hover {
          box-shadow: 0 8px 25px rgba(255,95,162,0.35);
          transform: translateY(-2px);
        }

        .offres-bottom {
          text-align: center;
          margin-top: 56px;
        }

        .offres-note {
          font-size: 14px;
          color: #999;
          margin-bottom: 24px;
          font-style: italic;
        }

        .offres-see-all {
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

        .offres-see-all:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(255,95,162,0.35);
        }
      `}</style>

      <span className="offres-label">Nos offres</span>
      <h2 className="offres-title">Trois niveaux d'engagement</h2>
      <p className="offres-desc">
        Des packs pensés pour s'adapter à vos ambitions — tout est proposé sur devis.
      </p>

      <div className="offres-grid">
        {packs.map((pack, idx) => (
          <motion.div
            key={idx}
            className={`offre-preview-card${pack.highlight ? ' highlight' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.55 }}
          >
            {pack.highlight && <div className="offre-badge">Populaire</div>}
            <p className="offre-level" style={{ color: pack.color }}>{pack.level}</p>
            <h3 className="offre-name">{pack.name}</h3>
            <ul className="offre-features">
              {pack.features.map((f, i) => (
                <li key={i} className="offre-feature">
                  <span className="offre-check" style={{ color: pack.color }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="offre-preview-cta">
              <Link to="/contact" className={`offre-preview-btn ${pack.highlight ? 'primary' : 'outline'}`}>
                Demander un devis
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="offres-bottom">
        <p className="offres-note">★ Toutes nos offres sont proposées sur devis personnalisé</p>
        <Link to="/offres" className="offres-see-all">Voir le détail des offres →</Link>
      </div>
    </section>
  );
}
