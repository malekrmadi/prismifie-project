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
        justifyContent: "space-between",
        padding: "60px 24px",
        position: "relative",
      }}
    >
      {/* ===== CSS LOCAL ===== */}
      <style>{`
        .about-title {
          font-family: 'Hicloser', sans-serif;
          font-size: 52px;
          font-weight: 800;
          color: #fff;
          text-align: center;
          line-height: 1.1;
          text-shadow: 0 0 20px rgba(255,255,255,0.2);
          margin-top: 20px;
        }

        .about-container-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }

        .transformation-line {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .step-card {
          width: 130px;
          height: 130px;
          background: rgba(255,255,255,0.05);
          border: 2px solid rgba(255,255,255,0.15);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          text-align: center;
          padding: 12px;
          cursor: default;
          transition: all 0.4s ease;
          box-shadow: 0 0 10px rgba(255,255,255,0.05);
        }

        .step-card:hover {
          transform: scale(1.05);
          border-color: #ff5fa2;
          box-shadow: 0 0 25px rgba(255,95,162,0.3);
        }

        .step-arrow {
          font-size: 28px;
          color: rgba(255,255,255,0.4);
          align-self: center;
        }

        .about-text {
          font-family: 'Inter', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          text-align: center;
          max-width: 750px;
          line-height: 1.5;
          text-shadow: 0 0 15px rgba(255,255,255,0.2);
        }

        @media (max-width: 768px) {
          .transformation-line {
            flex-direction: column;
            gap: 24px;
          }
          .step-arrow {
            transform: rotate(90deg);
          }
          .step-card {
            width: 160px;
            height: 160px;
            font-size: 18px;
          }
        }
      `}</style>

      {/* TOP TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="about-title"
      >
        Transformer vos idées en un <br />
        spectre de possibilités
      </motion.h2>

      {/* BOTTOM CONTAINER */}
      <div className="about-container-bottom">
        {/* TRANSFORMATION LINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="transformation-line"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="step-card">
            Idées<br />floues
          </motion.div>

          <span className="step-arrow">→</span>

          <motion.div whileHover={{ scale: 1.05 }} className="step-card">
            Effets<br />prismifiés
          </motion.div>

          <span className="step-arrow">→</span>

          <motion.div whileHover={{ scale: 1.05 }} className="step-card">
            Spectre<br />clair
          </motion.div>
        </motion.div>

        {/* BOTTOM TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="about-text"
        >
          Chez Prismify, nous transformons chaque message en un spectre de possibilités révélant toute la palette de votre communication.
        </motion.p>
      </div>
    </section>
  );
}
