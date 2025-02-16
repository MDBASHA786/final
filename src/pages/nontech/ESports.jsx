import React, { useEffect } from "react";
import Button from '../../components/Button';

function ESports() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rules = [
    "Each team must consist of (VALORANT-5 members , FREE FIRE-4 members , PUBG-4 members.",
    "Teams will be allotted slots on a first-come, first-served basis.",
    "All team members must adhere to the time limits for each round.",
    "Teams must follow instructions provided by the coordinators for each round.",
    "Any team arriving late to their scheduled round may forfeit their participation.",
    "Cheating, tampering with equipment, or unsportsmanlike behavior will lead to disqualification.",
    "The 'organizers’ decisions will be final in all matters.",
  ];

  return (
    <>
      <div className="events">
        <div className="count-h">ESports</div>
        <div className="count-img">
          <img
            src="/imgs/games/Bgmi.jpeg"
            width={40}
            alt=""
            className="Games"
          />
            
          <img
            src="/imgs/games/FreeFire.jpeg"
            width={40}
            alt=""
            className="Games"
          />
         
          <img
            src="/imgs/games/Valorant.jpeg"
            width={40}
            alt=""
            className="Games"
          />
        </div>

        <div className="d-flex">
          <div className="img">
            <img src="/imgs/nontech/event3.webp" width={450} alt="" />
            <div
              className="btn-ly"
              style={{
                marginTop: -5,
                display: "flex",
                justifyContent: "center",
              }}
            >
              
              {/* <Button /> */}
            </div>
            <h5 style={{ textAlign: "center", marginTop: 34, fontSize: 24 }}>
              PUBG,FREEFIRE
            </h5>
            <h5
              className="event-phone"
              style={{ textAlign: "center", marginTop: 14, fontSize: 21 }}
            >
              +91 6380381466
            </h5>
            <h5 style={{ textAlign: "center", marginTop: 12, fontSize: 24 }}>
              Mahadeer
            </h5>
            <h5 style={{ textAlign: "center", marginTop: 12, fontSize: 24 }}>
              VALORANT
            </h5>
            <h5
              className="event-phone"
              style={{ textAlign: "center", marginTop: 14, fontSize: 21 }}
            >
              +91 8825836592
            </h5>
            <h5 style={{ textAlign: "center", marginTop: 12, fontSize: 24 }}>
              SHANJAY PRIYAN
            </h5>
            <h5 style={{ textAlign: "center", marginTop: 18, fontSize: 20 }}>
              Click To Register
            </h5>
            {/* <h6
              style={{ textAlign: "center", marginTop: 12, color: "#ffffff59" }}
            >
              (Registration Closed)
            </h6> */}
            <div className="regbtn" style={{  textAlign: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}> 
            <a>₹ 100 Per Person</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5D4cJEXXSUc7CneZJoxEfOwnvSDJZKOvZrAOUFI3FVbs9uA/viewform?usp=sharing">
             <Button label="VALORANT" > </Button>
             </a>
             <a href="https://docs.google.com/forms/d/e/1FAIpQLScv6KucQsh90dwmx2N9tOH4JY9YY6GuS4xBsfb3rXbDAb8_Hg/viewform?usp=sharing">
             <Button label="PUBG"> </Button>
             </a>
             <a href="https://docs.google.com/forms/d/e/1FAIpQLSda-QMPT4nS9KabZfgPgbuzIX27hyAkeb5DFs4ErY2E7y0orw/viewform?usp=sharing">
             <Button label="FREE FIRE"></Button>
             </a>
            </div>
            </div>
          </div>
          <div className="info">
            <h2>Description</h2>
            <p>
              Welcome to GameVerse! A thrilling team-based event packed with
              fun, excitement, and challenges that test your taste buds, skills,
              creativity, and teamwork. Compete with others in four engaging
              rounds and aim for victory in this ultimate gaming experience.{" "}
            </p>
            <h2>RULES</h2>
            <ul>
              {rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

            <p style={{ margin: "12px 0" }}>
              <i style={{ color: "orange" }} className="bx bxs-notepad"></i>{" "}
              <strong>Note:</strong> Slight Modifications can be made for the
              competitive matches based on the registration count.
            </p>

            <ul className="students">
              <h2>Coordinators</h2>
              <p>Mahadeer</p>
              <p>Shahul</p>
              <p>Rilwan</p>
              <p>Shanjay Priyan</p>
              <p>Vigneshwaran</p>
            </ul>
          </div>
        </div>
        <div style={{ margin: "auto", textAlign: "center" }}>
          
        </div>
      </div>
    </>
  );
}

export default ESports;
