import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CTAFinal } from "../sections/CTAFinal";

const services = [
  { icon: "🔍", title: "Audit stratégique", desc: "Analyse complète de votre positionnement, vos forces, vos angles morts et les opportunités inexploitées. Un diagnostic honnête pour repartir sur des bases solides." },
  { icon: "🎯", title: "Positionnement & différenciation", desc: "Nous clarifions ce qui vous rend unique. Message, cible, proposition de valeur — tout est re-centré pour que vos prospects comprennent pourquoi choisir vous." },
  { icon: "🛣️", title: "Feuille de route stratégique", desc: "À partir du diagnostic, nous co-construisons votre plan d'action : priorités, jalons, ressources nécessaires. Une vision claire sur 3 à 12 mois." },
  { icon: "👤", title: "Coaching dirigeant", desc: "Accompagnement individuel des dirigeants et managers clés pour développer leur leadership, leur clarté décisionnelle et leur impact dans des situations complexes." },
  { icon: "🎓", title: "Formations & ateliers", desc: "Sessions de formation sur mesure : prise de décision stratégique, management de l'incertitude, communication de direction, structuration d'offre." },
  { icon: "🔄", title: "Suivi & ajustement", desc: "La stratégie n'est pas un document — c'est un système vivant. Nous assurons un suivi régulier pour ajuster le cap selon les résultats et l'évolution du contexte." },
];

const process = [
  { step: "01", title: "Premier échange", desc: "30 minutes pour comprendre votre contexte, vos enjeux et définir si et comment nous pouvons vous aider." },
  { step: "02", title: "Audit & diagnostic", desc: "1 à 2 semaines d'analyse approfondie de votre situation : marché, offre, organisation, communication." },
  { step: "03", title: "Restitution & plan", desc: "Présentation du diagnostic et co-construction du plan d'action avec vos équipes. Décisions claires, priorités définies." },
  { step: "04", title: "Exécution & suivi", desc: "Accompagnement dans l'exécution du plan, avec des points réguliers pour ajuster la trajectoire." },
];

