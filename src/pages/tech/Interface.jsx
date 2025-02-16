import React, { useEffect } from "react";
import Button from "../../components/Button";

function Interface() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rules = [
    "Complete the challenge within 2 Hours.",
    "Each Team Must Consist of 2 Members",
    "The Requirements of the design will be said on spot.",
    "Bring your laptop with preferred design software. (Figma, Sketch, etc)",
    "Topic Will Be Said On Spot"
  ];
  const round1 = [
    "On spot topic will be given and requirements of the design will be listed , Teams will proceed to the round 2 on verifying the requirements in the design.",
  ];

  const round2 = [
    "New requirements will be given which would be complex . The requirements must be implemented on your design from round 1 .",
  ];

  return (
    <>
      <div className="events">
        <div className="count-h">Interface</div>
        <div className="count-p">UI/UX Design</div>

        <div className="d-flex">
          <div className="img">
            <img src="/imgs/tech/event4.webp" width={450} alt="" />
            <div
              className="btn-ly"
              style={{
                marginTop: 56,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* <Button /> */}
            </div>
            <h5
              className="event-phone"
              style={{ textAlign: "center", marginTop: 12, fontSize: 21 }}
            >
              +91 82207 18737
            </h5>
            <h5 style={{ textAlign: 'center', marginTop: 12, fontSize: 24 }}>Lokesh</h5>
            {/* <h6
              style={{ textAlign: "center", marginTop: 12, color: "#ffffff59" }}
            >
              (Registration Closed)
            </h6> */}
            <div className="regbtn" style={{  textAlign: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}> 
            <a>₹ 100 Per Person</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe4gD8hGiO1VpZllED1bfwzNfnIJNkxRqzCZsgzLtCO5KzkfA/viewform?usp=header">
             <Button > </Button>
             </a>
            </div>
            </div>
          </div>
          <div className="info">
            <h2>Description</h2>
            <p>
              UI/UX design focuses on creating user-friendly interfaces and
              experiences by understanding user needs, behaviors, and goals. It
              involves visual design, interaction design, and usability testing
              to ensure intuitive and engaging designs
            </p>
            <h2>Rules</h2>
            <ul>
              {rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

            <h2>Example Themes</h2>
            <ul style={{ textAlign: "center", listStyle: "none" }}>
              <li>
                <i className="bi bi-instagram"></i> Social Media
              </li>
              <li>
                <i className="bx bxs-bowl-hot"></i> Food Delivery
              </li>
              <li>
                <i className="bi bi-cart"></i> Ecommerce
              </li>
              <li>
                <i className="bi bi-music-note-list"></i> Music App
              </li>
            </ul>

            <ul className="students">
              <h2>Coordinators</h2>
              <p>Lokesh</p>
              <p>Absha Abdulla S</p>
            </ul>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Interface;
