import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Seeking new career opportunities <span> present</span></h2>
                        <p> As a new graduate, I am seeking new opportunities in Software Engineering to further enhance and apply my skills. I love meeting new people and being challenged on new projects. I have a deep passion in frontend development and want to learn as much as I possibly can!</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>California Academy of Sciences<span> 2018 - present </span></h2>
                        <p>Working in the Guest Experience department, I am constantly working with new teammates to ensure quality service to all guests as well as maintain efficient operations of every exhibit. Beyond this, I am also responsible for all guest relations involving memberships, payments, and overall guest experience. Through these experiences I have been able to provide platinum service and display an exceptional quality of work everyday.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduate Student from San Francisco State University <span>2015 - 2019</span></h2>
                        <p>I recently completed my Bachelors of Science with a discipline in Computer Science this past May, as a student I was able to successfully complete difficult challenges and constantly learn new languages such as the main frontend web development languages (Reactjs, Nodejs, HTML5, CSS3), Java, C++, objective C, and Swift. During my years in college, I developed a deep passion towards frontend development and have decided to move forward in this field to learn and apply my skills as best as I possibly can.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
