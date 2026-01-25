import { SectionWrapper } from "../components/ui/SectionWrapper";
import { motion } from "framer-motion";

export function PrismLight() {
    return (
        <section
            id="concept"
            className="prism-section-outer"
            style={{
                backgroundColor: 'var(--surface)', // Light gray theme color
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <div className="absolute inset-0 bg-white/80" /> {/* Overlay to ensure text readability if needed */}
            <SectionWrapper>
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="prism-title">
                            Le Concept <span className="text-primary">Prism</span>
                        </h2>

                        <div className="flex flex-col gap-6 items-center">
                            <p className="prism-text">
                                Imaginez un faisceau de lumière brute : c'est votre idée. Puissante, mais diffuse.
                                Pour révéler tout son spectre et sa couleur, elle doit traverser un prisme.
                            </p>
                            <p className="prism-text">
                                <span className="prism-highlight">Prismify est ce prisme.</span>
                            </p>
                            <p className="prism-text">
                                Nous captons la complexité de votre vision, nous la structurons, et nous la projetons
                                avec une clarté absolue vers votre audience. Du chaos à la lumière, nous créons
                                l'alignement parfait entre ce que vous êtes et ce que le monde voit.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>
        </section>
    );
}
