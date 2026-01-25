import { motion } from "framer-motion";

export function PrismLight() {
    return (
        <section
            id="concept"
            className="prism-section-outer"
            style={{
                backgroundColor: '#FAFAFA',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                padding: '80px 24px'
            }}
        >
            <style>{`
                .prism-content-wrapper {
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .prism-logo-tagline {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .prism-logo-img {
                    max-width: 200px;
                    height: auto;
                    margin: 0 auto 20px;
                    display: block;
                }

                .prism-tagline-text {
                    font-family: 'Inter', sans-serif;
                    font-size: 18px;
                    font-weight: 500;
                    color: #555;
                    font-style: italic;
                }

                .prism-title {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: clamp(36px, 5vw, 52px);
                    font-weight: 700;
                    color: #111;
                    text-align: center;
                    margin-bottom: 40px;
                    line-height: 1.2;
                }

                .prism-title .text-primary {
                    color: #EC4899;
                }

                .prism-text-container {
                    display: flex;
                    flex-direction: column;
                    gap: 28px;
                    max-width: 850px;
                    margin: 0 auto 60px;
                }

                .prism-text {
                    font-family: 'Inter', sans-serif;
                    font-size: 18px;
                    line-height: 1.8;
                    color: #333;
                    text-align: center;
                }

                .prism-highlight {
                    font-weight: 700;
                    color: #EC4899;
                    font-size: 20px;
                }

                .transformation-flow {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 32px;
                    margin-top: 60px;
                    flex-wrap: wrap;
                }

                .flow-card {
                    width: 150px;
                    height: 150px;
                    background: rgba(236, 72, 153, 0.05);
                    border: 2px solid rgba(236, 72, 153, 0.2);
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 17px;
                    font-weight: 700;
                    color: #111;
                    text-align: center;
                    padding: 16px;
                    transition: all 0.4s ease;
                    cursor: default;
                }

                .flow-card:hover {
                    transform: translateY(-6px);
                    border-color: #EC4899;
                    box-shadow: 0 12px 30px rgba(236, 72, 153, 0.25);
                    background: rgba(236, 72, 153, 0.08);
                }

                .flow-arrow {
                    font-size: 32px;
                    color: #EC4899;
                    font-weight: 300;
                }

                @media (max-width: 768px) {
                    .transformation-flow {
                        flex-direction: column;
                        gap: 24px;
                    }
                    
                    .flow-arrow {
                        transform: rotate(90deg);
                    }

                    .flow-card {
                        width: 180px;
                        height: 180px;
                        font-size: 19px;
                    }
                }
            `}</style>

            <div className="prism-content-wrapper">
                {/* Logo + Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="prism-logo-tagline"
                >
                    <img src="/logo.png" alt="prismifie" className="prism-logo-img" />
                    <p className="prism-tagline-text">« Aidons-nous à façonner l'avenir »</p>
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="prism-title"
                >
                    Le Concept <span className="text-primary">Prism</span>
                </motion.h2>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="prism-text-container"
                >
                    <p className="prism-text">
                        Imaginez un faisceau de lumière brute : c'est votre idée. Puissante, mais diffuse.
                        Pour révéler tout son spectre et sa couleur, elle doit traverser un prisme.
                    </p>
                    <p className="prism-text">
                        <span className="prism-highlight">prismifie est ce prisme.</span>
                    </p>
                    <p className="prism-text">
                        Nous captons la complexité de votre vision, nous la structurons, et nous la projetons
                        avec une clarté absolue vers votre audience. Du chaos à la lumière, nous créons
                        l'alignement parfait entre ce que vous êtes et ce que le monde voit.
                    </p>
                </motion.div>

                {/* Transformation Flow */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="transformation-flow"
                >
                    <motion.div whileHover={{ scale: 1.05 }} className="flow-card">
                        Idées<br />floues
                    </motion.div>

                    <span className="flow-arrow">→</span>

                    <motion.div whileHover={{ scale: 1.05 }} className="flow-card">
                        Effets<br />prismifiés
                    </motion.div>

                    <span className="flow-arrow">→</span>

                    <motion.div whileHover={{ scale: 1.05 }} className="flow-card">
                        Spectre<br />clair
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