export function ConseilPage() {
  return (
    <div>
      <style>{`
        .conseil-hero {
          padding: 140px 24px 80px;
          text-align: center;
          background: linear-gradient(135deg, rgba(249,115,22,0.05), rgba(168,85,247,0.05));
        }

        .conseil-hero-label {
          font-size: 13px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #f97316;
          display: block; margin-bottom: 20px;
        }

        .conseil-hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(32px, 5vw, 58px);
          font-weight: 800; color: #111; margin-bottom: 24px;
          max-width: 820px; margin-left: auto; margin-right: auto;
        }

        .conseil-hero-desc {
          font-size: 18px; color: #555;
          max-width: 680px; margin: 0 auto 40px; line-height: 1.7;
        }

        .conseil-hero-tags {
          display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;
        }

        .conseil-hero-tag {
          background: rgba(249,115,22,0.08); color: #f97316;
          border: 1px solid rgba(249,115,22,0.15);
          padding: 7px 18px; border-radius: 50px; font-size: 13px; font-weight: 600;
        }

        .conseil-section {
          padding: 80px 24px; max-width: 1100px; margin: 0 auto;
        }

        .section-label {
          font-size: 13px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #f97316;
          display: block; text-align: center; margin-bottom: 16px;
        }

        .section-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(24px, 3.5vw, 40px);
          font-weight: 800; color: #111; text-align: center; margin-bottom: 52px;
        }

        .conseil-services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .conseil-service-card {
          background: #fff; border: 1px solid #f0f0f0;
          border-radius: 18px; padding: 32px;
          transition: all 0.3s ease;
        }

        .conseil-service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.07);
          border-color: rgba(249,115,22,0.15);
        }

        .conseil-service-icon {
          font-size: 26px; width: 56px; height: 56px;
          background: rgba(249,115,22,0.08); border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }

        .conseil-service-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px; font-weight: 700; color: #111; margin-bottom: 10px;
        }

        .conseil-service-desc { font-size: 14px; color: #666; line-height: 1.65; }

        .conseil-process { padding: 80px 24px; background: #f9f9fb; }

        .conseil-process-inner { max-width: 900px; margin: 0 auto; }

        .conseil-steps {
          display: flex; flex-direction: column; gap: 0; position: relative;
        }

        .conseil-steps::before {
          content: ''; position: absolute;
          left: 24px; top: 0; bottom: 0; width: 2px;
          background: linear-gradient(to bottom, #f97316, #a855f7);
        }

        .conseil-step {
          display: flex; gap: 28px; align-items: flex-start; padding-bottom: 40px;
        }

        .conseil-step-num {
          width: 50px; flex-shrink: 0; display: flex;
          flex-direction: column; align-items: center;
        }

        .conseil-step-circle {
          width: 14px; height: 14px; border-radius: 50%;
          background: linear-gradient(135deg, #f97316, #a855f7);
          border: 3px solid white; box-shadow: 0 0 0 2px #f97316;
          z-index: 1; margin-top: 5px;
        }

        .conseil-step-n {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 1px; color: #f97316; margin-top: 8px; text-align: center;
        }

        .conseil-step-content { flex: 1; }

        .conseil-step-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 19px; font-weight: 700; color: #111; margin-bottom: 8px;
        }

        .conseil-step-desc { font-size: 15px; color: #555; line-height: 1.65; }

        .conseil-quote {
          padding: 80px 24px; background: #0b0b12; text-align: center;
        }

        .conseil-quote-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(20px, 3vw, 30px);
          font-weight: 700; color: #fff; line-height: 1.55;
          max-width: 780px; margin: 0 auto;
        }

        .conseil-quote-grd {
          background: linear-gradient(135deg, #f97316, #a855f7);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }

        .conseil-breadcrumb {
          display: flex; gap: 8px; align-items: center;
          font-size: 14px; color: #aaa;
          padding: 16px 24px 0;
          max-width: 1100px; margin: 0 auto;
        }

        .conseil-breadcrumb a { color: #aaa; text-decoration: none; transition: color 0.2s; }
        .conseil-breadcrumb a:hover { color: #f97316; }

        @media (max-width: 768px) {
          .conseil-steps::before { left: 20px; }
        }
      `}</style>

      {/* Breadcrumb */}
      <div style={{ paddingTop: 80 }}>
        <div className="conseil-breadcrumb">
          <Link to="/">Accueil</Link> /
          <Link to="/expertises">Expertises</Link> /
          <span style={{ color: '#f97316', fontWeight: 600 }}>Conseil stratégique</span>
        </div>
      </div>

      {/* Hero */}
      <header className="conseil-hero">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="conseil-hero-label">Expertise Conseil stratégique</span>
          <h1 className="conseil-hero-title">
            Structurez votre stratégie. Prenez de meilleures décisions.
          </h1>
          <p className="conseil-hero-desc">
            Nous aidons les entreprises à naviguer dans la complexité et à structurer leur cap stratégique. Audit, positionnement, accompagnement dirigeant — une approche rigoureuse et terrain.
          </p>
          <div className="conseil-hero-tags">
            <span className="conseil-hero-tag">Conseil stratégique entreprise</span>
            <span className="conseil-hero-tag">Stratégie marketing B2B</span>
            <span className="conseil-hero-tag">Coaching dirigeant</span>
          </div>
        </motion.div>
      </header>

      {/* Services */}
      <div className="conseil-section">
        <span className="section-label">Nos services</span>
        <h2 className="section-title">Un accompagnement complet de l'audit à l'exécution</h2>
        <div className="conseil-services-grid">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              className="conseil-service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <div className="conseil-service-icon">{s.icon}</div>
              <h3 className="conseil-service-title">{s.title}</h3>
              <p className="conseil-service-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process */}
      <section className="conseil-process">
        <div className="conseil-process-inner">
          <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>Notre approche</span>
          <h2 className="section-title">Comment nous travaillons avec vous</h2>
          <div className="conseil-steps">
            {process.map((p, idx) => (
              <motion.div
                key={idx}
                className="conseil-step"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.55 }}
              >
                <div className="conseil-step-num">
                  <div className="conseil-step-circle" />
                  <span className="conseil-step-n">{p.step}</span>
                </div>
                <div className="conseil-step-content">
                  <h3 className="conseil-step-title">{p.title}</h3>
                  <p className="conseil-step-desc">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <motion.section
        className="conseil-quote"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
      >
        <p className="conseil-quote-text">
          « Nous aidons les entreprises à{" "}
          <span className="conseil-quote-grd">structurer leur stratégie</span>
          {" "}et à prendre des décisions claires dans des environnements complexes. »
        </p>
      </motion.section>

      {/* Internal links */}
      <div style={{ padding: '48px 24px', maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/offres" style={{ padding: '12px 28px', borderRadius: 50, background: 'rgba(249,115,22,0.08)', color: '#f97316', fontWeight: 700, textDecoration: 'none', border: '1px solid rgba(249,115,22,0.15)', fontSize: 14 }}>
          📦 Voir nos offres →
        </Link>
        <Link to="/event" style={{ padding: '12px 28px', borderRadius: 50, background: '#f9f9fb', color: '#555', fontWeight: 600, textDecoration: 'none', border: '1px solid #f0f0f0', fontSize: 14 }}>
          🎭 Événementiel
        </Link>
        <Link to="/marketing" style={{ padding: '12px 28px', borderRadius: 50, background: '#f9f9fb', color: '#555', fontWeight: 600, textDecoration: 'none', border: '1px solid #f0f0f0', fontSize: 14 }}>
          📣 Marketing & Com
        </Link>
      </div>

      <CTAFinal
        title="Prêt à structurer votre stratégie ?"
        subtitle="Un premier échange de 30 minutes suffit pour identifier où nous pouvons créer de la valeur pour vous."
        primaryLabel="Demander un accompagnement"
        primaryHref="/contact"
        secondaryLabel="Voir nos réalisations"
        secondaryHref="/realisations"
      />
    </div>
  );
}
