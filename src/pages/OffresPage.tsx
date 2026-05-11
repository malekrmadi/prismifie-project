import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CTAFinal } from "../sections/CTAFinal";

const packs = [
  {
    name: "Pack Éclat",
    level: "Essentiel",
    stars: 3,
    color: "#f97316",
    gradient: "linear-gradient(135deg, rgba(249,115,22,0.06), rgba(249,115,22,0.01))",
    border: "rgba(249,115,22,0.18)",
    positioning: "Idéal pour démarrer et poser les bases.",
    features: [
      "Audit et analyse de l'existant",
      "Stratégie éditoriale complète",
      "Banque de contenu (photos, vidéos, motion design)",
    ],
    notIncluded: [
      "Gestion des réseaux sociaux",
      "Stratégie d'influence",
    ],
  },
  {
    name: "Pack Signature",
    level: "Premium",
    stars: 4,
    color: "#ff5fa2",
    gradient: "linear-gradient(135deg, rgba(255,95,162,0.08), rgba(255,95,162,0.02))",
    border: "#ff5fa2",
    highlight: true,
    positioning: "Notre offre la plus populaire pour une gestion clé en main.",
    features: [
      "Audit et analyse de l'existant",
      "Stratégie éditoriale complète",
      "Banque de contenu (photos, vidéos, motion design)",
      "Mise en place et gestion clé en main des réseaux sociaux",
    ],
    notIncluded: [
      "Stratégie d'influence",
    ],
  },
  {
    name: "Pack Prismifie",
    level: "Excellence",
    stars: 5,
    color: "#a855f7",
    gradient: "linear-gradient(135deg, rgba(168,85,247,0.06), rgba(168,85,247,0.01))",
    border: "rgba(168,85,247,0.18)",
    positioning: "L'offre la plus complète pour les marques ambitieuses.",
    features: [
      "Audit et analyse de l'existant",
      "Stratégie éditoriale complète",
      "Banque de contenu (photos, vidéos, motion design)",
      "Mise en place et gestion clé en main des réseaux sociaux",
      "Stratégie d'influence",
    ],
    notIncluded: [],
  },
];

function Stars({ count, color }: { count: number; color: string }) {
  return (
    <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ fontSize: 18, color: i < count ? color : '#e5e7eb' }}>★</span>
      ))}
    </div>
  );
}

