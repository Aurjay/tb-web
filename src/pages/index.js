import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const IndexPage = () => {
  const [expanded, setExpanded] = useState(null);

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
        <span style={{ fontSize: "48px" }}>AI-</span>
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
      </h1>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.6 }}
        style={{
          marginBottom: "20px",
          background: "rgba(255, 255, 255, 0.1)",
          padding: "20px",
          borderRadius: "10px",
          width: "800px",
          maxWidth: "100%",
          cursor: "pointer",
          color: "white",
        }}
      >
        <p style={{ marginTop: "10px", fontSize: "18px" }}>
          Implementing{" "}
          <span style={{ fontWeight: "bold" }}>Responsible AI-Systems</span> is
          not as straightforward as it may initially seem. Despite the existence
          of theoretical concepts and general principles, translating{" "}
          <span style={{ fontWeight: "bold" }}>Responsible AI</span> into
          practice is a challenging endeavor. Besides, AI is a diverse field,
          spanning multiple domains and use cases, which further adds to the
          complexity. As a result, many development teams tend to overlook the
          aspect of
          <span style={{ fontWeight: "bold" }}> Responsibility</span> in their
          AI projects. But with the increasing popularity of{" "}
          <span style={{ fontWeight: "bold" }}>Responsible Tech</span> and
          upcoming legislations concerning the regulation of AI Systems like the{" "}
          <span style={{ fontWeight: "bold" }}>EU-AI-ACT</span>, Responsible AI
          is no longer a choice but a compliance every AI-System Provider should
          follow.
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
              What is <span style={{ fontWeight: "bold" }}>Responsible AI</span>
              ?
            </h2>
            {expanded === 0 && (
              <p style={{ marginTop: "10px", fontSize: "18px" }}>
                <span style={{ fontWeight: "bold" }}>Responsible AI</span>, in
                professional terms related to compliance, refers to the ethical
                and legal principles, guidelines, and practices that govern the
                development, deployment, and use of artificial intelligence (AI)
                systems. It involves ensuring that AI technologies are designed
                and implemented in a manner that respects legal requirements,
                ethical considerations, and societal norms. More info.
              </p>
            )}
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
              What is the <span style={{ fontWeight: "bold" }}>EU-AI-ACT</span>?
            </h2>
            {expanded === 1 && (
              <p style={{ marginTop: "10px", fontSize: "18px" }}>
                The <span style={{ fontWeight: "bold" }}>AI Act</span> is a
                proposed regulation by the European Union that aims to establish
                a legal framework for the development, deployment, and use of AI
                systems in the EU. The proposed regulation seeks to ensure that
                AI systems used in the EU are transparent, reliable, and safe,
                and that they respect fundamental rights and values. More info.
              </p>
            )}
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
              What's been done so far ?
            </h2>
            {expanded === 2 && (
              <p style={{ marginTop: "10px", fontSize: "18px" }}>
                We did a literature review of the current draft of the EU-AI-ACT
                and capAI conformity assessment procedure for AI systems. Based
                on acquired knowledge and internal feedbacks we also have
                developed an Minimum Viable Product(MVP) of the tool which could
                be potentially used to implement EU-AI-ACT.
              </p>
            )}
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
              Sounds interesting? Could I join the team?
            </h2>
            {expanded === 3 && (
              <p style={{ marginTop: "10px", fontSize: "18px" }}>
                Yes. We are currently looking for highly motivated people from
                different backgrounds who could provoide meaningful feedbacks
                and suggestions for the tool. You are also welcome to propose
                new ideas, debate and organize workshops on the topic.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default IndexPage;
