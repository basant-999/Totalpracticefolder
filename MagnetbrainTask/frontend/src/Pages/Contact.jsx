import React from 'react'

const Contact = () => {
  return (
   <>
      <div style={{width:"500px", margin:"auto" ,border:"2px solid yellow", height:"700px"}}>
        <div className="container my-5 text-white">
      <h1 className="mb-4 text-warning">Contact Us</h1>

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-white">
            Name
          </label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label text-white">
            Email address
          </label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label text-white">
            Message
          </label>
          <textarea className="form-control" id="message" rows="4" placeholder="Your message here..."></textarea>
        </div>

        <button type="submit" className="btn btn-warning">
          Send Message
        </button>
      </form>

      <div className="mt-5">
        <h4 className="text-warning">Our Contact Details</h4>
        <p>Email: <a href="mailto:support@yourbrand.com" className="text-warning">support@yourbrand.com</a></p>
        <p>Phone: <a href="tel:+1234567890" className="text-warning">+1 234 567 890</a></p>
        <p>Address: 123 YourBrand Street, City, Country</p>
      </div>
    </div>

    </div>
  
   </>
  )
}

export default Contact