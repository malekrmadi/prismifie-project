import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CTAFinal } from "../sections/CTAFinal";

const services = [
  { icon: "💡", title: "Conception & concept", desc: "Nous créons le fil rouge de votre événement : thème, scénographie, expérience attendue, messages clés. Chaque événement raconte une histoire cohérente avec votre marque." },
  { icon: "📋", title: "Organisation & logistique", desc: "Gestion complète des aspects logistiques : lieu, traiteur, technique son/lumière, transport, hébergement. Tous les prestataires sont sélectionnés et coordonnés par nos soins." },
  { icon: "🤝", title: "Coordination prestataires", desc: "Nous gérons l'ensemble du réseau de prestataires en votre nom. Vous avez un seul interlocuteur, nous gérons la complexité." },
  { icon: "📣", title: "Communication événementielle", desc: "Promotion en amont, création de supports, communication sur les réseaux sociaux, invitations et gestion des RSVP. Nous remplissons votre événement." },
  { icon: "📸", title: "Captation & souvenir", desc: "Organisation de la couverture photo/vidéo de vos événements pour maximiser le contenu réutilisable et laisser une trace durable." },
  { icon: "📊", title: "Suivi & bilan", desc: "Après chaque événement, nous réalisons un bilan avec les KPIs clés : participants, satisfaction, couverture. Pour progresser en continu." },
];

const useCases = [
  { icon: "🚀", title: "Lancements produits", desc: "Créez un moment mémorable autour de votre nouvelle offre." },
  { icon: "🏢", title: "Séminaires & congrès", desc: "Organisez des réunions professionnelles impactantes." },
  { icon: "🥂", title: "Soirées de marque", desc: "Fédérez vos équipes et partenaires autour de votre vision." },
  { icon: "🌐", title: "Forums & conférences", desc: "Positionnez-vous comme référence dans votre secteur." },
];

