import React, { Component } from "react";

export default class OpenScreen extends Component {

  render() {
    return (
     <div className="somee">
         <div className="some"></div>
        <div className="new">
           
            
  
          <div id="opener">
          {/* <img className="card-img-top" src={process.env.PUBLIC_URL + "CoverF.jpg"} alt="Nameeee" height="250" width="2000"></img> */}
          <h1 className="center-text">Here to deliver All The Smoke</h1>
          </div>
         
          <div className="holder">
              <div className="row">
                  <div id="about">
                  <div className="img-hold">
                      <img className="img" src={process.env.PUBLIC_URL + "coverD.jpg"} alt="name" width="270" height="270"/>
                  </div>
                    <h2 id="aheader">All The Smoke is on a mission to deliver for goods the greater good</h2>
                    <p >
                    As Illinois’s largest legal cannabis marketplace, we bring enjoyment and convenience to our customers, break down barriers to access, and cultivate community in everything we do. 
                    With over six million cannabis deliveries to-date, we are committed to creating a more diverse and sustainable industry through our tireless efforts to provide our community with their needs.</p>
                  </div>

              </div>
              <div className="row">
                <div id="about">
                <div className="img-hold">
                <img className="img" src={process.env.PUBLIC_URL + "unnamed.jpg"} alt="name" width="270" height="270"/>
                  </div>
                    <h2 id="cheader">Where we started</h2>
                <p>
                Growing up in America there was always a stigma that surrounded cannibis. The first time I saw someone in my family was arrested for possession of the plant was when I was 3.
                I didn't understand exactly what was going on but the older and more educated I became on cannabis the more I felt that I would be a change. 
                The inspiration for All The Smoke was and will always remain, to create a world of happiness for everyone to thrive while having their needs conveniently met.
                </p>
              </div>

              </div>
              <div className="row">
                 
                <div id="about">
                <div className="img-hold">
                <img className="img" src={process.env.PUBLIC_URL + "unnamed2.jpg"} alt="name" width="270" height="270"/>
                  </div>
                    <h2 id="nheader">What's Next?</h2>
                    <p>
                    Beyond serving our community we wish to uplift them as well with our Ignite Campaign and Movement For The People Program . In addition over the next 5 months we will be unvailing our legal services team to provide council/aid to anyone facing charges for cannabis.
                    All The Smoke aims to go global. Branching out into every legal cannabis marketplace worldwide.
                    </p>
              </div>

              </div>
          </div>

         </div>
         
       </div>
  
    );
  }
}
