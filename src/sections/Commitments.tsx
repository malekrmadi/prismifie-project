import { SectionWrapper } from "../components/ui/SectionWrapper";
import { Lightbulb, Palette, Shield } from "lucide-react";
import { motion } from "framer-motion";

export function Commitments() {
  const commitments = [
    {
      icon: <Lightbulb size={36} />,
      title: "Clarté",
      desc: "Nous structurons, simplifions et priorisons pour rendre chaque décision évidente."
    },
    {
      icon: <Palette size={36} />,
      title: "Créativité",
      desc: "Nous concevons des expériences qui marquent, sans jamais perdre le sens."
    },
    {
      icon: <Shield size={36} />,
      title: "Confiance",
      desc: "Nous avançons avec méthode, transparence et responsabilité."
    }
  ];

  return (
    <SectionWrapper>
      <style>{`
        .commitments-title {
          font-family: 'Hicloser', sans-serif;
          font-size: 42px;
          font-weight: 800;
          color: #1E1E2F; /* Texte foncé pour fond clair */
          text-align: center;
          margin-bottom: 60px;
        }

        .commitments-grid {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: nowrap; /* Toujours sur une ligne */
        }

        .commit-card {
          flex: 1 1 33%;
          min-width: 220px;
          background: #F9FAFB; /* Clair */
          padding: 32px 24px;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          text-align: center;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .commit-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
          background: #EDEFF3; /* léger contraste */
        }

        .commit-icon {
          color: #FF5FA2;
          margin-bottom: 12px;
        }

        .commit-card-title {
          font-size: 20px;
          font-weight: 700;
          color: #1E1E2F;
        }

        .commit-card-desc {
          font-size: 15px;
          color: #4B5563; /* gris foncé pour lisibilité */
        }

        @media (max-width: 1024px) {
          .commitments-grid {
            flex-wrap: wrap;
          }
          .commit-card {
            flex: 1 1 100%;
          }
        }
      `}</style>

      <h2 className="commitments-title">Nos valeurs</h2>

      <motion.div
        className="commitments-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {commitments.map((item, index) => (
          <motion.div
            key={index}
            className="commit-card"
            whileHover={{ y: -8, scale: 1.03 }}
          >
            <div className="commit-icon">{item.icon}</div>
            <h3 className="commit-card-title">{item.title}</h3>
            <p className="commit-card-desc">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