export function EventPage() {
  return (
    <div>
      <style>{`
        .event-hero {
          padding: 140px 24px 80px;
          text-align: center;
          background: linear-gradient(135deg, rgba(255,95,162,0.05) 0%, rgba(249,115,22,0.05) 100%);
        }

        .event-hero-label {
          font-size: 13px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #ff5fa2;
          display: block; margin-bottom: 20px;
        }

        .event-hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(32px, 5vw, 58px);
          font-weight: 800; color: #111; margin-bottom: 24px;
          max-width: 820px; margin-left: auto; margin-right: auto;
        }

        .event-hero-desc {
          font-size: 18px; color: #555;
          max-width: 680px; margin: 0 auto 40px; line-height: 1.7;
        }

        .event-hero-tags {
          display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;
        }

        .event-hero-tag {
          background: rgba(255,95,162,0.08);
          color: #ff5fa2;
          border: 1px solid rgba(255,95,162,0.15);
          padding: 7px 18px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
        }

        .event-section {
          padding: 80px 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-label {
          font-size: 13px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #ff5fa2;
          display: block; text-align: center; margin-bottom: 16px;
        }

        .section-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(24px, 3.5vw, 40px);
          font-weight: 800; color: #111; text-align: center; margin-bottom: 52px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .service-card {
          background: #fff;
          border: 1px solid #f0f0f0;
          border-radius: 18px; padding: 32px;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.07);
          border-color: rgba(255,95,162,0.15);
        }

        .service-card-icon {
          font-size: 28px; margin-bottom: 16px; display: block;
          width: 56px; height: 56px;
          background: rgba(255,95,162,0.08);
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }

        .service-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px; font-weight: 700; color: #111; margin-bottom: 10px;
        }

        .service-card-desc {
          font-size: 14px; color: #666; line-height: 1.65;
        }

        .event-value {
          padding: 80px 24px;
          background: #0b0b12;
          text-align: center;
        }

        .event-value-inner { max-width: 900px; margin: 0 auto; }

        .event-value-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(24px, 3.5vw, 40px);
          font-weight: 800; color: #fff; margin-bottom: 20px;
        }

        .event-value-desc {
          font-size: 17px; color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 48px;
        }

        .event-value-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 24px;
        }

        .event-stat {
          text-align: center;
        }

        .event-stat-number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 44px; font-weight: 800;
          background: linear-gradient(135deg, #ff5fa2, #f97316);
          -webkit-background-clip: text; background-clip: text; color: transparent;
          margin-bottom: 8px;
        }

        .event-stat-label { font-size: 14px; color: rgba(255,255,255,0.5); }

        .use-cases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .use-case-card {
          background: #f9f9fb;
          border: 1px solid #f0f0f0;
          border-radius: 16px; padding: 28px 24px;
          transition: all 0.3s ease;
        }

        .use-case-card:hover {
          border-color: rgba(255,95,162,0.2);
          background: rgba(255,95,162,0.03);
        }

        .use-case-icon { font-size: 28px; margin-bottom: 12px; display: block; }
        .use-case-title { font-weight: 700; color: #111; margin-bottom: 6px; font-size: 16px; }
        .use-case-desc { font-size: 13px; color: #666; line-height: 1.55; }

        .event-breadcrumb {
          display: flex; gap: 8px; align-items: center;
          font-size: 14px; color: #aaa;
          padding: 16px 24px 0;
          max-width: 1100px; margin: 0 auto;
        }

        .event-breadcrumb a { color: #aaa; text-decoration: none; transition: color 0.2s; }
        .event-breadcrumb a:hover { color: #ff5fa2; }
      `}</style>

      {/* Breadcrumb */}
      <div style={{ paddingTop: 80 }}>
        <div className="event-breadcrumb">
          <Link to="/">Accueil</Link> /
          <Link to="/expertises">Expertises</Link> /
          <span style={{ color: '#ff5fa2', fontWeight: 600 }}>Événementiel</span>
        </div>
      </div>

      {/* Hero */}
      <header className="event-hero">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="event-hero-label">Expertise Événementiel</span>
          <h1 className="event-hero-title">Organisation d'événements professionnels qui marquent</h1>
          <p className="event-hero-desc">
            Nous prenons en charge l'intégralité de votre projet événementiel  du concept au bilan post-événement. Chaque détail est orchestré pour créer une expérience impactante qui renforce votre image B2B.
          </p>
          <div className="event-hero-tags">
            <span className="event-hero-tag">Organisation événement entreprise</span>
            <span className="event-hero-tag">Agence événementielle B2B</span>
            <span className="event-hero-tag">Sur mesure</span>
          </div>
        </motion.div>
      </header>

      {/* Services */}
      <div className="event-section">
        <span className="section-label">Nos services</span>
        <h2 className="section-title">Ce que nous prenons en charge</h2>
        <div className="services-grid">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <div className="service-card-icon">{s.icon}</div>
              <h3 className="service-card-title">{s.title}</h3>
              <p className="service-card-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Value section */}
      <section className="event-value">
        <div className="event-value-inner">
          <h2 className="event-value-title">Un événement réussi, c'est un levier stratégique</h2>
          <p className="event-value-desc">
            Les événements B2B ne sont pas des dépenses  ce sont des investissements dans votre notoriété, votre réseau et votre image de marque. Chaque événement bien orchestré génère de la confiance, des opportunités et de la fidélité.
          </p>
          <div className="event-value-stats">
            <motion.div className="event-stat" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="event-stat-number">95%</div>
              <div className="event-stat-label">taux de satisfaction moyen</div>
            </motion.div>
            <motion.div className="event-stat" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="event-stat-number">+300</div>
              <div className="event-stat-label">participants max organisés</div>
            </motion.div>
            <motion.div className="event-stat" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="event-stat-number">1</div>
              <div className="event-stat-label">interlocuteur unique pour vous</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <div className="event-section">
        <span className="section-label">Cas d'usage</span>
        <h2 className="section-title">Pour quels types d'événements ?</h2>
        <div className="use-cases-grid">
          {useCases.map((u, idx) => (
            <motion.div
              key={idx}
              className="use-case-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <span className="use-case-icon">{u.icon}</span>
              <p className="use-case-title">{u.title}</p>
              <p className="use-case-desc">{u.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Internal links */}
      <div style={{ padding: '0 24px 80px', maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/offres" style={{ padding: '12px 28px', borderRadius: 50, background: 'rgba(255,95,162,0.08)', color: '#ff5fa2', fontWeight: 700, textDecoration: 'none', border: '1px solid rgba(255,95,162,0.15)', fontSize: 14, transition: 'all 0.2s' }}>
          📦 Voir nos offres →
        </Link>
        <Link to="/conseil" style={{ padding: '12px 28px', borderRadius: 50, background: '#f9f9fb', color: '#555', fontWeight: 600, textDecoration: 'none', border: '1px solid #f0f0f0', fontSize: 14 }}>
          🎯 Conseil stratégique
        </Link>
        <Link to="/marketing" style={{ padding: '12px 28px', borderRadius: 50, background: '#f9f9fb', color: '#555', fontWeight: 600, textDecoration: 'none', border: '1px solid #f0f0f0', fontSize: 14 }}>
          📣 Marketing & Com
        </Link>
      </div>

      <CTAFinal
        title="Votre prochain événement, notre prochaine réussite"
        subtitle="Décrivez-nous votre projet et nous revenons vers vous avec une première approche sous 48h."
        primaryLabel="Demander un devis événementiel"
        primaryHref="/contact"
        secondaryLabel="Voir nos réalisations"
        secondaryHref="/realisations"
      />
    </div>
  );
}
