import React, { Component } from "react";
export default class Porfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      activeImage: 0,
    };
  }

  handleClick = (e) => {
    let { activeImage } = this.state;
    let { name } = e.target;
    if (name === "next") {
      activeImage++;
      if (activeImage > this.state.item.gifs.length - 1) {
        activeImage = 0;
      }
    } else {
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
                  <div>
                    <div className="portfolio-image">
                      <h4 className="text-white">
                        {`${gif.name} (${this.state.activeImage + 1}/${
                          this.state.item.gifs.length
                        })`}{" "}
                      </h4>
                      <img src={`${gif.url}`} alt={gif.name} />
                    </div>
                    <div
                      style={{ width: "100%" }}
                      className="portfolio-buttons"
                    >
                      <button name="prev" onClick={this.handleClick}>
                        Previous
                      </button>
                      <button name="next" onClick={this.handleClick}>
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </div>
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, i) => {
                  return (
                    <div
                      className="item-wrap"
                      key={i}
                      onClick={(e) => {
                        this.setState({ item });
                        console.log(this.state.item);
                      }}
                    >
                      <a href="#portfolio-popup">
                        <img src={`${item.imgurl}`} className="item-img" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
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
