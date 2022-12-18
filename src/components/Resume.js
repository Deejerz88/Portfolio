import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return <section id="resume">
        <div className="row mx-auto text-center">
          <a id='download-resume' href={resumeData.resume} className="button">
            <i className="fa fa-download mx-3" />
          {" "}Download Resume
          </a>
        </div>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education && resumeData.education.map((item, i) => {
                return <div key={i} className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>;
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work && resumeData.work.map((item, i) => {
                return <div key={i} className="row item">
                    <div className="twelve columns">
                      <h3>{item.specialization}</h3>
                      <p className="info">
                        {item.CompanyName}
                        <span>&bull;</span> <em className="date">
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>;
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>

            <div className="bars">
              <ul className="skills">
                {resumeData.skills && resumeData.skills.map((item, i) => {
                    return <li key={i}>
                        <span className={`bar-expand ${item.skillname.toLowerCase()}`} />
                        <em>{item.skillname}</em>
                      </li>;
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>;
  }
}
