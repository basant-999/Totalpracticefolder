import React from 'react'

const About = () => {
  return (
<>
     <div className="container my-5 text-white">
      <h1 className="mb-4 text-warning">About Us</h1>
      <p style={{color:"black", fontWeight:"800"}} className="lead">
        Welcome to YourBrand! We are dedicated to providing the best services and products
        to our customers. Our mission is to deliver quality and satisfaction in everything
        we do.
      </p>

      <h3 className="mt-5 text-warning">Our Story</h3>
      <p style={{color:"black", fontWeight:"800"}}>
        Founded in 2020, YourBrand started as a small startup with a big vision. Over the
        years, we have grown into a trusted name known for innovation and customer-centric
        approach.
      </p>

      <h3 className="mt-5 text-warning">Our Team</h3>
      <p style={{color:"black", fontWeight:"800"}}>
        Our team consists of passionate professionals who strive to bring you the best
        experience. From developers to customer support, everyone works with dedication.
      </p>

      <h3 className="mt-5 text-warning">Contact Us</h3>
      <p style={{color:"black", fontWeight:"800"}}>
        Have questions? Reach out to us anytime at <a href="mailto:support@yourbrand.com" className="text-warning">support@yourbrand.com</a>
      </p>
    </div>
</>
  )
}

export default About