import { motion } from "framer-motion";

const services = [
  {
    icon: "🧠",
    title: "Stratégie & Positionnement",
    desc: "Nous définissons votre cap stratégique : positionnement marché, différenciation concurrentielle et feuille de route claire pour atteindre vos objectifs.",
    color: "#ff5fa2",
  },
  {
    icon: "📣",
    title: "Marketing & Contenu",
    desc: "Stratégie éditoriale, production de contenu, réseaux sociaux et campagnes d'acquisition. Nous construisons votre visibilité de manière cohérente et mesurable.",
    color: "#f97316",
  },
  {
    icon: "💻",
    title: "Création Web & Digital",
    desc: "Sites web professionnels, landing pages optimisées et expériences digitales sur mesure qui convertissent et reflètent votre image de marque.",
    color: "#a855f7",
  },
  {
    icon: "🤝",
    title: "CRM & Relation Client",
    desc: "Mise en place et optimisation de vos outils CRM pour structurer votre pipeline commercial et fidéliser vos clients sur le long terme.",
    color: "#06b6d4",
  },
  {
    icon: "🤖",
    title: "IA & Automatisation",
    desc: "Intégration de solutions IA et d'automatisation pour gagner en productivité, personnaliser vos communications et accélérer votre croissance.",
    color: "#10b981",
  },
  {
    icon: "🎭",
    title: "Événementiel B2B",
    desc: "Organisation d'événements professionnels impactants : lancements, séminaires, soirées de marque. De la conception à la coordination le jour J.",
    color: "#ec4899",
  },
];

export function ServicesDetails() {
  return (
    <section id="services" style={{ padding: "100px 24px", background: "#f9f9fb" }}>
      <style>{`
        .services-details-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ff5fa2;
          display: block;
          text-align: center;
          margin-bottom: 16px;
        }

        .services-details-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(26px, 4vw, 42px);
          font-weight: 800;
          color: #111;
          text-align: center;
          margin-bottom: 16px;
        }

        .services-details-desc {
          font-size: 17px;
          color: #666;
          text-align: center;
          max-width: 560px;
          margin: 0 auto 64px;
          line-height: 1.65;
        }

        .services-details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .service-detail-card {
          background: white;
          border-radius: 18px;
          padding: 32px;
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
        }

        .service-detail-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.07);
        }

        .service-detail-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          margin-bottom: 20px;
        }

        .service-detail-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #111;
          margin-bottom: 12px;
        }

        .service-detail-desc {
          font-size: 14px;
          color: #666;
          line-height: 1.7;
        }
      `}</style>

      <span className="services-details-label">Ce que nous faisons</span>
      <h2 className="services-details-title">Concrètement, nous agissons sur 6 leviers</h2>
      <p className="services-details-desc">
        Une approche intégrée qui couvre l'ensemble de votre chaîne de valeur — de la stratégie à l'exécution.
      </p>

      <div className="services-details-grid">
        {services.map((s, idx) => (
          <motion.div
            key={idx}
            className="service-detail-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
          >
            <div className="service-detail-icon" style={{ background: `${s.color}12` }}>
              {s.icon}
            </div>
            <h3 className="service-detail-title">{s.title}</h3>
            <p className="service-detail-desc">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
