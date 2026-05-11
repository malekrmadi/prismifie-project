import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CTAFinal } from "../sections/CTAFinal";

const packs = [
  {
    name: "PACK ÉCLAT",
    level: "Essentiel",
    stars: 3,
    color: "#f97316",
    items: [
      "Audit et analyse de l'existant",
      "Stratégie éditoriale",
      "Banque de contenu (photos, vidéos, motion design…)",
    ],
    highlight: false,
  },
  {
    name: "PACK SIGNATURE",
    level: "Premium",
    stars: 4,
    color: "#ff5fa2",
    items: [
      "Audit et analyse de l'existant",
      "Stratégie éditoriale",
      "Banque de contenu (photos, vidéos, motion design…)",
      "Mise en place et gestion clé en main des réseaux sociaux",
    ],
    highlight: true,
  },
  {
    name: "PACK PRISMIFIE",
    level: "Excellence",
    stars: 5,
    color: "#a855f7",
    items: [
      "Audit et analyse de l'existant",
      "Stratégie éditoriale",
      "Banque de contenu (photos, vidéos, motion design…)",
      "Mise en place et gestion clé en main des réseaux sociaux",
      "Stratégie d'influence",
    ],
    highlight: false,
  },
];

const pillars = [
  { icon: "✍️", title: "Stratégie éditoriale", desc: "Nous définissons votre ligne éditoriale, vos thèmes, vos formats et votre calendrier de publication pour une communication cohérente et intentionnelle." },
  { icon: "🎨", title: "Production de contenu", desc: "Photos, vidéos, motion design, carousels, textes  nous produisons des contenus professionnels qui reflètent votre image et captent l'attention de votre cible." },
  { icon: "📱", title: "Gestion des réseaux sociaux", desc: "Prise en charge complète de vos comptes (LinkedIn, Instagram, TikTok) : publication, interaction, modération et reporting mensuel." },
  { icon: "🌟", title: "Stratégie d'influence", desc: "Identification et activation de créateurs de contenu pertinents dans votre secteur pour amplifier votre message avec authenticité." },
  { icon: "📈", title: "Acquisition digitale", desc: "Campagnes d'acquisition ciblées (paid social, SEO, emailing) pour générer des leads qualifiés et développer votre pipeline commercial." },
  { icon: "📊", title: "Reporting & analyse", desc: "Tableaux de bord sur mesure et reporting mensuel avec les indicateurs clés de performance pour prendre des décisions basées sur les données." },
];