export function OffresPage() {
  return (
    <div>
      <style>{`
        .offres-hero {
          padding: 140px 24px 80px;
          text-align: center;
          background: linear-gradient(135deg, rgba(255,95,162,0.04), rgba(249,115,22,0.04));
        }

        .offres-hero-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ff5fa2;
          display: block;
          margin-bottom: 20px;
        }

        .offres-hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          color: #111;
          margin-bottom: 24px;
        }

        .offres-hero-desc {
          font-size: 18px;
          color: #555;
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .offres-packs {
          padding: 80px 24px;
          max-width: 1180px;
          margin: 0 auto;
        }

        .offres-packs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 28px;
          align-items: stretch;
        }

        .offre-pack-card {
          border-radius: 24px;
          padding: 44px 36px;
          display: flex;
          flex-direction: column;
          position: relative;
          border: 2px solid;
          transition: all 0.35s ease;
        }

        .offre-pack-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
        }

        .offre-pack-card.highlight {
          box-shadow: 0 20px 50px rgba(255,95,162,0.15);
        }

        .offre-popular-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #ff5fa2, #f97316);
          color: white;
          font-size: 11px;
          font-weight: 700;
          padding: 5px 20px;
          border-radius: 20px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .offre-pack-level {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .offre-pack-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #111;
          margin-bottom: 8px;
        }

        .offre-pack-positioning {
          font-size: 14px;
          color: #777;
          margin-bottom: 28px;
          font-style: italic;
          line-height: 1.5;
        }

        .offre-pack-features {
          list-style: none;
          padding: 0;
          margin: 0 0 20px;
          flex: 1;
        }

        .offre-pack-feature {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 0;
          font-size: 14px;
          color: #444;
          border-bottom: 1px solid #f5f5f5;
        }

        .offre-pack-feature:last-child { border-bottom: none; }

        .offre-pack-feature.not-included { color: #ccc; }

        .feature-check { flex-shrink: 0; font-weight: 700; }
        .feature-x { flex-shrink: 0; color: #ddd; }

        .offre-pack-divider {
          height: 1px;
          background: #f0f0f0;
          margin: 20px 0;
        }

        .offre-pack-cta {
          margin-top: 8px;
        }

        .offre-pack-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 14px 24px;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          font-family: inherit;
          border: none;
          cursor: pointer;
        }

        .offre-pack-btn.primary {
          background: linear-gradient(135deg, #ff5fa2, #f97316);
          color: white;
        }

        .offre-pack-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(255,95,162,0.35);
        }

        .offre-pack-btn.outline {
          background: transparent;
          border: 2px solid #e5e7eb;
          color: #555;
        }

        .offre-pack-btn.outline:hover {
          border-color: currentColor;
        }

        .offres-note-section {
          text-align: center;
          padding: 20px 24px 60px;
          max-width: 700px;
          margin: 0 auto;
        }

        .offres-note-box {
          background: #fafafa;
          border: 1px solid #f0f0f0;
          border-radius: 16px;
          padding: 28px 36px;
        }

        .offres-note-icon { font-size: 28px; margin-bottom: 12px; display: block; }

        .offres-note-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #111;
          margin-bottom: 10px;
        }

        .offres-note-text { font-size: 14px; color: #666; line-height: 1.65; }
      `}</style>

      {/* Hero */}
      <header className="offres-hero">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="offres-hero-label">Nos Offres</span>
          <h1 className="offres-hero-title">Des packs pensés pour chaque ambition</h1>
          <p className="offres-hero-desc">
            Trois niveaux d'engagement pour répondre à vos objectifs  de la mise en place des fondations à l'excellence éditoriale. Tout est personnalisé sur devis.
          </p>
        </motion.div>
      </header>

      {/* Packs grid */}
      <div className="offres-packs">
        <div className="offres-packs-grid">
          {packs.map((pack, idx) => (
            <motion.div
              key={idx}
              className={`offre-pack-card${pack.highlight ? ' highlight' : ''}`}
              style={{ background: pack.gradient, borderColor: pack.border }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              {pack.highlight && <div className="offre-popular-badge">Plus populaire</div>}

              <Stars count={pack.stars} color={pack.color} />
              <p className="offre-pack-level" style={{ color: pack.color }}>{pack.level}</p>
              <h2 className="offre-pack-name">{pack.name}</h2>
              <p className="offre-pack-positioning">{pack.positioning}</p>

              <div className="offre-pack-divider" />

              <ul className="offre-pack-features">
                {pack.features.map((f, i) => (
                  <li key={i} className="offre-pack-feature">
                    <span className="feature-check" style={{ color: pack.color }}>✓</span>
                    {f}
                  </li>
                ))}
                {pack.notIncluded.map((f, i) => (
                  <li key={`ni-${i}`} className="offre-pack-feature not-included">
                    <span className="feature-x">✗</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="offre-pack-cta">
                <Link
                  to="/contact"
                  className={`offre-pack-btn ${pack.highlight ? 'primary' : 'outline'}`}
                  style={!pack.highlight ? { color: pack.color, borderColor: `${pack.color}40` } : undefined}
                >
                  Demander ce pack
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Note */}
      <div className="offres-note-section">
        <motion.div
          className="offres-note-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="offres-note-icon">📋</span>
          <h3 className="offres-note-title">Tout est proposé sur devis</h3>
          <p className="offres-note-text">
            Chaque entreprise est différente. Ces packs sont des templates de départ  nous adaptons systématiquement notre offre à vos enjeux spécifiques, votre secteur et votre budget lors d'un premier échange.
          </p>
        </motion.div>
      </div>

      <CTAFinal
        title="Construisons votre offre sur mesure"
        subtitle="Remplissez le formulaire et nous reviendrons vers vous sous 48h avec une proposition adaptée."
        primaryLabel="Demander un devis"
        primaryHref="/contact"
        secondaryLabel="Voir nos réalisations"
        secondaryHref="/realisations"
      />
    </div>
  );
}
