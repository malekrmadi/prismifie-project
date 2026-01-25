import { useState } from "react";
import { SectionWrapper } from "../components/ui/SectionWrapper";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Qu’est-ce qui différencie Prismify des autres agences ?",
        answer:
            "Notre approche combine clarté stratégique et innovation créative. Nous ne nous contentons pas d’exécuter : nous transformons. Chaque projet passe par notre méthodologie Prism afin de produire des résultats clairs, mesurables et durables."
    },
    {
        question: "Combien de temps dure un projet en général ?",
        answer:
            "La durée dépend de l’ampleur et de la complexité du projet. Une mission de branding dure en moyenne entre 6 et 8 semaines, tandis qu’un accompagnement marketing global peut s’étendre sur plusieurs mois."
    },
    {
        question: "Travaillez-vous avec des startups ou des entreprises établies ?",
        answer:
            "Nous accompagnons aussi bien des startups ambitieuses que des entreprises établies. Notre méthodologie s’adapte à votre niveau de maturité, vos objectifs et votre budget."
    },
    {
        question: "Proposez-vous un accompagnement sur le long terme ?",
        answer:
            "Oui. La majorité de nos clients poursuivent la collaboration avec un suivi stratégique, de la performance et de l’évolution produit sur le long terme."
    },
    {
        question: "Comment mesurez-vous le succès d’un projet ?",
        answer:
            "Nous définissons dès le départ des indicateurs clairs : notoriété, engagement, conversions et ROI. Vous recevez des reportings réguliers et nous ajustons la stratégie en continu."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <SectionWrapper>
            <>
                {/* ===== CSS LOCAL FAQ ===== */}
                <style>{`
          .faq-container {
            max-width: 900px;
            margin: 0 auto;
          }

          .faq-title {
            text-align: center;
            font-size: 32px;
            font-weight: 500;
            margin-bottom: 48px;
            color: var(--foreground);
          }

          .faq-item {
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }

          .faq-button {
            width: 100%;
            padding: 24px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: transparent;
            border: none;
            cursor: pointer;
            text-align: left;
          }

          .faq-question {
            font-size: 16px;
            color: var(--foreground);
            font-weight: 500;
            max-width: 85%;
          }

          .faq-icon-plus,
          .faq-icon-minus {
            color: var(--primary);
            flex-shrink: 0;
          }

          .faq-answer {
            padding-bottom: 24px;
            font-size: 14px;
            line-height: 1.8;
            color: var(--foreground);
            opacity: 0.7;
            max-width: 760px;
          }

          .faq-item:hover {
            background: linear-gradient(
              90deg,
              rgba(255, 95, 162, 0.04),
              rgba(123, 92, 255, 0.02)
            );
          }

          @media (max-width: 768px) {
            .faq-title {
              font-size: 26px;
            }

            .faq-question {
              max-width: 100%;
              padding-right: 12px;
            }
          }
        `}</style>

                {/* ===== FAQ CONTENT ===== */}
                <div className="faq-container" id="faq">
                    <h2 className="faq-title">Questions fréquentes</h2>

                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={index} className="faq-item">
                                <button
                                    className="faq-button"
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                >
                                    <span className="faq-question">{faq.question}</span>
                                    {isOpen ? (
                                        <Minus className="faq-icon-minus" size={18} />
                                    ) : (
                                        <Plus className="faq-icon-plus" size={18} />
                                    )}
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeOut" }}
                                        >
                                            <p className="faq-answer">{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </>
        </SectionWrapper>
    );
}
