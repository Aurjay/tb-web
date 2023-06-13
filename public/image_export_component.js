import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const CardComponent = ({ teamMembers, isPhoneScreen }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
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
          marginBottom: "40px",
        }}
      >
        {teamMembers.map((teamMember, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: isPhoneScreen ? "100%" : "48%",
              marginBottom: "10px",
              background: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              boxSizing: "border-box",
              height: "200px", // Set the height of the card
            }}
          >
            <img
              src={teamMember.photo}
              alt={teamMember.name}
              width={80}
              height={80}
              style={{ borderRadius: "50%", marginBottom: "10px" }}
            />
            <p style={{ fontSize: "18px", margin: 0, textAlign: "center" }}>
              {teamMember.name}
            </p>
            <a
              href={teamMember.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#0077B5",
                display: "flex",
                alignItems: "center",
                marginTop: "5px",
              }}
            >
              LinkedIn
              <FiExternalLink style={{ marginLeft: "5px" }} />
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const App = () => {
  const teamMembers = [
    {
      name: "Deepak Raj (Project Lead)",
      linkedin: "https://www.linkedin.com/in/deepak-raj-9b2460172/",
      photo: "Deepak.jpg",
    },
    {
      name: "Saskia Welsch",
      linkedin:
        "https://www.linkedin.com/in/saskia-welsch-378aa9231?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwGoAHTrxSL6%2BCDTxSUK%2F%2BA%3D%3D",
      photo: "saskia.jpg",
    },
    {
      name: "Hamas Khan",
      linkedin: "https://www.linkedin.com/in/hamaskhan?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQSpV4ykUQuCdQm6orOU%2BwA%3D%3D",
      photo: "hamas.jpg",
    },
    {
      name: "Alexander von Janowski",
      linkedin:
        "https://www.linkedin.com/in/alexander-von-janowski?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZ8rNh3j8SBO%2FdsnvSR0fuQ%3D%3D",
      photo: "alex.jpg",
    },
  ];

  return <CardComponent teamMembers={teamMembers} isPhoneScreen={false} />;
};

export default App;
