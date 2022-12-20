import React, { Component } from "react";
import $ from "jquery";
export default class Porfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      activeImage: 0,
    };
  }

  handleClick = (e) => {
    if (!e.target) return;
    let { activeImage } = this.state;
    let { name, id } = e.target;
    console.log("name", name);
    if (id === "poppup-github") {
      window.open(this.state.item.repo, "_blank");
      return;
    } else if (name === "next") {
      activeImage++;
      if (activeImage > this.state.item.gifs.length - 1) {
        activeImage = 0;
      }
    } else if (name === "prev") {
      activeImage--;
      if (activeImage < 0) {
        activeImage = this.state.item.gifs.length - 1;
      }
    }
    this.setState({ activeImage });
  };

  render() {
    let resumeData = this.props.resumeData;
    let gif = this.state.item.name
      ? this.state.item.gifs[this.state.activeImage]
      : {};
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Work.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <div id="portfolio-popup" className="portfolio-popup mfp-hide">
                {this.state.item.name && (
                  <>
                    <div className="portfolio-image" onClick={this.handleClick}>
                      <h4 className="text-white">
                        {`${gif.name} (${this.state.activeImage + 1}/${
                          this.state.item.gifs.length
                        })`}
                      </h4>
                      <img
                        src={`${gif.url}`}
                        alt={gif.name + " portfolio image"}
                      />
                    </div>
                    <div
                      style={{ width: "100%" }}
                      className="portfolio-buttons"
                    >
                      <button name="prev" onClick={this.handleClick}>
                        Previous
                      </button>
                      {this.state.item.repo && (
                        <i
                          id="poppup-github"
                          className="fa fa-github"
                          onClick={this.handleClick}
                        />
                      )}
                      <button name="next" onClick={this.handleClick}>
                        Next
                      </button>
                    </div>
                  </>
                )}
              </div>
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, i) => {
                  return (
                    <div
                      className="item-wrap"
                      key={i}
                      onClick={(e) => {
                        this.setState({
                          item,
                          activeImage: 0,
                        });
                        console.log(this.state.item);
                      }}
                    >
                      <a href="#portfolio-popup">
                        <img
                          src={`${item.imgurl}`}
                          name="item-img"
                          className="item-img"
                        />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                            <h5 style={{ display: "inline" }}>
                              Techologies Used:{" "}
                            </h5>
                            <ul id="tech-list">
                              {item.tech.map((tech, i) => {
                                return (
                                  <li key={i}>
                                    <i className="fa fa-check" />
                                    {tech}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
