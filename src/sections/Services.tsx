import { motion } from "framer-motion";
import { SectionWrapper } from "../components/ui/SectionWrapper";

const prestations = [
    {
        id: 1,
        title: "Consulting Stratégique",
        subtitle: "Diagnostic & Orientation",
        description: "Analyse approfondie de votre écosystème pour identifier les leviers de croissance et structurer une roadmap claire.",
        points: [
            "Audit & diagnostic",
            "Benchmark marché",
            "Roadmap stratégique"
        ],
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Stratégie & Branding",
        subtitle: "Identité & Positionnement",
        description: "Construction d’une identité forte et cohérente pour positionner votre marque avec justesse et impact.",
        points: [
            "Positionnement",
            "Identité visuelle",
            "Storytelling"
        ],
        image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Présence Digitale",
        subtitle: "Web & Visibilité",
        description: "Création d’une présence digitale performante et alignée avec votre image de marque.",
        points: [
            "Site web",
            "Contenu digital",
            "Stratégie visibilité"
        ],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
    }
];

export function Prestations() {
    return (
        <SectionWrapper id="prestations">
            <style>{`
                .prestations-wrapper {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 40px 24px 80px;
                }

                .prestations-header {
                    text-align: center;
                    margin-bottom: 64px;
                }

                .prestations-label {
                    font-size: 12px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #EC4899;
                    margin-bottom: 16px;
                }

                .prestations-title {
                    font-size: clamp(32px, 5vw, 48px);
                    font-weight: 800;
                    color: #111;
                    line-height: 1.2;
                    margin-bottom: 16px;
                }

                .prestations-subtitle {
                    font-size: 17px;
                    color: #555;
                    max-width: 640px;
                    margin: 0 auto;
                }

                .prestations-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 32px;
                }

                .prestation-card {
                    background: #fff;
                    border: 1px solid #eee;
                    border-radius: 20px;
                    overflow: hidden;
                    transition: all 0.4s ease;
                }

                .prestation-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                }

                .prestation-image-wrapper {
                    height: 200px;
                    overflow: hidden;
                }

                .prestation-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                }

                .prestation-card:hover .prestation-image {
                    transform: scale(1.05);
                }

                .prestation-content {
                    padding: 24px;
                }

                .prestation-subtitle-text {
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    color: #EC4899;
                    margin-bottom: 6px;
                }

                .prestation-title {
                    font-size: 20px;
                    font-weight: 700;
                    color: #111;
                    margin-bottom: 12px;
                }

                .prestation-description {
                    font-size: 15px;
                    color: #555;
                    line-height: 1.6;
                    margin-bottom: 16px;
                }

                .prestation-points {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .prestation-point {
                    font-size: 14px;
                    color: #666;
                    position: relative;
                    padding-left: 18px;
                }

                .prestation-point::before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: #EC4899;
                    font-size: 18px;
                    line-height: 1;
                }
            `}</style>

            <div className="prestations-wrapper">
                {/* Header */}
                <motion.div
                    className="prestations-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="prestations-label">Nos prestations</div>
                    <h2 className="prestations-title">
                        Trois piliers pour structurer votre croissance
                    </h2>
                    <p className="prestations-subtitle">
                        Stratégie, identité et présence digitale : nous clarifions votre vision et la transformons en actions concrètes.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="prestations-grid">
                    {prestations.map((p, index) => (
                        <motion.div
                            key={p.id}
                            className="prestation-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <div className="prestation-image-wrapper">
                                <img src={p.image} alt={p.title} className="prestation-image" />
                            </div>
                            <div className="prestation-content">
                                <div className="prestation-subtitle-text">{p.subtitle}</div>
                                <h3 className="prestation-title">{p.title}</h3>
                                <p className="prestation-description">{p.description}</p>
                                <div className="prestation-points">
                                    {p.points.map((point, i) => (
                                        <div key={i} className="prestation-point">{point}</div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
