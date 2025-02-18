import React, { useEffect } from "react";
import Button from "../../components/Button";

function BioScope() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rules = [
    "TEach team must consist of 3 members .",
    "Each team gets a limited time to guess the movie or song.",
    "No phones or outside help allowed",
    "Organizers’ decisions are final.",
  ];

  const round1 = [
    "Players will be given a combination of images and song lyrics as clues. Using these clues, they must figure out the name of the respective movie or song within the given time.",
  ];

  const round2 = [
    "Players will draw movie names from a bowl. One team member will then act out the movie name (without speaking) for their teammates to guess correctly within the time limit.",
  ];

  const round3 = [
    "Players need to find the song from the BGM played ",
  ];

  const round4 = ["SURPRISE ROUND"];

  return (
    <>
      <div className="events">
        <div className="count-h">BioScope</div>
        <div className="count-p">Connections</div>

        <div className="d-flex">
          <div className="img">
            <img src="/imgs/nontech/event4.webp" width={450} alt="" />
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
              +91 6383331747
            </h5>
            <h5 style={{ textAlign: "center", marginTop: 12, fontSize: 24 }}>
              Naveeth
            </h5>
            
            <h5
              className="event-phone"
              style={{ textAlign: "center", marginTop: 34, fontSize: 21 }}
            >
              +91 9150240636
            </h5>
            <h5 style={{ textAlign: "center", marginTop: 12, fontSize: 24 }}>
             Aathika
            </h5>
            {/* <h6
              style={{ textAlign: "center", marginTop: 12, color: "#ffffff59" }}
            >
              (Registration Closed)
            </h6> */}
             <div className="regbtn" style={{  textAlign: "center" }}>
             <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}> 
             <a>₹ 100 Per Person</a>
             <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-xUyNB8iIJvNm2k11Y6h7Lv4odbYTnvQgR9CDFnd4xb8rxA/viewform?usp=sharing">
              <Button > </Button>
             </a>
             </div>
             </div>
          </div>
          <div className="info">
            <h2>Description</h2>
            <p>
              Bio Scope is a fun and simple game for all movie and music lovers!
              The goal is to guess the name of a movie or song within a limited
              time. Players will be given exciting hints, images, or clues to
              help them figure out the answer. The clues can be tricky, funny,
              or creative, making the game even more entertaining. It’s all
              about quick thinking and having fun with friends. If you love
              movies and music, this is your chance to show off your skills and
              enjoy the thrill of guessing!
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
              <p>Naveeth</p>
              <p>Thamim</p>
              <p>Faizal</p>
              <p>Niyaz</p>
              <p>Aathika</p>
            </ul>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default BioScope;
