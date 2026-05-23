import React from "react";
import "./startProject.css";

const StartProject = () => {
  const handleBookMeeting = () => {
    window.open("https://www.cal.eu/kriti-verma15", "_blank");
  };

  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1vRcW1kQTeBmKrOu5WH7pgzKca1btpDym/view?usp=drivesdk",
      "_blank"
    );
  };

  return (
    <div className="start-project-page">
      <main className="project-main">
        <div className="project-container">
          <div className="project-info-section">
            <div className="project-info-content">
              <h1 className="project-title">Ready to start project?</h1>
              <p className="project-description">
                Share your project vision, and we'll bring it to life. Let's collaborate and turn your ideas into reality.
              </p>

              <div className="action-buttons">
                <button className="action-btn cta-btn" onClick={handleBookMeeting}>
                  Book a Meeting
                </button>
                <button className="btn btn-secondary" onClick={handleDownloadResume}>
                  <span className="btn-content">
                    <span className="btn-text">Download Resume</span>
                  </span>
                  <div className="btn-shine"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StartProject;