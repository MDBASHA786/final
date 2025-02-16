import React, { useEffect } from "react";
import Button from "../../components/Button";

function PaperCres() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 
  const topics = [
    "1.	Artificial Intelligence (AI)",
    "2.	Machine Learning (ML)",
    "3.	Deep Learning",
    "4.	Computer Vision",
    "5.	Natural Language Processing (NLP)",
    "6.	Data Science",
    "7.	Internet of Things (IoT)",
    "8.	Cloud Computing",
    "9.	Cybersecurity",
    "10.	Blockchain Technology",
    "11.	Edge Computing",
    "12.	Big Data Analytics",
    "13.	Robotics",
    "14.	Human-Computer Interaction (HCI)",
    "15.	Quantum Computing"
   ,
  ];

  const rules = [
    "1.	Paper Submission: ",
    "o	Submit your paper in the prescribed format (PDF/Word) by the deadline.",
    "o	Papers must be original and plagiarism-free",
    "2. Team Composition:",
    "o	A team can consist of a maximum of two students.",
    "o	Both team members must be from the same institution.",
    "3.	Presentation Guidelines:",
    "o	The presentation should last 8-10 minutes, followed by a 2-minute Q&A session.",
    "o	Participants are encouraged to use PowerPoint .",
    "o	The total number of slides should not exceed 10.",
    "4.	Time Management:",
    "o	Presentations should strictly adhere to the allotted time.",
    "o	Late or incomplete presentations may face penalties.",
    "5.	Code of Conduct:",
    "o	Maintain professionalism throughout the presentation and Q&A.",
    "o	Disruptive or inappropriate behavior will lead to disqualification.",
    "6.	Decision of Judges:",
    "o	The judges’ decisions will be final and binding."
  ];

  return (
    <>
      <div className="events">
        <div className="count-h">PaperCres </div>
        <div className="count-p">PaperPresentation</div>

        <div className="d-flex">
          <div className="img">
            <img src="/imgs/tech/event1.webp" width={450} alt="" />
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
              style={{ textAlign: "center", marginTop: 28, fontSize: 21 }}
            >
              +91 9750686862
            </h5>
            <h5 style={{ textAlign: "center", marginTop: 12, fontSize: 24 }}>
             Muhammad Owais
            </h5>

            <a
              target="_blank"
              href="https://drive.google.com/drive/folders/1B_bE0cwAyEb6qlJ1MPMa0NpQ14tzGc7b"
            >
              <h6
                style={{
                  marginTop: 28,
                  cursor: "pointer",
                  fontSize: 21,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#c03aff",
                }}
              >
                <img
                  style={{ borderRadius: 0, width: "38px !importnat" }}
                  width={38}
                  src="/imgs/drive.png"
                  alt="google-drive"
                  className="eventIcon"
                />
                &nbsp;&nbsp;Upload Your PPT
              </h6>
            </a>

            <h6
              style={{ textAlign: "center", marginTop: 12, color: "#ffffff59" }}
            >
              (Registration Closed)
            </h6>
            <div className="regbtn" style={{  textAlign: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}> 
            <a>₹ 100 Per Person</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScnNbVqfSnP-zi83AUfdZJRpa67PiHbow1BYmK8HUNF9zZvMg/viewform?usp=header">
             <Button > </Button>
             </a>
            </div> 
            </div>
          </div>
          <div className="info" id="paper">
          <h2>Topics</h2>
          <h2>Description</h2>
            <p>
            The Paper Presentation event offers a platform for participants to 
            showcase their innovative ideas and research in cutting-edge fields 
            like Artificial Intelligence, IoT, Data Science, Cybersecurity, and more. 
            It encourages critical thinking, effective communication, and scientific analysis as 
            participants present their work to a panel of judges and an audience. Evaluation will be 
            based on originality, relevance, clarity, and engagement, including a Q&A session
            to assessthe depth of knowledge. This is a chance to share insights, gain feedback, 
            and make an impact in your area of expertise!
            </p>
            <h2>Topics</h2>
          
            <ul style={{liststyle: "none"}}>
              {topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            
            </ul>

            <h2>RULES</h2>
            <ul style={{liststyle: "none"}}>
              {rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

            <ul className="students">
              <h2>Coordinators</h2>
              <p>Muhammad Owais</p>
              <p>Nithin</p>
              <p>Noorul Hassan</p>
              {/* <p>Aravind G</p>
              <p>Janani P</p>
              <p>Arun KH</p>
              <p>Sachin R</p>  */}
            </ul>
          </div>
        </div>
      
      </div>
    </>
  );
}

export default PaperCres;