export function MarketingPage() {
  return (
    <div>
      <style>{`
        .mkt-hero {
          padding: 140px 24px 80px;
          text-align: center;
          background: linear-gradient(135deg, rgba(168,85,247,0.05), rgba(255,95,162,0.05));
        }

        .mkt-hero-label {
          font-size: 13px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #a855f7;
          display: block; margin-bottom: 20px;
        }

        .mkt-hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800; color: #111; margin-bottom: 24px;
          max-width: 820px; margin-left: auto; margin-right: auto;
        }

        .mkt-hero-desc {
          font-size: 18px; color: #555;
          max-width: 680px; margin: 0 auto 40px; line-height: 1.7;
        }

        .mkt-hero-tags {
          display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;
        }

        .mkt-hero-tag {
          background: rgba(168,85,247,0.08); color: #a855f7;
          border: 1px solid rgba(168,85,247,0.15);
          padding: 7px 18px; border-radius: 50px; font-size: 13px; font-weight: 600;
        }

        .mkt-section {
          padding: 80px 24px; max-width: 1100px; margin: 0 auto;
        }

        .section-lbl {
          font-size: 13px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #a855f7;
          display: block; text-align: center; margin-bottom: 16px;
        }

        .section-ttl {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(24px, 3.5vw, 40px);
          font-weight: 800; color: #111; text-align: center; margin-bottom: 52px;
        }

        .mkt-pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .mkt-pillar-card {
          background: #fff; border: 1px solid #f0f0f0;
          border-radius: 18px; padding: 32px;
          transition: all 0.3s ease;
        }

        .mkt-pillar-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.07);
          border-color: rgba(168,85,247,0.15);
        }

        .mkt-pillar-icon {
          font-size: 26px; width: 56px; height: 56px;
          background: rgba(168,85,247,0.08); border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }

        .mkt-pillar-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px; font-weight: 700; color: #111; margin-bottom: 10px;
        }

        .mkt-pillar-desc { font-size: 14px; color: #666; line-height: 1.65; }

        /* Packs */
        .mkt-packs-section {
          padding: 80px 24px; background: #f9f9fb;
        }

        .mkt-packs-inner { max-width: 1100px; margin: 0 auto; }

        .mkt-packs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 28px; align-items: stretch;
          margin-top: 0;
        }

        .pack-card {
          background: #fff; border: 2px solid #f0f0f0;
          padding: 40px 32px; border-radius: 24px;
          transition: transform 0.4s ease; display: flex; flex-direction: column;
          position: relative;
        }

        .pack-card.highlight {
          border-color: rgba(255,95,162,0.35);
          box-shadow: 0 20px 50px rgba(255,95,162,0.1);
        }

        .pack-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 50px rgba(0,0,0,0.08);
        }

        .pack-badge {
          position: absolute; top: -13px; left: 50%; transform: translateX(-50%);
          background: linear-gradient(135deg, #ff5fa2, #f97316);
          color: white; font-size: 11px; font-weight: 700;
          padding: 4px 18px; border-radius: 20px; letter-spacing: 1px;
          text-transform: uppercase; white-space: nowrap;
        }

        .pack-stars {
          display: flex; gap: 3px; margin-bottom: 12px;
        }

        .pack-level { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 6px; }
        .pack-name { font-size: 24px; font-weight: 800; color: #111; text-align: center; margin-bottom: 28px; }
        .pack-items { list-style: none; padding: 0; margin: 0; flex-grow: 1; }
        .pack-item {
          padding: 11px 0; font-size: 14px; color: #555;
          display: flex; align-items: flex-start; gap: 12px;
          border-bottom: 1px solid #f5f5f5;
        }
        .pack-item:last-child { border-bottom: none; }
        .pack-item-icon { font-weight: bold; flex-shrink: 0; }
        .pack-footer { margin-top: 36px; text-align: center; }
        .pack-btn {
          display: inline-flex; align-items: center; justify-content: center;
          width: 100%; padding: 14px 24px; border-radius: 50px;
          font-size: 15px; font-weight: 700; text-decoration: none;
          transition: all 0.3s ease; font-family: inherit; border: none; cursor: pointer;
        }

        .pack-btn.primary {
          background: linear-gradient(135deg, #ff5fa2, #f97316);
          color: white;
        }

        .pack-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(255,95,162,0.35);
        }

        .pack-btn.outline {
          background: transparent;
          border: 2px solid #e5e7eb; color: #555;
        }

        .pack-btn.outline:hover { border-color: #a855f7; color: #a855f7; }

        .mkt-devis-note {
          text-align: center; margin-top: 48px;
          padding: 24px 32px; background: #fff;
          border-radius: 16px; border: 1px solid #f0f0f0;
          font-style: italic; color: #888; font-size: 14px;
          max-width: 600px; margin-left: auto; margin-right: auto; margin-top: 48px;
        }

        .mkt-breadcrumb {
          display: flex; gap: 8px; align-items: center;
          font-size: 14px; color: #aaa; padding: 16px 24px 0;
          max-width: 1100px; margin: 0 auto;
        }

        .mkt-breadcrumb a { color: #aaa; text-decoration: none; transition: color 0.2s; }
        .mkt-breadcrumb a:hover { color: #a855f7; }
      `}</style>

      {/* Breadcrumb */}
      <div style={{ paddingTop: 80 }}>
        <div className="mkt-breadcrumb">
          <Link to="/">Accueil</Link> /
          <Link to="/expertises">Expertises</Link> /
          <span style={{ color: '#a855f7', fontWeight: 600 }}>Marketing & Communication</span>
        </div>
      </div>

      {/* Hero */}
      <header className="mkt-hero">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="mkt-hero-label">Expertise Marketing & Communication</span>
          <h1 className="mkt-hero-title">
            Visibilité cohérente. Acquisition performante. Image forte.
          </h1>
          <p className="mkt-hero-desc">
            Nous construisons et déployons des stratégies de marketing B2B orientées résultats. De la stratégie éditoriale au social media management, en passant par la production de contenu et l'acquisition digitale.
          </p>
          <div className="mkt-hero-tags">
            <span className="mkt-hero-tag">Agence marketing B2B</span>
            <span className="mkt-hero-tag">Stratégie digitale</span>
            <span className="mkt-hero-tag">Social media management</span>
          </div>
        </motion.div>
      </header>

      {/* Pillars */}
      <div className="mkt-section">
        <span className="section-lbl">Nos services</span>
        <h2 className="section-ttl">Six leviers pour votre visibilité</h2>
        <div className="mkt-pillars-grid">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              className="mkt-pillar-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <div className="mkt-pillar-icon">{p.icon}</div>
              <h3 className="mkt-pillar-title">{p.title}</h3>
              <p className="mkt-pillar-desc">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Packs */}
      <section className="mkt-packs-section">
        <div className="mkt-packs-inner">
          <span className="section-lbl">Nos offres</span>
          <h2 className="section-ttl">Choisissez votre niveau d'engagement</h2>
          <div className="mkt-packs-grid">
            {packs.map((pack, idx) => (
              <motion.div
                key={idx}
                className={`pack-card ${pack.highlight ? 'highlight' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
              >
                {pack.highlight && <div className="pack-badge">Populaire</div>}
                <div className="pack-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} style={{ fontSize: 16, color: i < pack.stars ? pack.color : '#e5e7eb' }}>★</span>
                  ))}
                </div>
                <p className="pack-level" style={{ color: pack.color }}>{pack.level}</p>
                <h3 className="pack-name">{pack.name}</h3>
                <ul className="pack-items">
                  {pack.items.map((item, i) => (
                    <li key={i} className="pack-item">
                      <span className="pack-item-icon" style={{ color: pack.color }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pack-footer">
                  <Link to="/contact" className={`pack-btn ${pack.highlight ? 'primary' : 'outline'}`}>
                    Demander ce pack
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mkt-devis-note">
            📋 Toutes nos prestations sont proposées sur devis pour correspondre exactement à vos enjeux et votre budget.
          </div>
        </div>
      </section>

      {/* Internal links */}
      <div style={{ padding: '48px 24px', maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/offres" style={{ padding: '12px 28px', borderRadius: 50, background: 'rgba(168,85,247,0.08)', color: '#a855f7', fontWeight: 700, textDecoration: 'none', border: '1px solid rgba(168,85,247,0.15)', fontSize: 14 }}>
          📦 Voir toutes nos offres →
        </Link>
        <Link to="/event" style={{ padding: '12px 28px', borderRadius: 50, background: '#f9f9fb', color: '#555', fontWeight: 600, textDecoration: 'none', border: '1px solid #f0f0f0', fontSize: 14 }}>
          🎭 Événementiel
        </Link>
        <Link to="/conseil" style={{ padding: '12px 28px', borderRadius: 50, background: '#f9f9fb', color: '#555', fontWeight: 600, textDecoration: 'none', border: '1px solid #f0f0f0', fontSize: 14 }}>
          🎯 Conseil stratégique
        </Link>
      </div>

      <CTAFinal
        title="Prêt à booster votre visibilité B2B ?"
        subtitle="Décrivez-nous votre contexte et vos objectifs. Nous vous proposons une approche sur mesure lors d'un premier échange."
        primaryLabel="Demander un devis marketing"
        primaryHref="/contact"
        secondaryLabel="Voir nos réalisations"
        secondaryHref="/realisations"
      />
    </div>
  );
}
