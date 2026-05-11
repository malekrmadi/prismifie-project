import { motion } from "framer-motion";

const differentiators = [
  {
    number: "01",
    title: "Approche terrain",
    desc: "Nous ne restons pas dans la théorie. Chaque recommandation est ancrée dans la réalité opérationnelle de votre secteur. Nous construisons avec vous, pas pour vous.",
    icon: "🏗️",
  },
  {
    number: "02",
    title: "Expertise B2B",
    desc: "Spécialisés dans les environnements B2B complexes, nous comprenons les cycles de vente longs, les parties prenantes multiples et les enjeux de crédibilité.",
    icon: "🤝",
  },
  {
    number: "03",
    title: "Résultats mesurables",
    desc: "Chaque action est suivie d'indicateurs clairs. Pas de marketing pour faire joli  nous construisons des systèmes de croissance mesurables et durables.",
    icon: "📊",
  },
  {
    number: "04",
    title: "Agilité & réactivité",
    desc: "Nous nous adaptons rapidement aux changements de contexte. Notre structure légère garantit une proximité, une flexibilité et des délais d'exécution courts.",
    icon: "⚡",
  },
];

export function Differenciation() {
  return (
    <section style={{ padding: "100px 24px", background: "#0b0b12" }}>
      <style>{`
        .diff-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ff5fa2;
          display: block;
          text-align: center;
          margin-bottom: 16px;
        }

        .diff-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(26px, 4vw, 42px);
          font-weight: 800;
          color: #fff;
          text-align: center;
          margin-bottom: 16px;
        }

        .diff-subtitle {
          font-size: 17px;
          color: rgba(255,255,255,0.5);
          text-align: center;
          max-width: 520px;
          margin: 0 auto 64px;
          line-height: 1.65;
        }

        .diff-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .diff-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          padding: 36px 28px;
          transition: all 0.3s ease;
        }

        .diff-card:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255, 95, 162, 0.2);
          transform: translateY(-6px);
        }

        .diff-number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 48px;
          font-weight: 800;
          color: rgba(255,255,255,0.06);
          line-height: 1;
          margin-bottom: 12px;
        }

        .diff-icon {
          font-size: 28px;
          margin-bottom: 16px;
          display: block;
        }

        .diff-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 19px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
        }

        .diff-card-desc {
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
        }

        .diff-quote {
          text-align: center;
          margin-top: 72px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 72px;
        }

        .diff-quote-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(18px, 2.5vw, 26px);
          font-weight: 700;
          color: #fff;
          line-height: 1.5;
          font-style: italic;
        }

        .diff-quote-text .highlight {
          background: linear-gradient(135deg, #ff5fa2, #f97316);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>

      <span className="diff-label">Pourquoi Prismifie ?</span>
      <h2 className="diff-title">Ce qui nous distingue</h2>
      <p className="diff-subtitle">
        Notre approche combine rigueur stratégique et exécution terrain pour des résultats durables.
      </p>

      <div className="diff-grid">
        {differentiators.map((d, idx) => (
          <motion.div
            key={idx}
            className="diff-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.12, duration: 0.55 }}
          >
            <div className="diff-number">{d.number}</div>
            <span className="diff-icon">{d.icon}</span>
            <h3 className="diff-card-title">{d.title}</h3>
            <p className="diff-card-desc">{d.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="diff-quote"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="diff-quote-text">
          « Nous ne faisons pas du marketing pour faire joli. Nous construisons des{" "}
          <span className="highlight">systèmes de croissance mesurables</span> et durables. »
        </p>
      </motion.div>
    </section>
  );
}
