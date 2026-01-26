import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      style={{
        backgroundImage: "url(/prism.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "70vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "100px 24px",
        position: "relative",
      }}
    >
      {/* ===== CSS LOCAL ===== */}
      <style>{`
        .about-new-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(40px, 6vw, 64px);
          font-weight: 700;
          color: #FFFFFF;
          text-align: center;
          line-height: 1.2;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          max-width: 900px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .about-new-title {
            font-size: clamp(32px, 8vw, 48px);
          }
        }
      `}</style>

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="about-new-title"
      >
        Quand vos idées prennent lumière
      </motion.h2>
    </section>
  );
}
