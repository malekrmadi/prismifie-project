import { motion } from "framer-motion";
import { CTAFinal } from "../sections/CTAFinal";

const realisations = [
  {
    client: "TechVision SaaS",
    sector: "Logiciel B2B",
    expertise: "Marketing & Communication",
    expertiseColor: "#a855f7",
    icon: "💻",
    problem: "Startup SaaS avec un produit solide mais une communication quasi inexistante. Aucune présence sociale, pas de contenu, zéro génération de leads entrants.",
    solution: "Mise en place d'une stratégie éditoriale LinkedIn et d'un calendrier de contenu mensuel axé sur la valeur ajoutée produit. Création d'une banque de visuels professionnels et lancement d'une campagne d'acquisition ciblée.",
    result: "✓ +340% de visites sur le site en 3 mois · ✓ 12 leads qualifiés générés par mois · ✓ Notoriété secteur multipliée par 4",
    tags: ["LinkedIn", "Content Marketing", "Lead Gen"],
  },
  {
    client: "Groupe Meridian",
    sector: "Conseil en management",
    expertise: "Conseil stratégique",
    expertiseColor: "#f97316",
    icon: "🏢",
    problem: "Cabinet de conseil confronté à un repositionnement difficile suite à une fusion. Manque de clarté sur l'offre, confusion dans le message et perte de clients historiques.",
    solution: "Audit stratégique complet de l'offre et de la concurrence. Atelier de repositionnement avec les dirigeants. Redéfinition du discours de marque, création d'une nouvelle architecture d'offre claire et d'un plan de communication interne.",
    result: "✓ Positionnement clair en 6 semaines · ✓ Rétention des clients clés à 95% · ✓ 3 nouveaux contrats signés dans les 2 mois suivants",
    tags: ["Audit stratégique", "Repositionnement", "Architecture d'offre"],
  },
  {
    client: "Avenir Médical",
    sector: "Santé & Prévention",
    expertise: "Événementiel",
    expertiseColor: "#ff5fa2",
    icon: "🏥",
    problem: "Réseau d'établissements de santé souhaitant organiser son premier forum annuel de prévention avec 300+ participants. Aucune expérience événementielle en interne.",
    solution: "Prise en charge complète de A à Z : concept thématique, sélection et coordination de 12 prestataires, communication de l'événement, logistique jour J avec équipe dédiée de 8 personnes.",
    result: "✓ 340 participants effectifs (113% de l'objectif) · ✓ NPS événement de 86/100 · ✓ Couverture presse régionale obtenue",
    tags: ["Forum 340 participants", "Coordination prestataires", "Communication événement"],
  },
  {
    client: "Industria Pro",
    sector: "Industrie & Manufacturing",
    expertise: "Marketing & Communication",
    expertiseColor: "#a855f7",
    icon: "⚙️",
    problem: "PME industrielle de 150 salariés avec une image vieillissante et une difficulté à recruter de jeunes talents. Aucune présence digitale cohérente.",
    solution: "Refonte complète de la stratégie de marque employeur. Création de contenus coulisses authentiques, lancement d'un compte LinkedIn enterprise, campagne de recrutement ciblée et mise en place d'un processus de témoignages collaborateurs.",
    result: "✓ 48 candidatures spontanées en 2 mois (vs 5 auparavant) · ✓ 4 postes clés pourvus · ✓ Engagement LinkedIn x7",
    tags: ["Marque employeur", "Recrutement digital", "Social media"],
  },
];

