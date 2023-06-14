import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import App from "../../public/image_export_component";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const IndexPage = () => {
  const [expanded, setExpanded] = useState(null);
  const [resizedImageUrl, setResizedImageUrl] = useState(null);
  const [isPhoneScreen, setIsPhoneScreen] = useState(false);

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

    const handleResize = () => {
      setIsPhoneScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = (index) => {
    setExpanded(index === expanded ? null : index);
  };

  const handleButtonClick = () => {
    window.open("https://tracebackai-latest.vercel.app/", "_blank");
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
        <span style={{ fontSize: "48px", color: "#7c00ff" }}> AI-</span>
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
        <span
          style={{
            background: "linear-gradient(45deg,#7c00ff,#ff00b8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "28px",
          }}
        >
          {" "}
          by{"\n"}
          {"\u00A0"}
          <a
            href="https://www.responsibletechhub.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/logo.png" alt="ACTion Logo" width={150} height={150} />
          </a>{" "}
        </span>
      </h1>
      {isPhoneScreen ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button
            style={{
              marginBottom: "20px",
              padding: "15px",
              background: "#7c00ff",
              border: "none",
              borderRadius: "10px",
              color: "white",
              fontSize: "26px",
              cursor: "pointer",
            }}
            title="Opens Traceback.ai Tool"
            onClick={handleButtonClick}
          >
            Traceback.ai
          </button>
        </div>
      ) : (
        <button
          style={{
            position: "absolute",
            top: "60px",
            right: "90px",
            padding: "15px",
            background: "#7c00ff",
            border: "none",
            borderRadius: "10px",
            color: "white",
            fontSize: "26px",
            cursor: "pointer",
          }}
          title="Opens Traceback.ai Tool"
          onClick={handleButtonClick}
        >
          Traceback.ai
        </button>
      )}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.6 }}
        style={{
          marginBottom: "20px",
          background: "rgba(255, 255, 255, 0.08)",
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
          <br />• Besides, Artificial Intelligence is a diverse field, spanning
          multiple domains and use cases, which further adds to the complexity.
          As the result, many development teams tend to overlook the aspect of{" "}
          <strong style={{ color: "#008fb3" }}>Responsibility</strong> in their
          AI projects.
          <br />
          <br />• But with the increasing popularity of{" "}
          <strong style={{ color: "#008fb3" }}>Responsible Tech</strong> and
          upcoming legislations concerning the{" "}
          <strong style={{ color: "#008fb3" }}>
            regulation of AI-Systems like the EU-AI-ACT
          </strong>
          , Responsible AI is no longer a choice but a compliance every{" "}
          <strong style={{ color: "#008fb3" }}> AI-System Provider </strong>
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
            <div
              style={{
                position: "relative",
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "20px",
                  transform: "translateY(-50%)",
                }}
              >
                <MdKeyboardArrowDown
                  size={25}
                  color={expanded === 0 ? "#008fb3" : "white"}
                />
              </div>
            </div>

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
            <div
              style={{
                position: "relative",
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "20px",
                  transform: "translateY(-50%)",
                }}
              >
                <MdKeyboardArrowDown
                  size={25}
                  color={expanded === 1 ? "#008fb3" : "white"}
                />
              </div>
            </div>
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
                  and use of AI-systems in the EU.
                  <br />
                  <br />• The proposed regulation seeks to ensure that AI
                  systems used in the EU are transparent, reliable, and safe,
                  and that they respect fundamental rights and values.{" "}
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
              • What is the aim of the{" "}
              <strong style={{ color: "#008fb3" }}>AI-ACTion Project</strong> ?
            </h2>
            <div
              style={{
                position: "relative",
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "20px",
                  transform: "translateY(-50%)",
                }}
              >
                <MdKeyboardArrowDown
                  size={25}
                  color={expanded === 2 ? "#008fb3" : "white"}
                />
              </div>
            </div>
            <AnimatePresence>
              {expanded === 2 && (
                <motion.p
                  key="paragraph3"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  style={{ marginTop: "10px", fontSize: "18px" }}
                >
                  • The AI Action Project aims to use{" "}
                  <strong style={{ color: "#008fb3" }}>
                    Generative AI and Natural Language Processing
                  </strong>{" "}
                  to implement Responsible-AI principles in AI-Systems through
                  compliance with the EU-AI-ACT.
                  <br />
                  <br />• The tool aims to provide{" "}
                  <strong style={{ color: "#008fb3" }}>
                    project-specific recommendations
                  </strong>{" "}
                  in natural language, through which the AI-System Providers can
                  build compliant AI-Systems.
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
              • What's been done so far with the{" "}
              <strong style={{ color: "#008fb3" }}>AI-ACTion Project</strong> ?
            </h2>
            <div
              style={{
                position: "relative",
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "20px",
                  transform: "translateY(-50%)",
                }}
              >
                <MdKeyboardArrowDown
                  size={25}
                  color={expanded === 3 ? "#008fb3" : "white"}
                />
              </div>
            </div>
            <AnimatePresence>
              {expanded === 3 && (
                <motion.p
                  key="paragraph4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  style={{ marginTop: "10px", fontSize: "18px" }}
                >
                  • We did a literature review of the current draft of the
                  EU-AI-ACT and{" "}
                  <strong style={{ color: "#008fb3" }}>capAI</strong> conformity
                  assessment procedure for AI-Systems.
                  <br />
                  <br />• Based on acquired knowledge and internal feedback, we
                  have also developed a Minimum Viable Product (MVP) of the tool
                  called{" "}
                  <strong style={{ color: "#008fb3" }}>Traceback.ai</strong>,
                  which could potentially be used to implement EU-AI-ACT.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            key={4}
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
            onClick={() => handleToggle(4)}
          >
            <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>
              • Sounds interesting? Could I join the
              <strong style={{ color: "#008fb3" }}> team</strong> ?
            </h2>
            <div
              style={{
                position: "relative",
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "20px",
                  transform: "translateY(-50%)",
                }}
              >
                <MdKeyboardArrowDown
                  size={25}
                  color={expanded === 4 ? "#008fb3" : "white"}
                />
              </div>
            </div>
            <AnimatePresence>
              {expanded === 4 && (
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
                    Future of AI-Workflows
                  </strong>{" "}
                  feel free to send a mail to{" "}
                  <a
                    href="mailto:rajgopal@responsibletechhub.com"
                    style={{ color: "#008fb3", textDecoration: "underline" }}
                  >
                    rajgopal@responsibletechhub.com
                  </a>
                  <br />
                  We are looking for people from different backgrounds who could
                  provide meaningful feedback and suggestions for the tool while
                  learning more about the AI-ACT and its implemention.
                  <br />
                  <br />
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
        <div
          style={{
            background: "radial-gradient(circle, #271f43, #000000)",
            minHeight: "50vh",
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
              marginBottom: "20px",
              fontSize: "32px",
              fontWeight: "bold",
              color: "#808080",
              textAlign: "center",
            }}
          >
            Team
          </h1>
          <motion.div
            style={{ maxWidth: "800px", width: "100%", position: "relative" }}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <App />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default IndexPage;
