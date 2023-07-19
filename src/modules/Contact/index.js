import React from 'react'
// import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactUs = () => {
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };


  return (
    <div className='contact'>
      <div className="contact-det">
<h2>Motorhub</h2>
<p>Ridgeways opposite Ridgeview Inn hotels, Kenya Kiambu Road, P.O Box: 42983 - 00100 Nairobi, Kenya</p>
      <p></p>
      <p>(254) 798 5000 000</p>
      <p>info@motorhub.co.ke</p>
      </div>
      <div className="contact-form">
        <h2>Get In touch
with Us</h2>
<p>Fill the below form. We will get back to you soon.</p>
<form className='form' action="">
 
  <input type="text" placeholder='enter your name' />
 
 
  <input type="email" placeholder='enter your email' />
 
  <input type="number" placeholder='enter your phone number' />
 
  <input type="text" placeholder='enter your message' />
  <button className="btn">Submit</button>
</form>
      </div>
    
    </div>
  )
}

export default ContactUs