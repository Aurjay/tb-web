import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const IndexPage = () => {
  const [expanded, setExpanded] = useState(null);
  const [resizedImageUrl, setResizedImageUrl] = useState(null);

  useEffect(() => {
    const resizeImage = async () => {
      const image = new Image();
      image.src = "/2.png";
      await image.decode();

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = image.width;
      canvas.height = image.height * 0.45;
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      const resizedImageURL = canvas.toDataURL();
      setResizedImageUrl(resizedImageURL);
    };

    resizeImage();
  }, []);

  const handleToggle = (index) => {
    setExpanded(index === expanded ? null : index);
  };

  return (
    <div
      style={{
        background: "radial-gradient(circle, #271f43, #000000)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
          fontSize: "48px",
          color: "white",
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: "48px", color: "#7c00ff" }}>AI-</span>
        <span
          style={{
            background: "linear-gradient(45deg, #7c00ff, #ff00b8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "48px",
          }}
        >
          ACTion
        </span>
        <br />
        <span style={{background:"linear-gradient(45deg,#7c00ff,#ff00b8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontSize:"28px"}}> by{"\n"}{"\u00A0"}<img src="/logo.png" alt="ACTion Logo" width={150} height={150} /></span>

      </h1>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.6 }}
        style={{
          marginBottom: "20px",
          background: "rgba(255, 255, 255, 0.13)",
          padding: "20px",
          borderRadius: "10px",
          width: "800px",
          maxWidth: "100%",
          cursor: "pointer",
          color: "white",
        }}
      >
        <p style={{ marginTop: "10px", fontSize: "18px" }}>
          {resizedImageUrl && (
            <img
              src={resizedImageUrl}
              alt="Image 1"
              style={{ width: "100%", objectFit: "cover" }}
            />
          )}
          <br />• Implementing{" "}
          <strong style={{ color: "#008fb3" }}>Responsible AI-Systems</strong>{" "}
          is not as straightforward as it may initially seem. Despite the
          existence of theoretical concepts and general principles, translating{" "}
          <strong style={{ color: "#008fb3" }}>Responsible AI</strong> into
          practice is a challenging endeavor.
          <br />
          <br />• Besides, AI is a diverse field, spanning multiple domains and
          use cases, which further adds to the complexity. As a result, many
          development teams tend to overlook the aspect of{" "}
          <strong style={{ color: "#008fb3" }}>Responsibility</strong> in their
          AI projects.
          <br />
          <br />• But with the increasing popularity of{" "}
          <strong style={{ color: "#008fb3" }}>Responsible Tech</strong> and
          upcoming legislations concerning the regulation of AI Systems like the{" "}
          <strong style={{ color: "#008fb3" }}>EU-AI-ACT</strong>, Responsible
          AI is no longer a choice but a compliance every AI-System Provider
          should follow.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.9 }}
        style={{
          padding: "40px",
          maxWidth: "800px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AnimatePresence>
          <motion.div
            key={0}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            style={{
              marginBottom: "20px",
              background: "rgba(255, 255, 255, 0.1)",
              padding: "20px",
              borderRadius: "10px",
              cursor: "pointer",
              color: "white",
            }}
            onClick={() => handleToggle(0)}
          >
            <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>
              • What is{" "}
              <strong style={{ color: "#008fb3" }}>Responsible AI</strong> ?
            </h2>
            <AnimatePresence>
              {expanded === 0 && (
                <motion.p
                  key="paragraph1"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  style={{ marginTop: "10px", fontSize: "18px" }}
                >
                  • <strong style={{ color: "#008fb3" }}>Responsible AI</strong>
                  , in professional terms related to compliance, refers to the
                  ethical and legal principles, guidelines, and practices that
                  govern the development, deployment, and use of artificial
                  intelligence (AI) systems.
                  <br />
                  <br />• It involves ensuring that AI technologies are designed
                  and implemented in a manner that respects legal requirements,
                  ethical considerations, and societal norms.{" "}
                  <a
                    href="https://www.accenture.com/nz-en/services/applied-intelligence/ai-ethics-governance"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#008fb3", textDecoration: "underline" }}
                  >
                    More info.
                  </a>
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            key={1}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            style={{
              marginBottom: "20px",
              background: "rgba(255, 255, 255, 0.1)",
              padding: "20px",
              borderRadius: "10px",
              cursor: "pointer",
              color: "white",
            }}
            onClick={() => handleToggle(1)}
          >
            <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>
              • What is the{" "}
              <strong style={{ color: "#008fb3" }}>EU-AI-ACT</strong> ?
            </h2>
            <AnimatePresence>
              {expanded === 1 && (
                <motion.p
                  key="paragraph2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  style={{ marginTop: "10px", fontSize: "18px" }}
                >
                  • The <strong style={{ color: "#008fb3" }}>AI Act</strong> is
                  a proposed regulation by the European Union that aims to
                  establish a legal framework for the development, deployment,
                  and use of AI systems in the EU.
                  <br />
                  <br />• EU are transparent, reliable, and safe, and that they
                  respect The proposed regulation seeks to ensure that AI
                  systems used in thefundamental rights and values.{" "}
                  <a
                    href="https://artificialintelligenceact.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#008fb3", textDecoration: "underline" }}
                  >
                    More info.
                  </a>
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            key={2}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            style={{
              marginBottom: "20px",
              background: "rgba(255, 255, 255, 0.1)",
              padding: "20px",
              borderRadius: "10px",
              cursor: "pointer",
              color: "white",
            }}
            onClick={() => handleToggle(2)}
          >
            <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>
              • What's been done so{" "}
              <strong style={{ color: "#008fb3" }}> far</strong> ?
            </h2>
            <AnimatePresence>
              {expanded === 2 && (
                <motion.p
                  key="paragraph3"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  style={{ marginTop: "10px", fontSize: "18px" }}
                >
                  • We did a literature review of the current draft of the
                  EU-AI-ACT and{" "}
                  <strong style={{ color: "#008fb3" }}>capAI </strong>conformity
                  assessment procedure for AI systems.
                  <br />
                  <br />• Based on acquired knowledge and internal feedbacks we
                  also have developed a Minimum Viable Product (MVP) of the tool
                  called

                  <strong style={{ color: "#008fb3" }}> Traceback.ai </strong>

                  which could potentially be used to implement EU-AI-ACT.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            key={3}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            style={{
              marginBottom: "20px",
              background: "rgba(255, 255, 255, 0.1)",
              padding: "20px",
              borderRadius: "10px",
              cursor: "pointer",
              color: "white",
            }}
            onClick={() => handleToggle(3)}
          >
            <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>
              • Sounds interesting? Could I join the
              <strong style={{ color: "#008fb3" }}> team</strong> ?
            </h2>
            <AnimatePresence>
              {expanded === 3 && (
                <motion.p
                  key="paragraph4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  style={{ marginTop: "10px", fontSize: "18px" }}
                >
                  Yes.
                  <br />
                  If you are looking to contribute to a project concerning the{" "}
                  <strong style={{ color: "#008fb3" }}>
                    Future of AI workflows
                  </strong>{" "}
                  for the next couple of months, feel free to send a mail to{" "}
                  <a
                    href="mailto:contact@ai-action.com"
                    style={{ color: "#008fb3", textDecoration: "underline" }}
                  >
                    contact@ai-action.com
                  </a>
                  . We are looking for people from different backgrounds who
                  could provide meaningful feedback and suggestions for the
                  tool.
                  <br />
                  <br />
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default IndexPage;
