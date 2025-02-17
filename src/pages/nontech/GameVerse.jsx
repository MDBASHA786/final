import React, { useEffect } from "react";
import Button from "../../components/Button";

function GameVerse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rules = [
    " Each team must consist of 4 members.",
    "Teams will be allotted slots on a first-come, first-served basis.",
    "All team members must adhere to the time limits for each round.",
    "Teams must follow instructions provided by the coordinators for each round.",
    "Any team arriving late to their scheduled round may forfeit their participation.",
    "Cheating, tampering with equipment, or unsportsmanlike behavior will lead to disqualification.",
    "The organizers’ decisions will be final in all matters.",
  ];

  const round1 = [
    "FLAVOR RUSH:",
    "Blindfolded Taste Test where team members identify raw fruits and vegetables.",
    "Time Limit: 40 Seconds per team..",
  ];

  const round2 = [
    "–ROLL & SCORE",
"Two teams compete in parallel, where they roll balls into a set of cups attached to a table, aiming to score as many points as possible before the timer runs out. Points are awarded based on which cup the ball lands in, with each cup having a different point value. Each cup scores only once, no matter how many balls land in it.",
 "Time Limit: 90 Seconds per team.",
  ];

  const round3 = [
    "DRAW & GUESS",
"Teams guess as many clues as possible based on drawings made by their teammates.",
"Time Limit: 90 Seconds per team.",
  ];

  const round4 = [
    "THE RELAY CHALLENGE!",
"Consists of three thrilling levels, with each team member playing their assigned level in a relay format. The three relay tasks will be revealed on the spot..",
  ];

  return (
    <>
      <div className="events">
        <div className="count-h">GameVerse</div>
        <div className="count-p">Connections</div>

        <div className="d-flex">
          <div className="img">
            <img src="/imgs/nontech/event1.webp" width={450} alt="" />
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
            <h5
              className="event-phone"
              style={{ textAlign: "center", marginTop: 34, fontSize: 21 }}
            >
              +91 8610257209
            </h5>
            <h5 style={{ textAlign: "center", marginTop: 12, fontSize: 24 }}>
              Janani
            </h5>
            {/* <h6
              style={{ textAlign: "center", marginTop: 12, color: "#ffffff59" }}
            >
              (Registration Closed)
            </h6> */}
            <div className="regbtn" style={{  textAlign: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}> 
            <a>₹ 100 Per Person</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdI_I58zlIuCfUXIWBB-jU6OmN9Pf6ceMt6o1ZRvQV7zNjVIg/viewform?usp=sharing">
             <Button > </Button>
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
              rounds and aim for victory in this ultimate gaming experience.
            </p>
            <h2>Rules</h2>
            <ul>
              {rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

            <h2>Round-1</h2>
            <ul>
              {round1.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

            <h2>Round-2</h2>
            <ul>
              {round2.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

            <h2>Round-3</h2>
            <ul>
              {round3.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

            <h2>Round-4</h2>
            <ul>
              {round4.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

            <ul className="students">
              <h2>Coordinators</h2>
              <p>Janani V</p>
              <p>Rahimunisha Begam M S</p>
              <p>Nivetha</p>
            </ul>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default GameVerse;
