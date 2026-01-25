import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      style={{
        background: "url(/prismifie-backgound_light.png) center/cover no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 24px",
        position: "relative",
      }}
    >
      {/* ===== CSS LOCAL ===== */}
      <style>{`
        .about-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(40px, 6vw, 58px);
          font-weight: 800;
          color: #fff;
          text-align: center;
          line-height: 1.15;
          text-shadow: 0 4px 20px rgba(0,0,0,0.3);
          margin-bottom: 40px;
          max-width: 900px;
        }

        .about-text {
          font-family: 'Inter', sans-serif;
          font-size: clamp(20px, 3vw, 26px);
          font-weight: 600;
          color: #fff;
          text-align: center;
          max-width: 850px;
          line-height: 1.6;
          text-shadow: 0 2px 15px rgba(0,0,0,0.25);
          padding: 0 20px;
          transition: all 0.4s ease;
        }

        .about-text:hover {
          transform: scale(1.02);
          text-shadow: 0 4px 25px rgba(255,255,255,0.3);
        }

        @media (max-width: 768px) {
          .about-title {
            font-size: 36px;
          }
          .about-text {
            font-size: 20px;
          }
        }
      `}</style>

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="about-title"
      >
        Transformer vos idées en un <br />
        spectre de possibilités
      </motion.h2>

      {/* TEXT */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="about-text"
      >
        Chez prismifie, nous transformons chaque message en un spectre de possibilités révélant toute la palette de votre communication.
      </motion.p>
    </section>
  );
}
