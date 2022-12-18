import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <a
                href={`mailto:${resumeData.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Email: {resumeData.email}</h4>
              </a>
              <a
                href={`${resumeData.socialLinks[0].url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>LinkedIn: {resumeData.linkedIn}</h4>
              </a>
              <a
                href={`${resumeData.socialLinks[1].url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>GitHub: {resumeData.github}</h4>
              </a>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
