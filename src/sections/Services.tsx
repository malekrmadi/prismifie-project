import { motion } from "framer-motion";
import { SectionWrapper } from "../components/ui/SectionWrapper";

const services = [
    {
        title: "Stratégie & Consulting",
        desc: "Nous définissons votre trajectoire. Audit, positionnement de marque et roadmap digitale pour aligner votre vision avec vos objectifs business.",
        icon: "📊",
    },
    {
        title: "Identité de Marque",
        desc: "Nous créons votre visage. Branding, storytelling et direction artistique pour une marque qui ne passe pas inaperçue.",
        icon: "✨",
    },
    {
        title: "Design & Expérience",
        desc: "Nous façonnons l'interaction. UI/UX Design, sites web immersifs et interfaces produits pensés pour l'humain.",
        icon: "🎨",
    },
    {
        title: "Développement & Tech",
        desc: "Nous construisons le moteur. Sites performants, applications robustes et stack technique moderne pour durer.",
        icon: "⚡",
    },
];

export function Services() {
    return (
        <SectionWrapper id="services">
            <>
                <style>{`
          .services-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 80px 24px;
          }

          .services-header {
            text-align: center;
            margin-bottom: 72px;
          }

          .services-label {
            display: inline-block;
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #FF5FA2;
            margin-bottom: 16px;
            position: relative;
          }

          .services-label::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 2px;
            background: linear-gradient(90deg, #FF5FA2, #7B5CFF);
            border-radius: 2px;
          }

          .services-title {
            font-size: clamp(32px, 5vw, 48px);
            font-weight: 700;
            color: #111;
            line-height: 1.2;
            max-width: 800px;
            margin: 0 auto;
          }

          .services-title .gradient-text {
            background: linear-gradient(135deg, #FF5FA2, #7B5CFF);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 32px;
          }

          .service-card {
            position: relative;
            background: #fff;
            border-radius: 20px;
            padding: 40px 32px;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(123, 92, 255, 0.1);
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
          }

          .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(255, 95, 162, 0.08), rgba(123, 92, 255, 0.08));
            opacity: 0;
            transition: opacity 0.4s ease;
            pointer-events: none;
          }

          .service-card:hover::before {
            opacity: 1;
          }

          .service-card::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 0;
            background: linear-gradient(180deg, #FF5FA2, #7B5CFF);
            transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .service-card:hover::after {
            height: 100%;
          }

          .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 40px rgba(255, 95, 162, 0.2);
            border-color: rgba(255, 95, 162, 0.3);
          }

          .service-icon {
            font-size: 48px;
            margin-bottom: 24px;
            display: inline-block;
            filter: grayscale(0.3);
            transition: all 0.4s ease;
          }

          .service-card:hover .service-icon {
            filter: grayscale(0);
            transform: scale(1.1) rotate(5deg);
          }

          .service-title {
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 16px;
            color: #111;
            transition: color 0.3s ease;
            position: relative;
            z-index: 1;
          }

          .service-card:hover .service-title {
            color: #FF5FA2;
          }

          .service-desc {
            font-size: 15px;
            line-height: 1.7;
            color: #CBD5F5;
            position: relative;
            z-index: 1;
          }

          .service-card:hover .service-desc {
            color: #555;
          }

          .service-arrow {
            position: absolute;
            bottom: 24px;
            right: 24px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: linear-gradient(135deg, #FF5FA2, #7B5CFF);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transform: translate(10px, 10px);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .service-card:hover .service-arrow {
            opacity: 1;
            transform: translate(0, 0);
          }

          .service-arrow::after {
            content: '→';
            color: white;
            font-size: 16px;
            font-weight: bold;
          }

          @media (max-width: 768px) {
            .services-container {
              padding: 60px 20px;
            }

            .services-header {
              margin-bottom: 48px;
            }

            .services-grid {
              gap: 24px;
            }

            .service-card {
              padding: 32px 24px;
            }

            .service-icon {
              font-size: 40px;
            }
          }
        `}</style>

                <div className="services-container">
                    <div className="services-header">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="services-label">Nos Services</span>
                            <h2 className="services-title">
                                Notre expertise au service de votre{" "}
                                <span className="gradient-text">croissance</span>
                            </h2>
                        </motion.div>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: [0.4, 0, 0.2, 1]
                                }}
                            >
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-desc">{service.desc}</p>
                                <div className="service-arrow"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </>
        </SectionWrapper>
    );
}