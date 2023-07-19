import { Card } from "@material-ui/core";
import React from "react";

const Trade = () => {
  return (
    <div className="trade-in">
      <h1>Trade In</h1>
      <h6>
        Trade in your car and top up to get a new one. Are you interested in
        Trading in your vehicle? Text Motorhub to 20360 / call us via 0727 200
        200 and 0798 500 000 Or fill the form below and find out the worth of
        your car.
      </h6>

      <div className="trade-in-card">
        <img
          src="https://www.motorhub.co.ke/assets/images/trade-carr.jpg"
          alt=""
        />
        <Card className="trade-card">
          <h1>SELL YOUR CAR TODAY !!!</h1>
          <h4>Fill the below form. We will get back to you soon.</h4>
          <form className="trade-form" action="">
            <div className="one">
              <div className="one-sec">
                <div>
                  {" "}
                  <label htmlFor="">Name</label>
                </div>
                <div>
                  {" "}
                  <input type="text" placeholder="Name" />
                </div>
              </div>

              <div className="one-sec">
                <div>
                  {" "}
                  <label htmlFor="">Email</label>
                </div>
                <div>
                  {" "}
                  <input type="email" placeholder="email" />
                </div>
              </div>
            </div>
            <div className="one">
            <div className="one-sec">
                <div>
                  {" "}
                  <label htmlFor="">Phone Number</label>
                </div>
                <div>
                  {" "}
                  <input type="number" placeholder="phone number" />
                </div>
              </div>
              <div className="one-sec">
                <div>
                  {" "}
                  <label htmlFor="">Make</label>
                </div>
                <div>
                  {" "}
                  <input type="text" placeholder="Make" />
                </div>
              </div>
            </div>
            <div className="one">
            <div className="one-sec">
                <div>
                  {" "}
                  <label htmlFor="">Model</label>
                </div>
                <div>
                  {" "}
                  <input type="text" placeholder="model" />
                </div>
              </div>
              <div className="one-sec">
                <div>
                  {" "}
                  <label htmlFor="">Year</label>
                </div>
                <div>
                  {" "}
                  <input type="text" placeholder="Year" />
                </div>
              </div>
            </div>
            <div className="one">
              
            <div className="one-sec">
                <div>
                  {" "}
                  <label htmlFor="">Lisence Plate</label>
                </div>
                <div>
                  {" "}
                  <input type="text" placeholder="License" />
                </div>
              </div>
              
            </div>
            <p style={{padding:'2rem'}}>I agree to receive marketing emails from MotorHub


I agree

I disagree
Kindly note that these email include but are not limited to newsletters, promotional offers and announcements from MotorHub. Each email you receive from us provides a one-click method to unsubscribe from the distribution list.


I have read and agree to MotorHub' Privacy Policy & Terms Of Use.</p>
            <button className="btn">Submit</button>
          </form>
          
        </Card>
      </div>
    </div>
  );
};

export default Trade;
