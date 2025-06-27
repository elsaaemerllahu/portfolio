import "./Profile.css";
import '../../styles/main.css';
import avatar from "../../assets/avatar.png";
import Button from "../Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const email = "elsaemerllahu12@gmail.com";

  const [showCopied, setShowCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  const navigate = useNavigate();

const handleConnectClick = () => {
  navigate("/contact");
};

  return (
    <div className="profile-card">
      <div className="profile-text">
        {showCopied && <div className="email-toast">Email copied to clipboard!</div>}
        <p className="role-status">
          {/* <span className="dot"></span> */}
          Elsa Emërllahu
        </p>
        <h1 className="name">Frontend Developer</h1>
        <p className="description">
          Frontend developer and graphic designer from Gjilan, Kosovo.
          {/* <br />
          Skilled in HTML/CSS, PHP, React, Photoshop, Illustrator, and more. */}
        </p>
        <div className="buttons">
          
<Button onClick={handleConnectClick}>Let's Connect</Button>

        <Button onClick={handleCopyEmail}>Copy Email</Button>      
        </div>
      </div>
      <img src={avatar} alt="User Avatar" className="avatar" />
    </div>
  );
};

export default Profile;