export function RealisationsPage() {
  return (
    <div>
      <style>{`
        .real-hero {
          padding: 140px 24px 80px;
          text-align: center;
          background: linear-gradient(135deg, rgba(255,95,162,0.04), rgba(249,115,22,0.04));
        }

        .real-hero-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ff5fa2;
          display: block;
          margin-bottom: 20px;
        }

        .real-hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          color: #111;
          margin-bottom: 24px;
        }

        .real-hero-desc {
          font-size: 18px;
          color: #555;
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .real-cases {
          padding: 80px 24px;
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .real-case-card {
          background: #fff;
          border: 1px solid #f0f0f0;
          border-radius: 24px;
          padding: 44px;
          transition: all 0.3s ease;
        }

        .real-case-card:hover {
          box-shadow: 0 24px 60px rgba(0,0,0,0.07);
        }

        .real-case-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 24px;
        }

        .real-case-icon {
          font-size: 40px;
          width: 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          background: rgba(0,0,0,0.03);
          flex-shrink: 0;
        }

        .real-case-meta {
          flex: 1;
          padding-left: 16px;
        }

        .real-case-client {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: #111;
          margin-bottom: 4px;
        }

        .real-case-sector {
          font-size: 14px;
          color: #888;
        }

        .real-case-tag {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .real-case-body {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 24px;
        }

        .real-case-block {
          padding: 20px;
          border-radius: 14px;
        }

        .real-case-block-label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 10px;
          display: block;
        }

        .real-case-block-text {
          font-size: 14px;
          color: #555;
          line-height: 1.65;
        }

        .real-case-result {
          font-size: 14px;
          color: #111;
          line-height: 1.65;
          font-weight: 500;
        }

        .real-case-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .real-skill-tag {
          background: #f5f5f7;
          color: #555;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .real-case-body {
            grid-template-columns: 1fr;
          }
          .real-case-card {
            padding: 28px 20px;
          }
          .real-case-meta { padding-left: 12px; }
        }
      `}</style>

      <header className="real-hero">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="real-hero-label">Réalisations</span>
          <h1 className="real-hero-title">Des résultats concrets, pas des promesses</h1>
          <p className="real-hero-desc">
            Découvrez comment nous avons accompagné des entreprises B2B dans leurs enjeux réels  de la stratégie à l'exécution, avec des résultats mesurables.
          </p>
        </motion.div>
      </header>

      <div className="real-cases">
        {realisations.map((r, idx) => (
          <motion.div
            key={idx}
            className="real-case-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
          >
            <div className="real-case-header">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="real-case-icon">{r.icon}</div>
                <div className="real-case-meta">
                  <p className="real-case-client">{r.client}</p>
                  <p className="real-case-sector">{r.sector}</p>
                </div>
              </div>
              <span className="real-case-tag" style={{ background: `${r.expertiseColor}12`, color: r.expertiseColor }}>
                {r.expertise}
              </span>
            </div>

            <div className="real-case-body">
              <div className="real-case-block" style={{ background: 'rgba(255,95,162,0.04)' }}>
                <span className="real-case-block-label" style={{ color: '#ff5fa2' }}>🔴 Problème</span>
                <p className="real-case-block-text">{r.problem}</p>
              </div>
              <div className="real-case-block" style={{ background: 'rgba(249,115,22,0.04)' }}>
                <span className="real-case-block-label" style={{ color: '#f97316' }}>🔶 Solution</span>
                <p className="real-case-block-text">{r.solution}</p>
              </div>
              <div className="real-case-block" style={{ background: 'rgba(16,185,129,0.04)' }}>
                <span className="real-case-block-label" style={{ color: '#10b981' }}>✅ Résultats</span>
                <p className="real-case-result">{r.result}</p>
              </div>
            </div>

            <div className="real-case-tags">
              {r.tags.map((tag, i) => (
                <span key={i} className="real-skill-tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <CTAFinal
        title="Votre projet sera notre prochaine réalisation"
        subtitle="Parlez-nous de votre enjeu, et nous vous montrerons comment Prismifie peut créer un impact mesurable pour votre entreprise."
        primaryLabel="Démarrer un projet"
        primaryHref="/contact"
        secondaryLabel="Voir nos expertises"
        secondaryHref="/expertises"
      />
    </div>
  );
}
